import { Search, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  isAuthenticated: boolean;
}

export default function Navbar({ isAuthenticated }: NavbarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign_in");
  };

  return (
    <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 py-3 shadow-lg">
      <div className="flex remember flex items-center justify-between container mx-auto">
        
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-cyan-400 rounded flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
            Homato
          </span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm">
          <Link to="/details_available" className="hover:text-yellow-300">
            Search
          </Link>
          <Link to="/get_parcel" className="hover:text-yellow-300">
            Take parcel
          </Link>
          <Link to="/support" className="hover:text-yellow-300">
            Support
          </Link>

          {/* Auth Section */}
          {!isAuthenticated ? (
            <>
              <Link to="/sign_in" className="hover:text-yellow-300">
                Sign in
              </Link>
              <Button
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90"
              >
                Register
              </Button>
            </>
          ) : (
            <>
              <Link to="/profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </Link>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
