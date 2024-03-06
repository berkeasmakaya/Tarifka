import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Details from "./pages/Details";


const Stack = createNativeStackNavigator();

function Router() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title:"Categories",
          headerStyle:{backgroundColor:"white"},
          headerTitleStyle:{color:"#ffa401"},
          headerTitleAlign:"center",
        }} />
        <Stack.Screen name="MealsPage" component={Meals} options={{
          title:"Meals",
          headerStyle:{backgroundColor:"white"},
          headerTitleStyle:{color:"#ffa401"},
          headerTitleAlign:"center",
        }} />
        <Stack.Screen name="DetailsPage" component={Details} options={{
          title:"Details",
          headerStyle:{backgroundColor:"white"},
          headerTitleStyle:{color:"#ffa401"},
          headerTitleAlign:"center",
        }}
        
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default Router;