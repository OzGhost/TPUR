
window.TPUR = window.TPUR || {}
window.TPUR.config = {
  'host': 'http://localhost:3000',
  'comboboxInfoURI': '/combobox-info',
  'calculatorURI': '/calculator',
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
    return {
      expiryDate: "04.09.2018",
      calculationResults: [
        {
          period: 1,
          ruleResults: {
            MARKET_BALANCING: 10,
            FORWARD: 0,
            IRS: 0,
            REFINANCING: 0,
            HEDGE_COSTS: 0,
            FLOOR: 115,
            RECOMMENDED_INTEREST_RATE: 192.63076923076923,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 182.63076923076923,
            PRODUCTION: 0,
            DUTY_COSTS: 118.78461538461538,
            DISTRIBUTION_COSTS: 3.8461538461538463,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 73.84615384615384,
            COMPETENCE_LEVEL_6: 192.63076923076923,
            COMPETENCE_LEVEL_3: 13.846153846153847,
            COMPETENCE_LEVEL_4: 73.84615384615384,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 13.846153846153847,
            COMPETENCE_LEVEL_2: 13.846153846153847,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 2,
          ruleResults: {
            MARKET_BALANCING: 20,
            FORWARD: 0,
            IRS: -49,
            REFINANCING: 49,
            HEDGE_COSTS: 0,
            FLOOR: 115,
            RECOMMENDED_INTEREST_RATE: 200.7076923076923,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 190.7076923076923,
            PRODUCTION: 0,
            DUTY_COSTS: 118.78461538461538,
            DISTRIBUTION_COSTS: 1.9230769230769231,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 81.92307692307692,
            COMPETENCE_LEVEL_6: 200.7076923076923,
            COMPETENCE_LEVEL_3: 11.923076923076923,
            COMPETENCE_LEVEL_4: 81.92307692307692,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11.923076923076923,
            COMPETENCE_LEVEL_2: 11.923076923076923,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 3,
          ruleResults: {
            MARKET_BALANCING: 30,
            FORWARD: 0,
            IRS: -38,
            REFINANCING: 38,
            HEDGE_COSTS: 0,
            FLOOR: 115,
            RECOMMENDED_INTEREST_RATE: 210.06666666666666,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 200.06666666666666,
            PRODUCTION: 0,
            DUTY_COSTS: 118.78461538461538,
            DISTRIBUTION_COSTS: 1.2820512820512822,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 91.28205128205128,
            COMPETENCE_LEVEL_6: 210.06666666666666,
            COMPETENCE_LEVEL_3: 11.282051282051283,
            COMPETENCE_LEVEL_4: 91.28205128205128,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11.282051282051283,
            COMPETENCE_LEVEL_2: 11.282051282051283,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 4,
          ruleResults: {
            MARKET_BALANCING: 30,
            FORWARD: 0,
            IRS: -28,
            REFINANCING: 28,
            HEDGE_COSTS: 0,
            FLOOR: 120,
            RECOMMENDED_INTEREST_RATE: 209.7846153846154,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 199.7846153846154,
            PRODUCTION: 0,
            DUTY_COSTS: 118.78461538461538,
            DISTRIBUTION_COSTS: 1,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 91,
            COMPETENCE_LEVEL_6: 209.7846153846154,
            COMPETENCE_LEVEL_3: 11,
            COMPETENCE_LEVEL_4: 91,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11,
            COMPETENCE_LEVEL_2: 11,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 5,
          ruleResults: {
            MARKET_BALANCING: 33,
            FORWARD: 0,
            IRS: -17,
            REFINANCING: 23,
            HEDGE_COSTS: 0,
            FLOOR: 120,
            RECOMMENDED_INTEREST_RATE: 218.7846153846154,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 208.7846153846154,
            PRODUCTION: 0,
            DUTY_COSTS: 124.78461538461538,
            DISTRIBUTION_COSTS: 1,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 94,
            COMPETENCE_LEVEL_6: 218.7846153846154,
            COMPETENCE_LEVEL_3: 11,
            COMPETENCE_LEVEL_4: 94,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11,
            COMPETENCE_LEVEL_2: 11,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 6,
          ruleResults: {
            MARKET_BALANCING: 43,
            FORWARD: 0,
            IRS: -7,
            REFINANCING: 25,
            HEDGE_COSTS: 0,
            FLOOR: 126,
            RECOMMENDED_INTEREST_RATE: 240.7846153846154,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 230.7846153846154,
            PRODUCTION: 0,
            DUTY_COSTS: 136.7846153846154,
            DISTRIBUTION_COSTS: 1,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 104,
            COMPETENCE_LEVEL_6: 240.7846153846154,
            COMPETENCE_LEVEL_3: 11,
            COMPETENCE_LEVEL_4: 104,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11,
            COMPETENCE_LEVEL_2: 11,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 7,
          ruleResults: {
            MARKET_BALANCING: 43,
            FORWARD: 0,
            IRS: 3,
            REFINANCING: 24,
            HEDGE_COSTS: 0,
            FLOOR: 132,
            RECOMMENDED_INTEREST_RATE: 249.7846153846154,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 239.7846153846154,
            PRODUCTION: 0,
            DUTY_COSTS: 145.7846153846154,
            DISTRIBUTION_COSTS: 1,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 104,
            COMPETENCE_LEVEL_6: 249.7846153846154,
            COMPETENCE_LEVEL_3: 11,
            COMPETENCE_LEVEL_4: 104,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11,
            COMPETENCE_LEVEL_2: 11,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 8,
          ruleResults: {
            MARKET_BALANCING: 46,
            FORWARD: 0,
            IRS: 12,
            REFINANCING: 22,
            HEDGE_COSTS: 0,
            FLOOR: 138,
            RECOMMENDED_INTEREST_RATE: 259.7846153846154,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 249.7846153846154,
            PRODUCTION: 0,
            DUTY_COSTS: 152.7846153846154,
            DISTRIBUTION_COSTS: 1,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 107,
            COMPETENCE_LEVEL_6: 259.7846153846154,
            COMPETENCE_LEVEL_3: 11,
            COMPETENCE_LEVEL_4: 107,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11,
            COMPETENCE_LEVEL_2: 11,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 9,
          ruleResults: {
            MARKET_BALANCING: 43,
            FORWARD: 0,
            IRS: 21,
            REFINANCING: 25,
            HEDGE_COSTS: 0,
            FLOOR: 144,
            RECOMMENDED_INTEREST_RATE: 268.7846153846154,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 258.7846153846154,
            PRODUCTION: 0,
            DUTY_COSTS: 164.7846153846154,
            DISTRIBUTION_COSTS: 1,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 104,
            COMPETENCE_LEVEL_6: 268.7846153846154,
            COMPETENCE_LEVEL_3: 11,
            COMPETENCE_LEVEL_4: 104,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11,
            COMPETENCE_LEVEL_2: 11,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        },
        {
          period: 10,
          ruleResults: {
            MARKET_BALANCING: 44,
            FORWARD: 0,
            IRS: 29,
            REFINANCING: 24,
            HEDGE_COSTS: 0,
            FLOOR: 150,
            RECOMMENDED_INTEREST_RATE: 276.7846153846154,
            EQUITY_CAPITAL: 98.58461538461539,
            MINIMAL_OFFER: 266.7846153846154,
            PRODUCTION: 0,
            DUTY_COSTS: 171.7846153846154,
            DISTRIBUTION_COSTS: 1,
            COMPETENCE_LEVEL_7: null,
            RISK: 0.2,
            COMPETENCE_LEVEL_8: null,
            FOREIGN_SURCHARGE: 50,
            COMPETENCE_LEVEL_5: 105,
            COMPETENCE_LEVEL_6: 276.7846153846154,
            COMPETENCE_LEVEL_3: 11,
            COMPETENCE_LEVEL_4: 105,
            ETP_FEASIBILITY: 20,
            COMPETENCE_LEVEL_1: 11,
            COMPETENCE_LEVEL_2: 11,
            VOLUME_DISCOUNT: -10,
            SURCHARGE: 10
          }
        }
      ],
      calculationFile: {
        fileContent: "...",
        hashCode: "99bd56018f419faf0682"
      }
    }
  }
}
