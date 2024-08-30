const valToken = localStorage.getItem("token")

const DEFAULT_STATE = {
    token: valToken,
    isAutuh: !!valToken
}

export const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            localStorage.setItem("token", action.token)
            return { ...state, token: action.token, isAutuh: true }
        case "LOGOUT":
            localStorage.removeItem("token")
            return { ...state, token: null, isAutuh: false }
            default :
            return state
    }

}