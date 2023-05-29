import { View, Text } from 'react-native'
import React, { useState } from 'react'
import layoutStyle from '../styles/layouts'
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';


const Auth = () => {
  const [showLogin , setShowLogin] = useState(false);

  const changeForm = () => {
    setShowLogin(!showLogin)
  }
  return (
    <View style={layoutStyle.container}>
        {showLogin ? <LoginForm changeForm={changeForm}/> : <RegisterForm changeForm={changeForm}/>}
    </View>
  )
}

export default Auth