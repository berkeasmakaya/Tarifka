import React from "react";
import { FlatList, Text, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import styles from './Meals.style';
import MealsCard from "../../components/MealsCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Meals({route, navigation}) {
    
    const {strCategory} = route.params;
    const {data, loading, error} = useFetch(Config.API_CATEGORY_URL+ `${strCategory}`);

    const handleMealsSelect = idMeal =>{
        navigation.navigate("DetailsPage", {idMeal});
    }
    
    const renderMeals = ({item}) => {
        return <MealsCard meals={item} onSelect={()=>handleMealsSelect(item.idMeal)} />
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeals}
            />
        </View>
    );
}

export default Meals;