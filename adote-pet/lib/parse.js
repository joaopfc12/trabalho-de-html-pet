import 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native.js';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  process.env.EXPO_PUBLIC_BACK4APP_APP_ID,
  process.env.EXPO_PUBLIC_BACK4APP_API_KEY
);
Parse.serverURL = process.env.EXPO_PUBLIC_BACK4APP_URL;

export default Parse;