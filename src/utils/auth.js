import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "./../utils/firebase"
function signUpUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signup successful
        const user = userCredential.user;
        console.log("User created:", user);
        // You can redirect or update UI here
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Signup error:", errorCode, errorMessage);
        // Display error to user
      });
  }

  export default signUpUser;