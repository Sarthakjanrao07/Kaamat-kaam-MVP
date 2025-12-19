import { Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Get_Parcel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navbar */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
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
            <a href="/details_available" className="hover:text-yellow-300">
              Search
            </a>
            <a href="/get_parcel" className="hover:text-yellow-300">
              Take parcel
            </a>
            <a href="/Support" className="hover:text-yellow-300">
              Support
            </a>
            <a href="#" className="hover:text-yellow-300">
              Sign in
            </a>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white px-4 py-1.5 rounded-lg shadow-md transition">
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-cyan-400 drop-shadow-lg">
          Get A Parcel
        </h1>

        {/* Search Form */}
        <div className="w-full max-w-4xl">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <Input
                  placeholder="Leaving from..."
                  className="pl-10 bg-transparent border-gray-400 rounded-lg text-white placeholder-gray-400 focus:ring-0 text-sm"
                />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <Input
                  placeholder="Going to..."
                  className="pl-10 bg-transparent border-gray-400 rounded-lg text-white placeholder-gray-400 focus:ring-0 text-sm"
                />
              </div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                </div>
                <Input
                  placeholder="Select the date"
                  className="pl-10 bg-transparent border-gray-400 rounded-lg text-white placeholder-gray-400 focus:ring-0 text-sm"
                />
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 text-white font-medium rounded-lg shadow-lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
