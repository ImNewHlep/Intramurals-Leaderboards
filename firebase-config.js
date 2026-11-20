import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  onValue,
  get
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAN8N1XcIONOH1eRFj9kKvZEj0B2uUSVC8",
  authDomain: "intramurals-ranking.firebaseapp.com",
  databaseURL: "https://intramurals-ranking-default-rtdb.firebaseio.com",
  projectId: "intramurals-ranking",
  storageBucket: "intramurals-ranking.appspot.com",
  messagingSenderId: "1066884209753",
  appId: "1:1066884209753:web:3d7fabfcfb828fb0fb6548",
  measurementId: "G-XBP1PB2SMX"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, update, push, onValue, get };

export function computePoints(teamData = {}) {
  const gold = Number(teamData.gold || 0);
  const silver = Number(teamData.silver || 0);
  const bronze = Number(teamData.bronze || 0);
  return gold * 3 + silver * 2 + bronze;
}
