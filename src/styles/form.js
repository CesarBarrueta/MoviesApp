import { StyleSheet } from 'react-native'
import colors from './colors'

    const formStyle = StyleSheet.create({
        input:{
            marginBottom:20,
        },
        btnText:{
            marginTop:20
        },
        btnTextLabel:{
            color:colors.dark
        },
        btnSuccess:{
            padding: 5,
            backgroundColor:colors.primary,
            marginTop:20, 
        }
    })

export default formStyle