import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "./../utils/firebase"
function signUpUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signup successful
        const user = userCredential.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Signup error:", errorCode, errorMessage);
        
      });
  }

  export const signInUser = async (email, password) => {
    try {
     
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Return the signed-in user
      const user = userCredential.user;
      console.log("User signed in successfully:", user.uid);
    } catch (error) {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error signing in: ${errorCode} - ${errorMessage}`);
      throw error;
    }
  };

  export default signUpUser;