import React from "react";
import {StyleSheet, Text, View} from "react-native";

const TopBar = () => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>SmartBilling+</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        backgroundColor: "#0075be",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "600",
    },
});

export default TopBar;
