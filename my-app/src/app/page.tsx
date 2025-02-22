import Image from "next/image";

import './page.css'

import Navbar from "./components/navbar/navbar";
import Home from './ui/Profile/profile'

export default function Page() {
  return (
        <div className="HomeComponent">
            <div className="HomeComponent-in">
                <Navbar />  
                <Home />
            </div>
        </div>
  );
}
