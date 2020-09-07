const initialState = {
    status: false,
    editUser: {}
}

const statusReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return {
                ...state,
                status: !state.status
            }
    //tác dụng hàm GET_EDIT_DATA lấy editObj đẩy dữ liệu vào editUser để cập nhật vào trong state
        case 'GET_EDIT_DATA':
            return {
                ...state,
                editUser: action.editObj
            }
        default: 
            return state;
    }
}

export default statusReducer;