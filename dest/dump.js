function kickoff() {
  var target = document.getElementsByClassName('blocker__ground')[0]
  var lock = true
  
  function switching() {
    var styleClass = 'blocker__ground' + (lock ? ' lock' : '')
    target.className = styleClass
    lock = !lock
    setTimeout(switching, 5000)
  }
  //switching()
}

window.onload = kickoff
