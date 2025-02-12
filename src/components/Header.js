import { Bars3Icon } from '@heroicons/react/24/solid'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import {useState} from "react"

export default function Header(){

    let config ={

        social:{
            linkedin:"https://www.linkedin.com/in/dharaneesh-rm-235b9228b/",
            github:"https://github.com/dharaneesh00"
        }

    }

let [toggleMenu , setToggleMenu] = useState(false);

    return <header className="flex justify-between px-7 py-2 bg-primary">
       <a className="font-bold text-black"href="#"></a>

        <nav className = "hidden md:block">
        <ul className=" flex text-left text-1xl  font-bold text-black">
            
            <li><a href ="#about">About<b></b></a></li>
            <li><a href ="#resume">Resume<b/></a></li>
            <li><a href ="#contact">Contact</a></li>
        </ul>
        </nav>

        {toggleMenu && <nav className = "block md:hidden ">
        <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
           
            <li><a href ="#about">About<b/></a></li>
            <li><a href ="#resume">Resume<b/></a></li>
            <li><a href ="#contact">Contact</a></li>
        </ul>
        </nav>}

       

        <button onClick={()=> setToggleMenu(!toggleMenu)} className="block md:hidden "><Bars3Icon className="text-white h-5"/></button>
      
        <div className="flex ">
        <a href={config.social.linkedin} className=" pr-5   hover:text-white "><CiLinkedin  size={40}/></a>
    
        <a href={config.social.github}className="pr-5  hover:text-white ">< FaGithub size={40}/></a>
        
        </div>

    </header>
}