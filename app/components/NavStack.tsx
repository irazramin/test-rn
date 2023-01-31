import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TopBar from "./TopBar";
import HomeScreen from "../pages/HomeScreen";
import WebScreen from "../pages/WebScreen";

const Stack = createStackNavigator();

const MyStacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    header: () => <TopBar/>,
                }}
            />
            <Stack.Screen
                name="WebScreen"
                component={WebScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default MyStacks;
