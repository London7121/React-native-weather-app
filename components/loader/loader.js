import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function loader() {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "red",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
    }
})
