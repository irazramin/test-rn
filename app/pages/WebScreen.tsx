import React, {useEffect, useState} from "react";
import WebView from "react-native-webview";
import {Alert, BackHandler} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const WebScreen = ({route, navigation}: any) => {
    let [uri, setUri] = useState(route?.params?.url ?? "");

    useEffect(() => {
        AsyncStorage.getItem('sms_url')
            .then((value) => {
                if (value) {
                    setUri(value);
                }
            });
    });

    useEffect(() => {
        function handleBackButton() {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        AsyncStorage.setItem('sms_url', '')
                            .then(() => {
                                console.log("sms_url saved")
                            })
                            .finally(() => {
                                navigation.navigate('HomeScreen');
                            });
                    }
                },
            ]);

            return true;
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            backHandler.remove();
        }

    }, [navigation]);

    return <WebView source={{uri}}/>;
};

export default WebScreen;