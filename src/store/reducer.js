
// This is not finishing jet. Importing redux in project!
const initilaState = {
	frameworks: ['1', '2', '3', '4', '5', '6', '7', '8'],

	duplicatedFrameworks: [],
	randomizedFrameworks: [],
	finalizedFrameworks: [],
	openedFrameworks: [],
};

const reducer = (state = initilaState, action) => {
	const newState = { ...state };

	if (action.type === 'ROTATE') {
		newState = { ...state,
		};
	}

	return newState;
};

export default reducer;
