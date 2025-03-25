import { db } from '@/config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';


export const createUserProfile = async (uid: string, email: string, rol = "user") => {
    if (!uid || !email) return;
  
    try {
      const userRef = doc(db, "users", uid); // Referencia al documento del usuario en Firestore
      const docSnap = await getDoc(userRef);
  
      if (!docSnap.exists()) {
        // Solo crear el perfil si no existe
        const userProfile = {
          rol,
          telefono: null,
          email,
          calle: null,
          localidad: null,
          createdAt: new Date(),
        };
  
        await setDoc(userRef, userProfile);
        console.log("Perfil de usuario creado en Firestore");
      } else {
        console.log("El usuario ya existe en Firestore");
      }
    } catch (error) {
      console.error("Error al crear el perfil de usuario:", error);
    }
  };