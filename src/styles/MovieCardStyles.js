import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    posterContainer: {
        width: '48%',
        marginBottom: 16,
        backgroundColor: 'black',
        borderRadius: 8,
        overflow: 'hidden',
        alignSelf: 'stretch',
      },
      posterImage: {
        height: 330,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 15
      },
      posterName: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center',
        color: 'white'
      },
})

export default styles