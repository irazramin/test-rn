import React from 'react';
import AppStatusBar from "./app/components/StatusBar";
import {NavigationContainer} from "@react-navigation/native";
import NavStack from "./app/components/NavStack";

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <AppStatusBar/>
      <NavStack/>
    </NavigationContainer>
  );
}

export default App;
