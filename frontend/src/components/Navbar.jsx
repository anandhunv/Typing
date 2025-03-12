import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Settings, User } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-6 left-6 right-6 z-50 flex justify-between items-center">
      {/* Left Side - Logo */}
      <Link to={'/'}>
      <div className="flex items-center gap-2.5 px-5 py-2 rounded-full border 
                      shadow-md backdrop-blur-lg bg-base-100 border-base-300">
        <FaQuoteLeft className="w-3 h-3 text-primary" />
    <h1 className="text-lg font-bold">Typing.</h1>
      </div>   </Link>  

      {/* Right Side - Navigation Links */}
      <div className="flex items-center gap-3 px-5 py-2 rounded-full border 
                      shadow-md backdrop-blur-lg bg-base-100 border-base-300">
        <Link to={"/settings"} className="tooltip tooltip-bottom" data-tip="Settings">
          <Settings className="w-5 h-5 text-base-content hover:text-primary" />
        </Link>

        {authUser && (
          <>
            <Link to={"/profile"} className="tooltip tooltip-bottom" data-tip="Profile">
              <User className="w-5 h-5 text-base-content hover:text-primary" />
            </Link>
            <button onClick={logout} className="tooltip tooltip-bottom" data-tip="Logout">
              <LogOut className="w-5 h-5 text-error hover:text-red-600" />
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
