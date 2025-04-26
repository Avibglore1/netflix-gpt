import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, updateProfile} from "firebase/auth"
import {auth} from "./../utils/firebase"
function signUpUser(email, password,name) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Signup error:", errorCode, errorMessage); 
        return errorMessage
      });
      updateProfile(auth.currentUser,{
        displayName:name
      }).then(()=>{
        console.log('User profile updated');        
      }).catch((err)=>{
        console.log('error',err);
      })    
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
      return error.message
    }
  };
   
  export const signOutUser =() =>{
    signOut(auth).then(()=>{
      console.log('User signedOut successfully');      
    }).catch((error)=>{
      console.log('error signing out',error);
      
    })
  }
  export default signUpUser;