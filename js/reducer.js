function reducer (currenState, action) {
  var state = Object.assign({}, currenState)

  switch (action.type) {
    case 'CHOOSE_CELL':
      console.log(action.cellid)

      return state
  }

  return state
}

module.exports = reducer
