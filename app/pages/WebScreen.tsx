import React from "react";
import WebView from "react-native-webview";

const WebScreen = ({route}: any) => {
    const uri = route.params.url;
    return <WebView source={{uri}}/>;
};

export default WebScreen;