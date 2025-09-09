import { Search, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cancel_Booking() {
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
            <a href="#" className="hover:text-purple-200">Sign in</a>
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-purple-600">
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content - Cancellation Warning */}
      <div className="relative min-h-[calc(100vh-60px)] bg-gradient-to-br from-teal-600 to-teal-700 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 opacity-20">
          {/* Large abstract shape bottom right */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full transform translate-x-32 translate-y-32"></div>
          {/* Medium abstract shape top left */}
          <div className="absolute top-20 left-0 w-64 h-64 bg-teal-500 rounded-full transform -translate-x-20"></div>
          {/* Small abstract shapes */}
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-teal-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-teal-400 rounded-full opacity-30"></div>
        </div>

        {/* Warning Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-60px)] px-4">
          <div className="text-center max-w-md mx-auto">
            {/* Warning Icon */}
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto">
                <AlertTriangle className="w-full h-full text-red-500" strokeWidth={2} />
              </div>
            </div>

            {/* Main Warning Text */}
            <div className="mb-8">
              <h1 className="text-2xl font-medium text-white mb-6 leading-tight">
                Cancelling this ride may affect<br />
                your future bookings
              </h1>
              
              <p className="text-teal-100 text-sm leading-relaxed">
                Riders depend on you to get them where they need to go.
                Too often after you cancel. Cancel too often and they 
                may be less likely to approve your next booking 
                request.
              </p>
            </div>

            {/* Confirm Cancellation Button */}
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 font-medium">
              Confirm Cancellation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
