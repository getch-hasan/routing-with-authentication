import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react"
import app from "../firebase.init";
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const useFirebase = () => {

    const [user, setUser] = useState();

    const googleSingIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {



                const user = result.user;
                console.log(user)
                setUser(user)

            }).catch((error) => {


                const errorMessage = error.message;
                console.log(errorMessage)



            });

    }
    const handleSingOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])
    return { user, googleSingIn, handleSingOut }
}
export default useFirebase;