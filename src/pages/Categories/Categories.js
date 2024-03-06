import React from "react";
import { FlatList, View } from "react-native";
import styles from './Categories.style';
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import CategoriesCard from "../../components/CategoriesCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Categories({navigation}){
    
    const {data, loading, error} = useFetch(Config.API_URL);

    const handleCategorySelect = strCategory =>{
        navigation.navigate("MealsPage", {strCategory})
    }

    const renderCategories = ({item}) =>{
        return <CategoriesCard  categories={item} onSelect={()=>handleCategorySelect(item.strCategory)} />
    }

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }
    
    return(
        <View style={styles.container} >
            <FlatList 
                data={data.categories}
                renderItem={renderCategories}
            />
        </View>
    );
}

export default Categories;