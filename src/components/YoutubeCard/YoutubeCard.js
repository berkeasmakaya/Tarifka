import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import styles from './YoutubeCard.style';

const YoutubeCard = ({youtube}) => {
    
    const openYoutubeLink = () => {
        const youtubeLink = youtube;
        if (youtubeLink) {
            Linking.openURL(youtubeLink);
        }
        else {
            console.error("Youtube Link was not found!")
        }
    }
    
    return(
        <TouchableOpacity style={styles.container} onPress={openYoutubeLink} >
            <Text style={styles.text} >Watch On Youtube</Text>
        </TouchableOpacity>
    );
}

export default YoutubeCard;