import {
  Auth,
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  updatePassword,
  sendPasswordResetEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  confirmPasswordReset,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  checkActionCode
} from "firebase/auth";

export const signup = async (email: string, username: string, password: string) => {
  const auth = getAuth() as Auth;
  await createUserWithEmailAndPassword(auth, email, password);

  const user = auth.currentUser;
  if(!user) throw new Error('Error creating user');

  await updateProfile(user, { displayName: username });
  console.log(`Signup successful for ${username}`);
};

export const signin = async (email: string, password: string, persistent?: boolean) => {
  const auth = getAuth() as Auth;
  await setPersistence(auth, persistent ? browserLocalPersistence : browserSessionPersistence); //default session persistence
  await signInWithEmailAndPassword(auth, email, password);

  const user = auth.currentUser;
  if(!user) throw new Error('Error signing in');
  
  console.log(`Signin successful for ${email}`);
};

export const changepassword = async (
  email: string,
  oldPassword: string,
  newPassword: string,
) => {
  const auth = getAuth() as Auth;

  const credential = EmailAuthProvider.credential(email, oldPassword);

  const user = auth.currentUser;
  if(!user) throw new Error('Error updating password');

  await reauthenticateWithCredential(auth.currentUser, credential);
  await updatePassword(auth.currentUser, newPassword);

  console.log(`Password changed for ${email}`);
  await logout();
};

export const forgotpassword = async (email: string) => {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email);
  console.log(`Password reset email sent to ${email}`);
};

export const checkoobcode = async (oob: string) => {
  const auth = getAuth();
  const result = await checkActionCode(auth, oob);
  console.log(result);
  return result;
}

export const resetpassword = async (oob: string, newPass: string) => {
  const auth = getAuth();
  await confirmPasswordReset(auth, oob, newPass);
  console.log(`Password reset successful`);
};

export const logout = async () => {
  const auth = getAuth() as Auth;

  const user = auth.currentUser;
  if(!user) throw new Error('Error logging out');

  console.log(`Logout successful for ${auth.currentUser.email}`);
  await signOut(auth);
};

export const getidtoken = async () => {
  const auth = getAuth() as Auth;

  const user = auth.currentUser;
  if(!user) throw new Error('Error getting id token for request');

  const idToken = await user.getIdToken();

  return idToken;
}