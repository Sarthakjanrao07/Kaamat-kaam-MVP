import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function order_booked() {
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
            <span className="font-medium text-sm">Kawasaki-ikhim</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-purple-200">Search</a>
            <a href="#" className="hover:text-purple-200">Take parcel</a>
            <a href="#" className="hover:text-purple-200">Support</a>
          </div>
        </div>
      </header>

      {/* Main Content - Booking Success */}
      <div className="bg-green-500 min-h-[calc(100vh-60px)] flex items-center justify-center">
        <div className="flex items-center gap-16 max-w-4xl mx-auto px-4">
          {/* Car Illustration */}
          <div className="relative">
            {/* Car with person */}
            <div className="relative">
              {/* Car body */}
              <div className="w-64 h-32 bg-cyan-400 rounded-lg relative">
                {/* Car windows */}
                <div className="absolute top-2 left-8 w-48 h-16 bg-cyan-300 rounded-lg"></div>
                
                {/* Car wheels */}
                <div className="absolute -bottom-4 left-4 w-12 h-12 bg-gray-800 rounded-full">
                  <div className="absolute inset-2 bg-gray-600 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 right-4 w-12 h-12 bg-gray-800 rounded-full">
                  <div className="absolute inset-2 bg-gray-600 rounded-full"></div>
                </div>

                {/* Car front grille */}
                <div className="absolute top-8 -left-2 w-4 h-16 bg-gray-300 rounded-l-lg"></div>
              </div>

              {/* Person in car */}
              <div className="absolute top-4 left-12 z-10">
                <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
                <div className="w-12 h-16 bg-white rounded-lg mt-1"></div>
              </div>

              {/* Package/Item */}
              <div className="absolute -top-4 left-20 z-20">
                <div className="w-6 h-12 bg-orange-500 rounded-lg transform rotate-12"></div>
              </div>
            </div>
          </div>

          {/* Text and Buttons */}
          <div className="text-center text-white">
            <h1 className="text-4xl font-medium mb-8 leading-tight">
              Booked! Enjoy your<br />
              Service
            </h1>
            
            <div className="flex gap-4">
              <Button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 font-medium">
                OK
              </Button>
              <Button className="bg-white text-cyan-500 hover:bg-gray-100 px-8 py-3 font-medium">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
