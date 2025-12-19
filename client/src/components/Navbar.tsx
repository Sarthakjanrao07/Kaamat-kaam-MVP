import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-cyan-400 rounded flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
            Homato
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-yellow-300">
            Search
          </Link>
          <Link to="/get_parcel" className="hover:text-yellow-300">
            Take parcel
          </Link>
          <Link to="/support" className="hover:text-yellow-300">
            Support
          </Link>
          <Link to="/sign_in" className="hover:text-yellow-300">
            Sign in
          </Link>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 shadow-md"
          >
            <Link to="/register">Register</Link>
          </Button>
        </nav>

      </div>
    </header>
  );
}
