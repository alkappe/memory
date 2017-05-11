var Component = require('./Component')

var Cell = require('./Cell')

class Root extends Component {
  constructor (element, dispatch) {
    super(element, dispatch)

    this.component.cell1 = new Cell(document.getElementById('cell1'), dispatch)
    this.component.cell2 = new Cell(document.getElementById('cell2'), dispatch)
    this.component.cell3 = new Cell(document.getElementById('cell3'), dispatch)
    this.component.cell4 = new Cell(document.getElementById('cell4'), dispatch)
    this.component.cell5 = new Cell(document.getElementById('cell5'), dispatch)
    this.component.cell6 = new Cell(document.getElementById('cell6'), dispatch)
    this.component.cell7 = new Cell(document.getElementById('cell7'), dispatch)
    this.component.cell8 = new Cell(document.getElementById('cell8'), dispatch)
    this.component.cell9 = new Cell(document.getElementById('cell9'), dispatch)
  }
}

module.exports = Root
