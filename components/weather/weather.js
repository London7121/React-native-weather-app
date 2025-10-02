import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar, Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useState } from 'react';

const weatherOptions = {
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FF7300', '#FEF253'],
        title: 'Quyoshli',
        subtitle: 'Bugun yorqin kun!'
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00C6FB', '#005BEA'],
        title: 'Yomg‘irli',
        subtitle: 'Soyabonni unutmang!'
    },
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#00ECBC', '#007ADF'],
        title: 'Momaqaldiroq',
        subtitle: 'Uyda qolganingiz ma’qul!'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Bulutli',
        subtitle: 'Osmon bulutlar bilan qoplangan.'
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#7DE2FC', '#B9B6E5'],
        title: 'Qorli',
        subtitle: 'Qor o‘ynash uchun ajoyib kun!'
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Mayda yomg‘ir',
        subtitle: 'Tashqarida mayda yomg‘ir yog‘moqda.'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Tumanli',
        subtitle: 'Ko‘rish qobiliyati pasaygan.'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Shudring',
        subtitle: 'Ehtiyot bo‘ling, yo‘llar sirpanchiq bo‘lishi mumkin.'
    }
};

export default function Weather({ temp, name, condition,setWeather }) {
    console.log(temp, name, condition);
    const [query, setQuery] = useState("")
    return (
        <LinearGradient
            colors={weatherOptions[condition]?.gradient || ['#fff', '#000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.mainContainer}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.iconWrapper}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition]?.iconName || 'weather-sunny'}
                    size={100}
                    color="white"
                />
            </View>
            <View style={styles.flex}>
                <Text style={styles.city}>{name}</Text>
                <Text style={styles.temp}>| {temp}°C</Text>
            </View>
            <View style={{ ...styles.container, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition]?.title || condition}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition]?.subtitle || ''}</Text>
                <View style={styles.searchContainer} >
                    <TextInput
                        placeholder='City'
                        style={styles.input}
                        value={query}
                        onChangeText={(text) => setQuery(text)}
                    />
                    <Button
                        title='Search'
                        onPress={() => setWeather(query)}
                        style={styles.button}
                    >
                        Search
                    </Button>
                </View>
            </View>
        </LinearGradient >
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconWrapper: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 50
    },
    city: {
        color: 'white',
        fontSize: 34,
        fontWeight: '600',
        marginBottom: 8
    },
    temp: {
        color: 'white',
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 12
    },
    title: {
        color: 'white',
        fontSize: 54,
        fontWeight: '600',
        marginBottom: 4,
        textAlign: 'left'
    },
    subtitle: {
        color: 'white',
        fontSize: 16,
        textAlign: 'left',
        paddingHorizontal: 20
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    textContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 10,
        marginBottom: 20
    },
    searchContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
    },
    input: {
        flex: 1,
        width: '70%',
        backgroundColor: 'white',
        height: 40,
        fontSize: 18,
        marginLeft: 10,
        marginTop: 5,
    },
    button: {
        width: "35%",
        marginLeft: 10,
        fontSize: 15,
    }
});
