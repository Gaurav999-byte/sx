import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function signUpUser({ firstName, lastName, username, email, password }) {
  // Creates user in Firebase Auth (handles password securely)
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid; // This is your unique ID

  // Creates profile in Firestore with all your required fields
  await setDoc(doc(db, "users", uid), {
    id: uid,           // Your ID field
    firstName,         // Your First name field
    lastName,          // Your Last name field  
    username,          // Your Username field
    email,             // Your Email field
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  return uid;
}


/*npx serve .*/