import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        width:deviceSize.width,
        minHeight:deviceSize.height/3,  
    },
    inner_container:{
        flex:1,
        paddingTop:8,
        marginLeft:7,
        marginRight:7,
        backgroundColor:"#F2F3F3"
    },
    title:{
        color:"#a52c2c",
        fontSize:30,
        fontWeight:"bold"
    },
    area:{
        color:"#a52c2c",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10
    },
    instruction:{
        color:"black",
        fontWeight:"500",
    },
    divider:{
        height:2,
        backgroundColor:"gray",
        marginBottom:10
    },
    youtube_view:{
        padding:10
    }
})