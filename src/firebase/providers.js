import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FireBaseAuth, googleProvider);
    // console.log(result)
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    const {displayName, email, photoURL, uid} = result.user

    return {
        ok:true,
        // user info
        displayName, email, photoURL, uid
    }

  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return{
        ok:false,
        errorMessage,
    }
  }
};


export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
  try {
    const resp = await createUserWithEmailAndPassword(FireBaseAuth, email, password)
    const {uid, photoURL} = resp.user

    await updateProfile( FireBaseAuth.currentUser, {
      displayName
    })

    return {
      ok: true,
      uid, photoURL, email, displayName
  }
    
  } catch (error) {
    // console.log(error)
    return {ok:false, errorMessage:error.message}
  }
}

export const loginWithEmailPassword = async ({email, password}) => {
  try {
    const result = await signInWithEmailAndPassword(FireBaseAuth, email, password);
    console.log(result)
    //const credentials = GoogleAuthProvider.credentialFromResult(result);
    const {displayName, photoURL, uid} = result.user

    return {
        ok:true,
        // user info
        displayName, photoURL, uid
    }

  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return{
      ok:false,
      errorMessage,
  }
  }
}

export const logoutFirebase =  async () => {
  return await FireBaseAuth.signOut()
}