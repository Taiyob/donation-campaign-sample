import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import './nav.css'

const Navbar = () => {
  return (
    <div className="bannerOverlay" style={{backgroundImage: 'url(https://i.ibb.co/pJDsRtR/Rectangle-4281.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height:'400px'}}>   
      <nav className="flex justify-between items-center py-6 px-5 max-w-[1300px] mx-auto mb-5">
        <Logo></Logo>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending, }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? "text-green-400 underline"
                  : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/eee"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='flex justify-center items-center text-4xl font-semibold mb-5'>
        <h1>I Grow By Helping People In Need</h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className="form-control ">
            <label className="input-group">
              <input type="text" placeholder="Search Here" className="input input-bordered" />
              <span className='bg-orange-800 text-white font-semibold'>Search</span>
            </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
