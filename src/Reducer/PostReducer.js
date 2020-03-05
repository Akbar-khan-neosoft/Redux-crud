const initialState = {
	postList: [],
};

const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_POST': {
			let list = state.postList;
			list.push(action.payload);
			return {
				...state,
				postList: list,
			};
		}
		case 'DELETE_POST': {
			let list = state.postList;
			let index = list.findIndex(index => index.id === action.payload);
			// console.log(index);
			list.splice(index, 1);
			return {
				...state,
				postList: list,
			};
		}
		case 'EDIT_POST': {
			let list = [...state.postList];
			console.log(list);
			console.log(action.payload.id);
			let index = list.findIndex(index => index.id === action.payload.id);
			list[index] = action.payload;
			console.log(list);

			return {
				...state,
				postList: list,
			};
		}
		default:
			return state;
	}
};

export default postReducer;
