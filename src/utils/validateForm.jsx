export const validateForm = (email,password,name) =>{
const isEmailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
if(!isEmailVaild) return "Email not vaild";
const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
if(!isPasswordValid) return "Password not valid";
const isNameValid = /^[A-Za-z ]+$/.test(name);
if(!isNameValid) return "Name not valid";
}