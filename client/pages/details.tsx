import { Search, MapPin, Calendar, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Details() {
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-purple-600 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
            <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
              <Search className="w-3 h-3 text-purple-600" />
            </div>
            <span className="font-medium text-sm">Homato</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-purple-200">Search</a>
            <a href="#" className="hover:text-purple-200">Take parcel</a>
            <a href="#" className="hover:text-purple-200">Support</a>
            <a href="#" className="hover:text-purple-200">Sign in</a>
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-purple-600">
              Register
            </Button>
          </div>
        </div>

        {/* Search Form */}
        <div className="mt-4">
          <div className="bg-white rounded-lg p-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              {/* Leaving From */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                </div>
                <Input 
                  placeholder="Leaving from..." 
                  defaultValue="Pune"
                  className="pl-10 border-none bg-transparent focus:ring-0 focus:outline-none text-sm text-gray-700"
                />
              </div>

              {/* Going To */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                </div>
                <Input 
                  placeholder="Going to..." 
                  defaultValue="Yeola"
                  className="pl-10 border-none bg-transparent focus:ring-0 focus:outline-none text-sm text-gray-700"
                />
              </div>

              {/* Select Date */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <Input 
                  placeholder="Select the date" 
                  className="pl-10 border-none bg-transparent focus:ring-0 focus:outline-none text-sm text-gray-700"
                />
              </div>

              {/* Search Button */}
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium">
                Search
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Route Title */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-medium text-gray-800 text-center">Pune To Yeola</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Date Filter */}
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Thursday, 18 July</p>
              <p className="text-xs text-gray-500">1 rider available</p>
            </div>

            {/* Sort By */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Sort by</h3>
                <button className="text-xs text-cyan-500 hover:underline">Clear all</button>
              </div>
              
              <RadioGroup defaultValue="earliest" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="earliest" id="earliest" className="text-cyan-500" />
                  <Label htmlFor="earliest" className="text-sm text-gray-700">Earliest departure</Label>
                  <span className="ml-auto text-xs text-gray-500">2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lowest" id="lowest" className="text-cyan-500" />
                  <Label htmlFor="lowest" className="text-sm text-gray-700">Lowest price</Label>
                  <span className="ml-auto text-xs text-gray-500">5</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="close-departure" id="close-departure" className="text-cyan-500" />
                  <Label htmlFor="close-departure" className="text-sm text-gray-700">Close to departure point</Label>
                  <span className="ml-auto text-xs text-gray-500">3</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="close-arrival" id="close-arrival" className="text-cyan-500" />
                  <Label htmlFor="close-arrival" className="text-sm text-gray-700">Close to arrival point</Label>
                  <span className="ml-auto text-xs text-gray-500">3</span>
                </div>
              </RadioGroup>
            </div>

            {/* Departure Time */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Departure time</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="before-6" className="text-cyan-500 border-cyan-500" />
                  <Label htmlFor="before-6" className="text-sm text-gray-700">Before 06:00</Label>
                  <span className="ml-auto text-xs text-gray-500">2</span>
                </div>
              </div>
            </div>

            {/* Trust and Safety */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Trust and safety</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="verified" className="text-cyan-500 border-cyan-500" />
                  <Label htmlFor="verified" className="text-sm text-gray-700">Verified Profile</Label>
                  <span className="ml-auto text-xs text-gray-500">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Ride Listings */}
          <div className="lg:col-span-3 space-y-4">
            {rides.map((ride) => (
              <div key={ride.id} className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  {/* Time and Route Info */}
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{ride.departureTime}</div>
                      <div className="text-sm text-gray-500">{ride.route}</div>
                    </div>
                    
                    {/* Route Line */}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-16 h-0.5 bg-gray-300"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{ride.arrivalTime}</div>
                      <div className="text-sm text-gray-500">{ride.location}</div>
                    </div>
                  </div>

                  {/* Driver Info and Price */}
                  <div className="flex items-center gap-4">
                    {/* Driver */}
                    <div className="flex items-center gap-2">
                      <img 
                        src={ride.avatar} 
                        alt={ride.driverName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{ride.driverName}</div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600">{ride.rating}</span>
                          <span className="text-xs text-gray-500">({ride.reviewCount})</span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">{ride.price}</div>
                      <div className="text-xs text-gray-500">{ride.seats}</div>
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
