import {createContext} from 'react'

const AuthContext = createContext({
    auth: undefined,
    logn: ()=> null,
    logout: ()=>null
})

export default AuthContext