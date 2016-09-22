import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to save max', () => {
    const response = []
    const expectedAction = {
      type: 'SAVE_MAX',
      response
    }
    expect(actions.setMax(response)).toEqual(expectedAction)
  })
})

// continue here:
// https://github.com/reactjs/redux/blob/master/docs/recipes/WritingTests.md
