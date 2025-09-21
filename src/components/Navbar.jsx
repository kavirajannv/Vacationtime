import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";


export default function Navbar() {
  return (
    <>
    <nav className=" text-white px-6 py-3  bg-red-300flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
      
      </ul>
      <button
        onClick={() => signOut(auth)}
        className="bg-red-500 px-4 py-2 mx-350  rounded-xl hover:bg-red-600"
      >
        Logout
      </button>
     
    </nav>
  
    </>
  );
}

