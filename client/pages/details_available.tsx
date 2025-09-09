import { Search, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Details_available() {
  const rides = [
    {
      id: 1,
      departureTime: "05:45",
      arrivalTime: "09:30",
      route: "Pune-Guntakal",
      location: "Kachulwar Road",
      driverName: "Satya",
      rating: 4.7,
      reviewCount: 6,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      price: "₹500",
      seats: "1 seat available"
    },
    {
      id: 2,
      departureTime: "05:45",
      arrivalTime: "09:30",
      route: "Aurangabad",
      location: "Second Road",
      driverName: "Rohit",
      rating: 4.8,
      reviewCount: 12,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      price: "₹500",
      seats: "2 seats available"
    },
    {
      id: 3,
      departureTime: "07:15",
      arrivalTime: "11:00",
      route: "Pune-Guntakal",
      location: "Ahmednagar",
      driverName: "Amit",
      rating: 4.6,
      reviewCount: 8,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      price: "₹570",
      seats: "3 seats available"
    },
    {
      id: 4,
      departureTime: "09:30",
      arrivalTime: "13:15",
      route: "Pune",
      location: "Shivaji",
      driverName: "Priya",
      rating: 4.9,
      reviewCount: 15,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e4?w=40&h=40&fit=crop&crop=face",
      price: "₹490",
      seats: "1 seat available"
    },
    {
      id: 5,
      departureTime: "08:45",
      arrivalTime: "12:30",
      route: "Pune",
      location: "Shivaji",
      driverName: "Raj",
      rating: 4.5,
      reviewCount: 7,
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      price: "₹480",
      seats: "2 seats available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
      {/* Navbar */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
            <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-cyan-400 rounded flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Kawasaki-ikhim
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-yellow-300">Search</a>
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
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-3 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {/* Leaving From */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <Input 
                  placeholder="Leaving from..." 
                  defaultValue="Pune"
                  className="pl-10 border-gray-400 bg-transparent focus:ring-0 text-sm text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Going To */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <Input 
                  placeholder="Going to..." 
                  defaultValue="Yeola"
                  className="pl-10 border-gray-400 bg-transparent focus:ring-0 text-sm text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Select Date */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                </div>
                <Input 
                  placeholder="Select the date" 
                  className="pl-10 border-gray-400 bg-transparent focus:ring-0 text-sm text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Search Button */}
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 text-white font-medium rounded-lg shadow-lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Route Title */}
      <div className="py-6 text-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
          Pune To Yeola
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-md">
              <p className="text-sm text-gray-300 mb-2">Thursday, 18 July</p>
              <p className="text-xs text-gray-400">1 rider available</p>
            </div>

            {/* Sort By */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-white">Sort by</h3>
                <button className="text-xs text-cyan-400 hover:underline">Clear all</button>
              </div>
              <RadioGroup defaultValue="earliest" className="space-y-3">
                {[
                  { id: "earliest", label: "Earliest departure", count: 2 },
                  { id: "lowest", label: "Lowest price", count: 5 },
                  { id: "close-departure", label: "Close to departure point", count: 3 },
                  { id: "close-arrival", label: "Close to arrival point", count: 3 },
                ].map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.id} id={item.id} className="text-cyan-400 border-cyan-400" />
                    <Label htmlFor={item.id} className="text-sm text-gray-200">{item.label}</Label>
                    <span className="ml-auto text-xs text-gray-400">{item.count}</span>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Departure Time */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-md">
              <h3 className="font-medium text-white mb-4">Departure time</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="before-6" className="text-cyan-400 border-cyan-400" />
                  <Label htmlFor="before-6" className="text-sm text-gray-200">Before 06:00</Label>
                  <span className="ml-auto text-xs text-gray-400">2</span>
                </div>
              </div>
            </div>

            {/* Trust and Safety */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-md">
              <h3 className="font-medium text-white mb-4">Trust and safety</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="verified" className="text-cyan-400 border-cyan-400" />
                  <Label htmlFor="verified" className="text-sm text-gray-200">Verified Profile</Label>
                  <span className="ml-auto text-xs text-gray-400">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Ride Listings */}
          <div className="lg:col-span-3 space-y-4">
            {rides.map((ride) => (
              <div key={ride.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-md hover:shadow-xl hover:scale-[1.01] transition transform">
                <div className="flex items-center justify-between">
                  {/* Time and Route Info */}
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{ride.departureTime}</div>
                      <div className="text-sm text-gray-300">{ride.route}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-16 h-0.5 bg-gray-500"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{ride.arrivalTime}</div>
                      <div className="text-sm text-gray-300">{ride.location}</div>
                    </div>
                  </div>

                  {/* Driver Info and Price */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img src={ride.avatar} alt={ride.driverName} className="w-9 h-9 rounded-full object-cover border border-purple-400" />
                      <div>
                        <div className="text-sm font-medium text-white">{ride.driverName}</div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-300">{ride.rating}</span>
                          <span className="text-xs text-gray-400">({ride.reviewCount})</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-purple-300">{ride.price}</div>
                      <div className="text-xs text-gray-400">{ride.seats}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}