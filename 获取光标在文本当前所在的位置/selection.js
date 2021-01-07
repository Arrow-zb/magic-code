const Selection = {
  getPosition (obj) {
    var pos = 0
    if (document.selection) {
      obj.focus()
      var Sel = document.selection.createRange()
      Sel.moveStart('character', -obj.value.length)
      pos = Sel.text.length
    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
      pos = obj.selectionStart
    }
    return pos
  }
}

export default Selection
