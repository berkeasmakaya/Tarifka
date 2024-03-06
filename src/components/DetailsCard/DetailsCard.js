import React from "react";
import { Image, Text, View } from "react-native";
import styles from './DetailsCard.style';
import YoutubeCard from "../YoutubeCard";

const DetailsCard = ({details}) =>{
    return(
        <View style={styles.container} >
            <Image 
                style={styles.image}
                source={{uri:details.strMealThumb}} 
            />
            <View style={styles.inner_container} >
                <Text style={styles.title} >{details.strMeal}</Text>
                <Text style={styles.area}>{details.strArea}</Text>
                <View style={styles.divider} />
                <Text style={styles.instruction}>{details.strInstructions}</Text>
                <View style={styles.youtube_view} >
                    <YoutubeCard youtube={details.strYoutube} />
                </View>
                
            </View>
            
        </View>
    ); 
}

export default DetailsCard;