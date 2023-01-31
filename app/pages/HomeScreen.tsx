import {
    ActivityIndicator,
    FlatList,
    Image,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import {Colors} from "react-native/Libraries/NewAppScreen";
// @ts-ignore
import Ripple from "react-native-material-ripple";

const HomeScreen = ({navigation}: any) => {

    const app = {
        apiUrl: 'http://194.233.93.146:8000/api/msos',
        apiClient: 'I_hmk7RdN9c%vNadOnh@^jB44MP5NCWL',
        apiSecret: 'tAbUkA3TfEEDrigyiiLa3NqAL3TpA_@h14Wy8lb%F^Ih9W4RD%LhZEbtJKikvAlU'
    };

    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(app.apiUrl, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Mobile-Auth-User": app.apiClient,
                "Mobile-Auth-Pw": app.apiSecret
            }
        })
            .then((res) => res.json())
            .then(({data}) => {
                setListData(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetch(app.apiUrl, {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Mobile-Auth-User": app.apiClient,
                "Mobile-Auth-Pw": app.apiSecret
            }
        })
            .then((res) => res.json())
            .then(({data}) => {
                setListData(data);
            })
            .finally(() => {
                setRefreshing(false);
            });
    }, []);

    return (
        <View style={style.home}>
            {loading ? (
                <ActivityIndicator size="large"/>
            ) : (
                <FlatList
                    data={listData}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                    renderItem={({item}: any) => {
                        return (
                            <TouchableWithoutFeedback>
                                <Ripple
                                    style={style.ripple}
                                    onPress={() => {
                                        navigation.navigate("WebScreen", {
                                            url: item.sms_url,
                                        });
                                    }}
                                >
                                    <View style={[style.cardBody]}>
                                        <View>
                                            <Image style={style.image} source={{uri: item.app_icon}}/>
                                        </View>
                                        <View style={style.cardContent}>
                                            <Text style={style.header}>{item.full_name}</Text>
                                            <Text style={style.description}>{item.username}</Text>
                                        </View>
                                    </View>
                                </Ripple>
                            </TouchableWithoutFeedback>
                        );
                    }}
                />
            )}
        </View>
    );
};

const style = StyleSheet.create({
    home: {
        marginTop: 5,
        marginBottom: 5,
    },
    ripple: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 6,
        marginBottom: 6,
        borderRadius: 5,
    },
    cardBody: {
        alignItems: "center",
        backgroundColor: Colors.white,
        borderRadius: 5,
        shadowColor: Colors.shadow,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 4,
        flexDirection: "row",
        padding: 5,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    cardContent: {
        display: "flex",
        marginLeft: 15,
        alignItems: "flex-start",
    },
    image: {
        width: 60,
        height: 60,
    },
    header: {
        fontSize: 18,
        fontWeight: "600",
        textTransform: "capitalize",
    },
    description: {
        fontSize: 18,
        fontWeight: "400",
        textTransform: "lowercase",
        color: Colors.grey,
        marginTop: 2,
    }
});

export default HomeScreen;