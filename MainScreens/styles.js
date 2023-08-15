import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        margin: '4%'
    },
    loginButton: {
        width: 200,
        height: 50,
    },
    loginContainer:{
        justifyContent: 'space-evenly'
    },
    loginHeaderContainer: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        textAlignVertical: 'center',
        marginTop: '30%'
    },
    loginWelcome:{
        fontSize: 40,
        fontWeight: 700,
        alignItems: 'center',
        textAlign: 'center'
    },
    loginSubheader:{
        fontSize: 20,
        color: 'grey'
    },
    loginButtonView: {
        alignContent: "center",
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        padding: '10%'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        marginBottom: 10,
        padding: 16,
        borderColor: "#d3d3d3",
        borderWidth: 1,
        width: '100%'
    },
    loginButton: {
        width: 100,
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontSize: 17,
    },
    signUpButton: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpText: {
        color: 'blue',
    },
    registerButton: {
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    registerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    }
})