
window.TPUR = window.TPUR || {}
window.TPUR.config = {
  'host': '',
  //'comboboxInfoURI': '/combobox-info',
  //'calculatorURI': '/calculator',
  'convertPayload': function(viewModal) {
    var payoutDate = viewModal.payoutDate.format('DD.MM.YYYY')
    var ases = [];
    var len = viewModal.additionalSecurities.length;
    for (var i = 0; i < len; i++) {
      ases[ases.length] = {
        amount: viewModal.additionalSecurities[i].value,
        additionalSecurity: viewModal.additionalSecurities[i].type
      };
    }
    return {
      bankCode: viewModal.bank,
      languageCode: 'en',
      dossier: {
        calculationBase: {
          businessCase: {
            businessCreationType: viewModal.businessCase
          },
          funding: {
            segment: viewModal.segment,
            propertyType: viewModal.typeOfProperty,
            rating: viewModal.rating,
            marketValue: viewModal.marketValue,
            mortgageAmount: viewModal.mortgageAmount,
            ratingAgency: viewModal.ratingAgency,
            business: viewModal.business,
            contributionMargin: viewModal.contributionMargin
          },
          financialCheck: {
            etpFeasibility: viewModal.etpFeasibility,
            violationMinRequirements: viewModal.violationMinimalRequirement,
            additionalSecurityManagement: {
              additionalSecurities: ases
            }
          }
        },
        product: {
          currentTranche: {
            productCode: viewModal.product,
            amountPiece: viewModal.amount,
            payOutDate: payoutDate,
            period: 2
          }
        },
        debtorManagement: {
          debtors: [
            {
              person: {
                firstName: 'System',
                lastName: 'User',
                nationality: 'Vietnam'
              },
              address: {
                zipCode: '70000',
                city: 'HCM',
                country: viewModal.foreignSurcharge ? 'CH' : 'EN'
              }
            }
          ]
        }
      }
    }
  },
  'convertResult': function(result) {
    return result;
  }
}
