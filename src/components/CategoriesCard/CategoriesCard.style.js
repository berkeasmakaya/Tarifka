import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"row",
        margin:15,
        borderRadius:100,
        borderWidth:1.5,
    },

    image:{
        width:100,
        height:100,
        resizeMode:"contain",
        borderRadius:100,
    },
    text:{
        fontSize:20,
        alignSelf:"center",
        paddingHorizontal:20,
        color:"black",
        fontWeight:"bold"
    }
});