const initialState = {
    status: false,
}

const statusReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return {
                ...state,
                status: !state.status
            }
        default: 
            return state;
    }
}

export default statusReducer;