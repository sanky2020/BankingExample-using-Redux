const reducer = (state=1000, action) => {
    switch (action.type){
        case 'DEPOSIT': {
            return state + Number(action.payload)
        }
        case 'WITHDRAW':{
            return state - Number(action.payload)
        }
        default : return state
    }
}
export default reducer