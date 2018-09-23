
window.TPUR = window.TPUR || {}
window.TPUR.config = {
    'host': 'http://localhost:3000'
  , 'comboboxInfoURI': '/combobox-info'
  , 'calculatorURI': '/calculator'
  , 'convertPayload': function(viewModal) {
      var payoutDate = viewModal.payoutDate.format('DD.MM.YYYY')
      return Object.assign({}, viewModal, {payoutDate})
    }
  , 'convertResult': function(result) {
      return [
        
      ]
    }
}
