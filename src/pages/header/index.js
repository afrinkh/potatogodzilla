import React,{useState} from 'react'
import SideBar from '../../components/SideBar';
import Navbar from "../../components/Navbar";
import Image from 'react-bootstrap/Image';
import header from './header.jpg'

const Header = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
      <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* HEADER IMAGE */}
            {/* <Image src={header} style={{width:''}} fluid/> */}
      </>
    );
}

export default Header;
