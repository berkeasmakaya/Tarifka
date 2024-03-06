import { Dimensions, StyleSheet } from "react-native";
const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    image:{
        minWidth:deviceSize.width*0.9,
        minHeight:deviceSize.height/4,
        borderRadius:20,
    },

    textContainer:{
        position:"absolute",
        bottom:0,
        width:'100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    text:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
        
    }
});