import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Loader from '../../components/loader/loader';
import Weather from '../../components/weather/weather';
import * as Location from 'expo-location';
import axios from 'axios';

interface WeatherData {
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  name: string;
}
//https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=4931afcd6f42e6f6c6d042f7074d41a4&units=metric

const API_KEY = "4931afcd6f42e6f6c6d042f7074d41a4"

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useState<WeatherData | null>(null)



  const getWeather = async (latitude: number, longitude: number): Promise<void> => {
    try {
      const { data } = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      // const { data } = await axios.get<WeatherData>(
      //   `https://api.openweathermap.org/data/2.5/weather?q=egypt&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      // );
      setLocation(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const setWeather = async (query: string, latitude: number, longitude: number) => {
    try {
      const { data } = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      setLocation(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }


  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied")
        setIsLoading(false);
        return;
      }
      let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});

      getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("Error getting location")
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    isLoading ? <Loader /> : location && <Weather
      temp={location.main.temp}
      name={location.name}
      condition={location.weather[0].main}
      setWeather={setWeather}
    />
  );

}

// const styles = StyleSheet.create({
//   stepContainer: {
//     flex: 1,
//   },
//   box1: {
//     flex: 1,
//     backgroundColor: "blue"
//   },
//   box2: {
//     flex: 1,
//     backgroundColor: "white"
//   },
//   box3: {
//     flex: 1,
//     backgroundColor: "green"
//   }
// });
