import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyC-rRTK7ackPjpRCmhzyoHYTuvYy7FoSyQ",
  authDomain: "dontgohackingmyh.firebaseapp.com",
  projectId: "dontgohackingmyh",
  storageBucket: "dontgohackingmyh.appspot.com",
  messagingSenderId: "589979595966",
  appId: "1:589979595966:web:7a871c9a38e61a6ffadaef",
  measurementId: "G-5K7MEHJVRS"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp;
let auth = getAuth();

export default function useAuth(setStatus) {
  let navigation = useNavigate();

  async function SignInWithGoogle() {
    let Google = new GoogleAuthProvider();
    await signInWithPopup(auth, Google)
      .then((res) => {
        setStatus("Success");
        navigation(`/select`);
      })
      .catch((res) => {
        setStatus("Error");
      });
  }

  return {
    google: SignInWithGoogle
  };
}
