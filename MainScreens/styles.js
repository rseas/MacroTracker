import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        margin: '4%',
        marginTop: '15%',
        marginRight: '8%',
        marginLeft: '8%'
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
    },
    emptyGoals: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noEvent: {
        fontSize: 14,
        marginTop: 13,
        color: 'black',
        textAlign: 'center'
    },
    setGoals: {
        width: 100,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'center',
    },
    modalOverlay:{
        padding: '10%',
    },
    goalInput: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        padding: '3%',
    },
    goalInputText: {
        fontSize: 20,
    },
    saveGoals: {
        width: 140,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'green'
    },
})