import React from 'react'
import { useState, useEffect } from "react";
import {API_KEY, POSTER_URL, API_URL_LIST} from '../util/constants'
import { ScrollView, View, Image, TextInput, Text, Button } from 'react-native';
import fetchMovie from '../api/fetchMovie'
import MovieCard from './MovieCard';
import styles from '../styles/HomeStyles'

function Home(authDta){
  //console.log(authDta.logout.logout)
    const cerrarSesion = () =>{
      authDta.logout.logout()
    }
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")
    const [movie, setMovie] = useState({title: "Cargando..."})
    const [favMovies, setFavMovies] = useState([])
    const [title, setTitle] = useState('Estrenos')

    const searchMovies = async() =>{
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&language=es-MX`)
     .then(data => data.json())
     .then(response => {
      if(response.results[0]){
       setTitle('Búsqueda')
       setMovies(response.results)
       setMovie(response.results[0])
      }else{

      }
     })
     .catch(err => console.error(err));
   }

    async function showFavs() {
    await fetch(`${API_URL_LIST}/movies`)
    .then(response => response.json())
    .then(data => {
      //console.log(data)
        setFavMovies(data)
    }).catch(e =>{
        console.log(e)
    })
}

    useEffect(() => {
      const fetchPopularMovies = async() => {
      const {data} = await fetchMovie.get("movie/popular")
      setMovies(data.results)
      setMovie(data.results[0])
    }

    showFavs()
    fetchPopularMovies()
    const interval = setInterval(showFavs, 2000);
    const interval1 = setInterval(searchMovies, 2000);
    }, [])

    

  return (
    <ScrollView contentContainerStyle={styles.prueba}>
      <View style={styles.main}>
        <View style={styles.headlineContainer}>
          <Image source={{uri: POSTER_URL+movie.backdrop_path}} style={styles.headlinePoster} />
        </View>

        <TextInput style={styles.input} onChangeText={setSearch} placeholder='Buscar...' ></TextInput>
        <View style={styles.containerPressable}><Button color='#787893' onPress={searchMovies} title='Buscar'></Button></View>
        <View style={styles.containerPressable}><Button color='#787893' title="Cerrar sesión" onPress={cerrarSesion}></Button></View>

        <Text style={styles.text}>{title}</Text>
        <ScrollView contentContainerStyle={styles.container}>
          {movies.map((movie)=>{
            return <MovieCard key={movie.id} id={movie.id} posterURL = {POSTER_URL+movie.poster_path} name={movie.title} movie={movie}></MovieCard>
          })} 
        </ScrollView>
        <Text style={styles.text}>Mi lista</Text>
        <ScrollView contentContainerStyle={styles.container}>
          {favMovies.map((movie)=>{ 
            return <MovieCard favorite={true} _id={movie._id} key={movie.id} posterURL = {POSTER_URL+movie.poster_path} name={movie.title} movie={movie}></MovieCard>
          })} 
        </ScrollView>
      </View>
     </ScrollView>
  )
}



export default Home