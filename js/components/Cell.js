var Component = require('./Component')

class Cell extends Component {
  constructor (element, dispatch) {
    super(element, dispatch)

    element.onclick = function (event) {
      if (element.className === 'selected') {
        element.className = ''
      } else {
        element.className = 'selected'
      }
    }
  }
}

module.exports = Cell
