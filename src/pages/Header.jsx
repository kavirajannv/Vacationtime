


import log from "../assets/log.jpg"
import summer from "../assets/summer.jpg"
import footer from "../assets/footer.jpg"
import malaysia from "../assets/malaysia.jpg"
import Navbar from "../components/Navbar";

export default function Header(){
    return(
        <>
        
        <div className="bg-yellow-400 p-5  w-full h-16">
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
                    <div>
                        <img src={log} alt="" className="absolute w-200 h-150 p-2 my-3" />

                    </div>
                    <img className="w-150 h-100 relative mx-225 my-25" src={summer} alt="" />
            


                </div>
        
        
        </>
    );
}