import React from 'react'
import { View, Image, Text, Pressable } from 'react-native';
import styles from '../styles/MovieCardStyles'
import MoviePage from './MoviePage'
import { useState } from 'react';

export default function MovieCard(props) {
  const {favorite, posterURL, name, movie, _id} = props
  const [visible, setVisible] = useState(false)

    const showMoviePage = () => {
      setVisible(true)
    }

    const closeMoviePage = () => {
      setVisible(false)
    }

  return (
    <>
    <Pressable onPress={showMoviePage} style={styles.posterContainer}>
    <View>
    <Image source={{ uri: posterURL }} style={styles.posterImage}/>
    <Text style={styles.posterName}>{name}</Text>
    </View>
    <MoviePage _id={_id} favorite={favorite} visible={visible} movie={movie} onCloseModal={closeMoviePage}></MoviePage>
    </Pressable>
    </>
  );
}
