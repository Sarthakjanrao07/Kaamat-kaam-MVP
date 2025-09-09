import { 
  Search, MapPin, Calendar, Star, CheckCircle, Shield, Phone, Users, AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Buy_Now() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => (window.location.href = "/")}>
            <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-cyan-400 rounded flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Kawasaki-ikhim
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="/details_available" className="hover:text-yellow-300">Search</a>
            <a href="/get_parcel" className="hover:text-yellow-300">Take parcel</a>
            <a href="/Support" className="hover:text-yellow-300">Support</a>
            <a href="#" className="hover:text-yellow-300">Sign in</a>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white px-4 py-1.5 rounded-lg shadow-md transition">
              Register
            </Button>
          </div>
        </div>

        {/* Search Form */}
        <div className="mt-4 container mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* Leaving From */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <Input
                  placeholder="Leaving from..."
                  className="pl-10 border-white bg-transparent focus:ring-0 text-sm text-white placeholder:text-white"
                />
              </div>

              {/* Going To */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <Input
                  placeholder="Going to..."
                  className="pl-10 border-white bg-transparent focus:ring-0 text-sm text-white placeholder:text-white"
                />
              </div>

              {/* Select Date */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Calendar className="w-4 h-4 text-purple-300" />
                </div>
                <Input
                  placeholder="Select the date"
                  className="pl-10 border-white bg-transparent focus:ring-0 text-sm text-white placeholder:text-white"
                />
              </div>

              {/* Search Button */}
              <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium">
                Search
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Date Header */}
      <div className="bg-black/30 backdrop-blur-md py-4 mt-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold text-purple-200">Thursday, 31 July</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - Ride Details */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              {/* Trip Header */}
              <div className="mb-6">
                <p className="text-sm text-purple-300 mb-2">Aurangabad</p>
                <div className="flex items-center gap-6 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">06:30</div>
                    <div className="text-sm text-gray-300">Pune-Chichcholi</div>
                    <div className="text-xs text-gray-400">
                      Laxmi Nagar Lashkar Road Society, Amravati, Maharashtra
                    </div>
                  </div>

                  {/* Route Line */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-16 h-0.5 bg-gray-500"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>

                  <div className="text-center">
                    <div className="text-lg font-bold text-white">09:30</div>
                    <div className="text-sm text-gray-300">Train Station</div>
                    <div className="text-xs text-gray-400">Yeola</div>
                  </div>
                </div>
              </div>

              {/* Driver Section */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                  alt="Suraj"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-white">Suraj</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">4.6</span>
                      <span className="text-xs text-gray-400">(4 ratings)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ride Features */}
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Verified mobile</span>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Max. 3 in the back</span>
                </div>

                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Booking confirmed after driver accepts</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact Suraj
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-red-400 border-red-500 hover:bg-gray-400 flex items-center justify-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Report ride
                </Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Booking Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h3 className="font-medium text-purple-200 mb-4">Thursday, 31 July</h3>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-sm font-bold text-white">06:30</div>
                    <div className="text-xs text-gray-400">Pune-Chichcholi</div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    <div className="w-8 h-0.5 bg-gray-500"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-bold text-white">09:30</div>
                    <div className="text-xs text-gray-400">Yeola</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="Suraj"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-medium text-white">Suraj</div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-300">4.6</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-300 mb-4">1 passenger</div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">
                    ₹500<span className="text-sm font-normal">.00</span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
