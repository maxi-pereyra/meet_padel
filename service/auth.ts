import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    } from 'firebase/auth'
import { auth } from '@/config/firebase';
import * as secureStore from 'expo-secure-store';

const provider = new GoogleAuthProvider()


interface RegisterUserProps {
  email: string;
  password: string;
  displayName?: string;
}

interface LoginProps {
  email: string;
  password: string;
}


export const registerUser = async ({ email, password }: RegisterUserProps) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    return user;
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
};

export const signIn = async ({ email, password }: LoginProps) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await secureStore.setItem("user",userCredential.user.uid)
    return userCredential.user;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};


export const signOutUser = async () => {
  try {
    await Promise.allSettled([
      auth.signOut(),
      secureStore.deleteItemAsync("user"),
    ]);
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    throw error;
  }
};

/**
 * Obtiene el usuario actualmente autenticado.
 */
//export const getCurrentUser = () => {
//  return auth().currentUser;
//};