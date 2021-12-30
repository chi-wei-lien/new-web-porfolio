import firebase from '../config/firebase-config';

const socialMediaAuth = (provider: firebase.auth.GithubAuthProvider) => {
  try {
    return firebase.auth().signInWithPopup(provider).then((data) => {
      return data.user;
    })
  } catch (error: unknown) {
    console.log(error);
  }
  
};

export default socialMediaAuth;