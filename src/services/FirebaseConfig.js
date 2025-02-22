import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTQtQ3lkQTkCgo7LArLwwjvha14RlTVXA",
  authDomain: "gather-to-gather.firebaseapp.com",
  projectId: "gather-to-gather",
  storageBucket: "gather-to-gather.firebasestorage.app",
  messagingSenderId: "645368926333",
  appId: "1:645368926333:web:6fc72fbd9ccbd6ec2d6114",
  measurementId: "G-ETKSG6YF4P",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
export default app;
