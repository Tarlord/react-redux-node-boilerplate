const initialState = {
  flag: true
}

export default function testReducers (state = initialState, action) {
	switch (action.type) {
		case 'TEST_ACTION':
			return {flag: !state.flag}
		default:
			return state
	}
}

