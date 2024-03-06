import React from "react";
import { FlatList, Text, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import DetailsCard from "../../components/DetailsCard";
import styles from './Details.style';
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Details({route}){
    
    const {idMeal} = route.params;
    const {data, loading, error} = useFetch(Config.API_DETAIL_URL+ `${idMeal}`);
    const renderDetails = ({item}) => {
        return <DetailsCard details={item} />
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
                renderItem={renderDetails}
            />
        </View>
        
    );

}

export default Details;