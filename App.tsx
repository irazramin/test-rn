import React from 'react';
import AppStatusBar from "./app/components/StatusBar";
import {NavigationContainer} from "@react-navigation/native";
import AppStack from "./app/components/AppStack";

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <AppStatusBar/>
            <AppStack/>
        </NavigationContainer>
    );
}

export default App;
