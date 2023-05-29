import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setTokenApi(token){
    try{
        console.log(token)
        await AsyncStorage.setItem('token',token)
        return true
    }catch(e){
        return null
    }
}

export async function getTokenApi(){
    try{
        const token = await AsyncStorage.getItem("token")
        return token
    }catch(e){
        return null
    }
}

export async function removeTokenApi(){
    try{
        await AsyncStorage.removeItem('token')
        return true
    }catch(e){
        return null
    }
}