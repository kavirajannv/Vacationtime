import Navbar from "../components/Navbar";
import vp from "../assets/vp.mp4"
import Footer from "./Footer";

export default function Home() {
    return (
        <>

            <div className=" w-full h-full ">




                <div className="w-full h-full absolute">
                    <video src={vp} autoPlay
                        loop

                        playsInline className="absolute top-0 left-0 w-full h-full object-cover"   ></video>
                </div>
                <div className=" p-5 relative w-full h-16">
                    <ul className="flex  gap-20 mx-100">
                        <li className="text-white  text-lg  font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>Home</li>
                        <li className="text-white  text-lg font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>Career</li>
                        <li className="text-white text-lg  font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>Booking</li>
                        <li className="text-white  text-lg  font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>Contact Us</li>
                        <li className="text-white  text-lg  font-sans font-bold hover:cursor-pointer hover:underline"><a href=""></a>About Us</li>
                    </ul>
                    <div className="flex relative justify-end my-8">
                        <h1 className=" text-4xl font-extrabold relative text-white ">Travel World Explore Thinks</h1>
                    </div>
                    <div className="mt-60">
                        <a href=""  className="bg-transparent overflow-hidden p-5 mx-140 text-white text-2xl font-bold rounded-2xl border-2 border-black hover:bg-blue-600 border-white">Book Now Get Details.</a>
                    </div>

                </div>
                </div>

            </>

            );
}
