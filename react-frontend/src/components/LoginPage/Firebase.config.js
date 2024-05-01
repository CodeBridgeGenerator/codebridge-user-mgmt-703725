import { initializeApp } from 'firebase/app';
import { getAuth, OAuthProvider, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

// CLEINT USER TO SET Initialize Firebase
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerForApple = new OAuthProvider('apple.com');
providerForApple.addScope('email');
const providerForFacebook = new FacebookAuthProvider();
providerForFacebook.setCustomParameters({ display: 'popup', scope: 'email' });
const providerForGithub = new GithubAuthProvider();
providerForGithub.addScope('user:email');
const providerForGoogle = new GoogleAuthProvider();
providerForGoogle.addScope('https://www.googleapis.com/auth/userinfo.email');
const providerForMS = new OAuthProvider('microsoft.com');
providerForMS.setCustomParameters({ scope: 'openid email' });

export { auth, providerForApple, providerForFacebook, providerForGithub, providerForGoogle };
