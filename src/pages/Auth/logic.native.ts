import authStatic, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import { auth } from "../../utils/firebase/index.native";
import { i18n } from "../../translations";
import googleServices from "../../../android/app/google-services.json";

GoogleSignin.configure({
  webClientId: googleServices.client[0].oauth_client[1].client_id,
});

export const googleSignIn = () => {
  return GoogleSignin.signIn().then(({ idToken }) => {
    const googleCredential = authStatic.GoogleAuthProvider.credential(idToken);

    auth.languageCode = i18n.locale;

    return auth.signInWithCredential(googleCredential);
  });
};

export const emailAndPasswordSignIn = (email: string, password: string) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const onAuthStateChanged = (
  callback: (user: FirebaseAuthTypes.User | null) => void
) => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user !== null) {
      return callback(user);
    }
    return callback(null);
  });

  return () => {
    unsubscribe();
  };
};

export const authSignOut = () => {
  auth.signOut();
};
