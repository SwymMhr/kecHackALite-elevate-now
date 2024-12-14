import { account, ID } from "@/lib/appwrite";
import { user } from "@/lib/Databases/user"
function useAuth() {
  // create account
  async function createAccount({
    firstname,
    lastname,
    email,
    password,
    phone,
    userType
  }) {
    const promise = await account.create(
      ID.unique(),
      email,
      password,
      (firstname + " " + lastname).toLowerCase(),
      phone
    );
    account.updatePrefs({
      "userType": userType
    })
    return promise;
  }



  // login account
  function storeUser(user) {
    console.log("User", user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  async function loginAccount({ email, password }) {
    console.log("Email", email);
    console.log("Password", password);
    // check if user exists in user variable
    const userExists = user.filter((user) => user.email === email && user.password === password);
    console.log("User Exists", userExists);
    if (userExists) {
      console.log("User Exists", userExists);
      storeUser(userExists);
    }
  }

  

  function getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  function isAuthenticated() {
    return localStorage.getItem("user") ? true : false;
  }

  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  function getCookieFallback(){
    return document.cookie.split(';').reduce((cookies, cookie) => {
      const [name, value] = cookie.split('=').map(c => c.trim());
      cookies[name] = value;
      return cookies;
    }, {});
  }

  function getSessionKey(){
    return localStorage.getItem('cookieFallback')
  }

  function getLoggedInUser(){
    return account.get();
  }

  return {
    createAccount,
    loginAccount,
    storeUser,
    getUser,
    getLoggedInUser,
    isAuthenticated,
    logout,
    getSessionKey,
    getCookieFallback
  };
}

export { useAuth };
