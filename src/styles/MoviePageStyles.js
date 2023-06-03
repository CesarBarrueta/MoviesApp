import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    movieContainer: {
        backgroundColor: 'black',
        paddingBottom: 60
    },
    modal: {
        backgroundColor: 'black'
    },
    banner: {
        width: '100%',
        height: 200,
    },
    poster: {
        height: 300,
        width: 200,
        alignSelf: 'center',
        marginVertical: 40,
        borderRadius: 20
    },
    title: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    description: {
        color: 'white',
        fontSize: 16,
        marginVertical: 20,
        paddingVertical: 20,
        paddingHorizontal: 50,
        textAlign: 'center'
    },
    buttonText: {
        color: 'white'
    },
    button: {
        width: 300,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#787893',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 'auto'
    },
    containerButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})

export default styles