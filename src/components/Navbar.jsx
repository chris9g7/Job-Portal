import { NavLink } from "react-router-dom";

function Navbar() {

  const NavLinkClass = ({ isActive }) =>
    isActive
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';


      
  return (
    <>
      <div className="bg-sky-600 text-white  text-center flex  justify-around  p-5">

        <div className="flex  ">
          <img src="wave.png" alt="" className="w-10 h-10 " />
          <span className="text-2xl font-bold flex">React Jobs</span>
        </div>

        <div className="flex gap-5">
          <NavLink to={"/home"} className={NavLinkClass}>Home</NavLink>
          <NavLink to={"/Jobs"} className={NavLinkClass}>Jobs</NavLink>
          <NavLink to={"/add-job"} className={NavLinkClass}>Add jobs</NavLink>
          
        </div>
      </div>
      <hr />
      
    </>
  );
}

export default Navbar;

