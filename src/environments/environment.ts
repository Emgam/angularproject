import { initializeApp } from "firebase-admin";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCRwtR41xyuIOKfcGnqhCjH8h-guBzhqvk",
  authDomain: "my-awesome-project-741eb.firebaseapp.com",
  projectId: "my-awesome-project-741eb",
  storageBucket: "my-awesome-project-741eb.appspot.com",
  messagingSenderId: "915351333573",
  appId: "1:915351333573:web:f5ad91040c178f7ebe9eac"
  },
  baseApi :"http://127.0.0.1:8000/api/v1/prods"
};

;
