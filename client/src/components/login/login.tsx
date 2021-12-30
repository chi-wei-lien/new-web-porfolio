import { Component } from "react";
import firebase from "../../config/firebase-config";
import socialMediaAuth from "../../service/auth";
import { githubProvider } from "../../service/authMethods";

const login = async (provider: firebase.auth.GithubAuthProvider) => {
  const res = await socialMediaAuth(provider);
  console.log(res);
}

class Login extends Component {
  render() {
    return (
      <button onClick={() => login(githubProvider)}>Github</button>
    )
  }
}

export default Login;