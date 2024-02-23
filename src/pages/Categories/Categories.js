import React from "react";
import { FlatList, View } from "react-native";
import styles from './Categories.style';
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import CategoriesCard from "../../components/CategoriesCard";

function Categories(){
    
    const {data} = useFetch(Config.API_URL);

    const renderCategories = ({item}) =>{
        return <CategoriesCard  categories={item} />
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