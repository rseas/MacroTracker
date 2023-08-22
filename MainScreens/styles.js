import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
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
        width: 150,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'green',
    },
    cancel:{
        margin: 20,
        padding: 15,
    },
    progContainer:{
        marginBottom: 30,
    },
    progressbar: {
        width: 50,
    },
    progressTitle: {
        fontSize: 20,
    },
    settingsOption: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#6495ed'
    },
    settingsText: {
        fontSize: 18,
        fontWeight: '600'
    },
    settingsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    numInput: {
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        borderColor: "#d3d3d3",
        borderWidth: 1,
        width: 110,
        fontSize: 20,
        textAlign: 'center'
    },
    header: {
        alignItems: 'center',
        marginTop: 13,
    },
    addButton :{
        alignContent: 'center',
        alignItems: 'flex-end',
        padding: 5
    },
    addButtonText: {
        fontSize: 15,
        color: 'blue',
    },


    addItemButton :{
        alignContent: 'center',
        alignItems: 'flex-end',
        padding: 5
    },
    addItemText: {
        fontSize: 15,
        color: 'blue',
    },
    varList:{
        marginTop: 15,
        marginHorizontal: '5%',
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
    },
    var: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        padding: 9,
    },
    varTitle: {
        fontSize: 18,
    },
    confirmAddItem: {
        width: 125,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#63e5ff',
    },
    nameInput: {
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        borderColor: "#d3d3d3",
        borderWidth: 1,
        width: '70%'
    }
})