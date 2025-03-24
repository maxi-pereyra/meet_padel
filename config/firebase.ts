import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

// add firebase config
const firebaseConfig = {
  apiKey: " AIzaSyByOKvBNDd9T5gtgH5o7jtWaCK3CbVJSEQ",
authDomain: " miraemprende-86e5b.firebaseapp.com",
projectId: " miraemprende-86e5b",
storageBucket: " miraemprende-86e5b.firebasestorage.app",
messagingSenderId: " 338707211121",
appId: " 1:338707211121:web:39c86e54dd58cbc83d0cd0",
measurementId: " G-Z0GV0RKTPH"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth; only for native platforms (Android and iOS)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };