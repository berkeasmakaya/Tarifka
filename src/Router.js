import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories";
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
        {/* <Stack.Screen name="DetailsPage" component={Details} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default Router;