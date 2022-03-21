import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React, {useState} from 'react';
import HeroSection from "../components/HeroSection";
export const Home = () =>{

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
        </>
    )
}
