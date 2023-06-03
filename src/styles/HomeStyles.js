import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    
    main: {
        backgroundColor: 'black',
        padding: 20,
    }, 

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 10,
        alignSelf: 'auto',
      },
    headlineContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    headlinePoster: {
        height: 150,
        width: '100%',
        borderRadius: 30,
        paddingTop: 100,
        marginTop: 25
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        color: 'black',
        fontSize: 15,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10
      },
    text: {
        color: 'white',
        fontSize: 25,
        paddingVertical: 10 
    },

    containerPressable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
    }

})

export default styles