import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as authOnAuthStateChanged,
  User,
  signOut,
} from "firebase/auth";
import i18n from "i18n-js";
import { auth } from "@firebase/util";

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();

  auth.languageCode = i18n.locale;

  return signInWithPopup(auth, provider);
};

export const emailAndPasswordSignUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const emailAndPasswordSignIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChanged = (callback: (user: User | null) => void) => {
  const unsubscribe = authOnAuthStateChanged(auth, (user) => {
    if (user) {
      return callback(user);
    }
    return callback(null);
  });

  return () => {
    unsubscribe();
  };
};

export const authSignOut = () => {
  signOut(auth);
};
