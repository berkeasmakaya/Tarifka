import React from "react";
import {TouchableWithoutFeedback, Image, Text, View } from "react-native";
import styles from './MealsCard.style';

function MealsCard({meals , onSelect}){
    return(
        <TouchableWithoutFeedback onPress={onSelect} >
            <View style={styles.container}>
                <Image source={{ uri: meals.strMealThumb }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{meals.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default MealsCard;