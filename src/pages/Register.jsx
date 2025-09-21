import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";

import log from "../assets/log.jpg"
import summer from "../assets/summer.jpg"
import footer from "../assets/footer.jpg"
import malaysia from "../assets/malaysia.jpg"
import Footer from "./Footer";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) return alert("Passwords do not match");
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // ✅ Navigate to login page after registration
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div>
        <div className="bg-yellow-400 p-5  w-full h-16 absolute">
          <ul className="flex  gap-20 mx-100">
            <li className="text-white  text-lg  font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>Home</li>
            <li className="text-white  text-lg font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>Career</li>
            <li className="text-white text-lg  font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>Booking</li>
            <li className="text-white  text-lg  font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>Contact Us</li>
            <li className="text-white  text-lg  font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>About Us</li>
          </ul>
          <div className="flex relative justify-end my-8">
            <h1 className=" text-4xl font-extrabold relative text-black ">Travel World Explore Thinks</h1>
          </div>
          <div className="">
            <img src={log} alt="" className="absolute w-200 h-150 p-2 " />

          </div>
          <img className="w-150 h-100 relative mx-215 mt-20 my-30" src={summer} alt="" />



        </div>

        <div className="">

          <div className="flex items-center justify-center cyan-400">
            <div className="p-5 mx-150  aligin-center my-60 bg-transparent backdrop-blur-md shadow-lg rounded-xl w-96 relative">
              <h2 className="text-2xl font-bold mb-4">Register</h2>
              <input
                type="email"
                placeholder="Email"
                className="border w-full p-2 mb-3 rounded  rounded-2xl"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="border w-full p-2 mb-3 rounded  rounded-2xl"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border w-full p-2 mb-3 rounded  rounded-2xl"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                onClick={handleRegister}
                className="bg-blue-500 w-full py-2 text-white rounded  rounded-2xl"
              >
                Register
              </button>
              <p className="mt-4 text-sm">
                Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>

    </>
  );
}
