// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_6c8foHcjxCs0lQNfrMyz3RJWG9Q416g",
  authDomain: "intramurals-leaderboard.firebaseapp.com",
  databaseURL: "https://intramurals-leaderboard-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "intramurals-leaderboard",
  storageBucket: "intramurals-leaderboard.firebasestorage.app",
  messagingSenderId: "915966908321",
  appId: "1:915966908321:web:10fe4ab0a6caef5d7b1de0",
  measurementId: "G-HT9ZM96DF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { ref, set, update, push, onValue, get };

export function computePoints(teamData = {}) {
  const gold = Number(teamData.gold || 0);
  const silver = Number(teamData.silver || 0);
  const bronze = Number(teamData.bronze || 0);
  return gold * 3 + silver * 2 + bronze;
}
