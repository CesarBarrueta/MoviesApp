import React, { useEffect, useState } from 'react'
import { View, Alert, Modal, Image, Text, ScrollView, Pressable } from 'react-native';
import styles from '../styles/MoviePageStyles'
import {API_URL_LIST, POSTER_URL} from '../util/constants'


export default function MoviePage(props) {
const {favorite, visible, movie, onCloseModal, _id} = props
const post_url = POSTER_URL+movie.poster_path
const banner_url = POSTER_URL+movie.backdrop_path
const [isVisible, setIsVisible] = useState(false)

const toggleVisibility = () => {
  if(favorite){
    setIsVisible(true);
  }else{
    setIsVisible(false);
  } 
};

const closeMovie = () =>{
    onCloseModal()
}

const saveData = {
  title: movie.title,
  overview: movie.overview,
  backdrop_path: banner_url,
  poster_path: post_url,
  idMovie: movie.id,
  favorite: true
}

const toggleDelete = () =>{
  console.log(_id)
  deleteFav(_id)
}

async function deleteFav(id){
  try{
      const url=`${API_URL_LIST}/movies/${id}`
      const params = {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          },
      }
      const response = await fetch(url,params)
      showAlert("Éxito", "Se eliminó de tu lista")
      }catch(error){
          console.log(error)
          return null
      }
}

async function addFav(saveData){ 
  try{
    const url=`${API_URL_LIST}/movies`
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(saveData)
    }
    const response = await fetch(url,params)
    const result = await response.json();
    showAlert("Éxito", "Se agregó a tu lista")
    closeMovie()
    return result
    }catch(error){
      showAlert("Error", error)
        return null
    }
}

useEffect(() => {
  toggleVisibility()
  return () => {
  }
}, [])


const showAlert = (title, message) =>{
  Alert.alert(
    title,
    message,
    [
      { text: 'OK' },
    ],
    { cancelable: false }
  )
}


const postFav = () =>{
  addFav(saveData)
}

//console.log(movie)
  return (
    <Modal visible={visible} style={styles.modal}>
        <ScrollView style={styles.container}>
            <Image source={{uri: banner_url}} style={styles.banner}/>   
            <View style={styles.movieContainer}>
                <Image source={{ uri: post_url }} style={styles.poster} />
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.description}>{movie.overview}</Text>
                
                {!isVisible && (
        <View style={styles.containerButton} ><Pressable style={styles.button} onPress={postFav}><Text style={styles.buttonText}>Agregar a tu Lista</Text></Pressable></View>
      )}
                {isVisible && (
        <View style={styles.containerButton}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText} onPress={toggleDelete}>Eliminar de tu Lista</Text>
          </Pressable>
        </View>
      )}
                <View style={styles.containerButton}><Pressable style={styles.button} onPress={closeMovie}><Text style={styles.buttonText}>Volver</Text></Pressable></View>
            </View>
        </ScrollView>
    </Modal>
  );
}
