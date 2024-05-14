/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react"
import { AuthReducer } from "./AuthReducer";
import { useNavigate } from "react-router-dom";


const INITIAL_STATE ={
    user:JSON.parse(localStorage.getItem("user")) ||  null,
    loading: false,
    error:null
}
// localStorage.clear()
export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
        if(state.user){
            navigate('/')
        }
        else{
            navigate('login');
        }
    }, [state.user, navigate])

    return(
        <AuthContext.Provider
            value={{
                user: state.user,
                loading:state.loading,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}