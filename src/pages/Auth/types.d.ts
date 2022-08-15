// import { FirebaseAuthTypes } from '@react-native-firebase/auth';
// import { User, UserCredential } from 'firebase/auth';
// import React from 'react';

// export interface IState {
//     isUserDataPresent: boolean;
//     user: User | FirebaseAuthTypes.User | null;
//     listener: (() => void) | null;
// }

// export interface ILoginPayload {
//     email: string;
//     password: string;
// }

// export interface AuthContextData {
//     user?: User | FirebaseAuthTypes.User | null;
//     isUserDataPresent: boolean;
//     signOut: () => void;
//     signUp: (
//         provider?: 'google' | 'email_and_password',
//         payload?: ILoginPayload,
//     ) => Promise<
//         UserCredential | FirebaseAuthTypes.UserCredential
//     >;
//     signIn: (
//         provider?: 'google' | 'email_and_password',
//         payload?: ILoginPayload,
//     ) => Promise<
//         UserCredential | FirebaseAuthTypes.UserCredential
//     >;
// }

// export interface AuthProviderProps {
//     children: React.ReactNode;
// }

// export interface IUseLogicReturn {
//     signUp: (
//         provider?: 'google' | 'email_and_password',
//         payload?: ILoginPayload,
//     ) => Promise<
//         UserCredential | FirebaseAuthTypes.UserCredential
//     >;
//     signIn: (
//         provider?: 'google' | 'email_and_password',
//         payload?: ILoginPayload,
//     ) => Promise<
//         UserCredential | FirebaseAuthTypes.UserCredential
//     >;
//     signOut: () => void;
//     authState: IState;
// }
