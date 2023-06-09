import { Provider as PaperProvider } from 'react-native-paper';
import Auth from './src/screens/Auth';
import { useEffect, useMemo, useState } from 'react';
import AuthContext from './src/context/AuthContext';
import {setTokenApi, getTokenApi, removeTokenApi} from './src/api/token'
import jwt_decode from "jwt-decode";
import Home from './src/components/Home';


export default function App() {

  const [auth, setAuth] = useState(undefined) 
  
  useEffect(() => {
    (async () => {
      const token = await getTokenApi()
      console.log("Si entra")
      if(token){
        setAuth({
          token,
          idUser: jwt_decode(token).id
        })
        console.log("Estas logeado")
        console.log(token)
        console.log(jwt_decode(token))
      }else{
        setAuth(null)
      }
    })()
  }, [])
  
  const login = (user) =>{
    //console.log(user)
    console.log('App js')
    setTokenApi(user.jwt)
    setAuth({
      token: user.jwt,
      idUser: user.user._id
    })
  }

  const logout = (user =>{
    if(auth){
      removeTokenApi()
      setAuth(null)
    }
  })

  const authDta = useMemo(
    ()=>({
      auth,
      login,
      logout
    }),[auth]
  )

  //const timer = setTimeout(() => {
   // return ()
  //}, 3000);
  
  console.log(auth)

  if(auth === undefined) return null
  //console.log(authDta)
  return(
    <AuthContext.Provider value={authDta}>
      <PaperProvider>
        { auth ? (
          <Home logout={authDta}/>
          ):(<Auth />)}
      </PaperProvider>
    </AuthContext.Provider>
  );
}
