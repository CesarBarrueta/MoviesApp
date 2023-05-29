import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import formStyle from '../styles/form'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {loginApi} from '../api/user'
import Toast from 'react-native-root-toast'
import { render } from 'react';
import useAuth from '../hooks/useAuth'

export default function LoginForm(props) {
  const {changeForm} = props
  const {login} = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async(formData)=>{
      console.log(formData)
      try{
        const user = await loginApi(formData)
        if (user.statusCode) throw 'Error: Usuario o contraseña incorrectos'
        console.log("Se inició sesión")
        login(user)
        

      const domNode = document.getElementById('root');
      render(<Main/>, domNode);
      }catch(error){
        Toast.show(error,{
          position: Toast.positions.BOTTOM
        })
      }
      
    }
  })

  function initialValues(){
    return {
      identifier: '',
      password: ''
    }
  }

  function validationSchema() {
    return {
      identifier: Yup.string().email().required(true),
      password: Yup.string().required(true),
    }
  }

return (
  <View>

    <TextInput
      label='E-mail' 
      style={formStyle.input} 
      onChangeText={(text)=>formik.setFieldValue('identifier',text)}
      value={formik.values.identifier}
      error={formik.errors.identifier}/>

    <TextInput 
      label='Contraseña' 
      style={formStyle.input} 
      secureTextEntry
      onChangeText={(text)=>formik.setFieldValue('password',text)}
      value={formik.values.password}
      error={formik.errors.password}/>

    <Button mode='text' style={formStyle.btnSuccess} labelStyle={formStyle.btnTextLabel} onPress={formik.handleSubmit}>
        Iniciar Sesion
    </Button>
    <Button mode='text' style={formStyle.btnText} labelStyle={formStyle.btnTextLabel} onPress={changeForm}>
        Registrarse
    </Button>
  </View>
)
  
}
