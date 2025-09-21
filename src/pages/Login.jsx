import { useState } from "react";
import { auth, provider, signInWithPopup, signInWithEmailAndPassword } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
Footer



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
            <div className="">
                
                <Header/>
                <div className="p-5 mx-150  aligin-center my-60 bg-transparent backdrop-blur-md shadow-lg rounded-xl w-96 relative ">
                    <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
                    <input type="email" placeholder="Email" className="border w-full p-2 mb-3 rounded" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="border w-full p-2 mb-3 rounded" onChange={e => setPassword(e.target.value)} />
                    <button onClick={handleEmailLogin} className="bg-green-700 w-full py-2 my-2 text-white  rounded-2xl">Login</button>
                    <button onClick={handleGoogleLogin} className="bg-red-700 w-full py-2 my-2 text-white rounded-2xl">Sign in with Google</button>
                    <p className="text-sm mt-2 mx-25">Or <Link to="/phone" className="text-purple-600">Login with Phone</Link></p>
                    <p className="mt-4 mx-15 text-sm text-black">Don’t have an account? <Link to="/register" className="text-blue-700">Register</Link></p>
                </div>
            </div>


        <Footer/>

            

        </>
    );
}
