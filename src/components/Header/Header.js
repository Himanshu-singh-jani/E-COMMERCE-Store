import React from "react";
import { Link } from "react-router-dom";
import logoimg from "../../IMAGES/store-logo.jpg"


const navigation=[
  {
    name:"Home",
    path:"/"
  },
  {
    name:"Products",
    path:"/products",
  },
  {
    name:"About",
    path:"/about",
  },
  {
    name:"Contact",
    path:"/contact"
  }
]

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
          to={'/'}
        >
         <img className="w-10 h-10 text-white  rounded-full" alt="logo" src={logoimg}>
         </img>
          <span className="ml-3 text-xl">H.jani</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

          {navigation.map((navigation)=>{
            return(
              <Link to={navigation.path} className="mr-10 hover:text-gray-900 text-2xl font-semibold" >{navigation.name}</Link>
            )
          })}
          
        </nav>
       <Link to={"/cart"}> <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
        Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> </Link>
      </div>
    </header>
  );
};

export default Header;
