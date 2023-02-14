import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [useEmail, setUseEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleName = (e) => {
    setName(name + e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log("Pass: ", e.target.value);
    setPassword(e.target.value);
  };

  const confirmPassword = (e) => {
    console.log("confirm:", e.target.value);
    setConfirmPass(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!/(?=.*?[0-9]).{6,}$/.test(password)) {
      setErrorLogin(
        "Password must have at least one Upper,Lower case & number & 6 characters long"
      );
      return;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegister = (navigate) => {
    if (!/(?=.*?[0-9]).{6,}$/.test(password)) {
      setErrorRegister(
        "Must have at least one Upper,Lower case and number, 6 characters long"
      );
      return;
    }
    if (password !== confirmPass) {
      setErrorRegister("Password does not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setErrorRegister("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to database
        // saveUser(email, name, "POST");
        setUserName();
        alert("User Registration Successfully");
        navigate("/");
      })
      .catch((error) => {
        setUseEmail("Email already in use");
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, [auth]);

  //   useEffect(() => {
  //     fetch(`https://powerful-beyond-32668.herokuapp.com/users/${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setAdmin(data.admin));
  //   }, [user.email]);

  //   const saveUser = (email, displayName, method) => {
  //     const user = { email, displayName };
  //     fetch("https://powerful-beyond-32668.herokuapp.com/users", {
  //       method: method,
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     }).then();
  //   };

  return {
    name,
    user,
    useEmail,
    setUser,
    errorLogin,
    setErrorLogin,
    errorRegister,
    setErrorRegister,
    isLoading,
    setIsLoading,
    handleName,
    setUserName,
    handleEmail,
    handlePassword,
    confirmPassword,
    handleRegister,
    handleLogin,
    signInUsingGoogle,
    logOut,
    // saveUser,
  };
};

export default useFirebase;
