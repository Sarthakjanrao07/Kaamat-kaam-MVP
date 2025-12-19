import { Search, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function order_booked() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Header */}

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[85vh] px-4">
        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left – Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-500/40 to-cyan-400/40 rounded-full"></div>

                {/* Icon */}
                <div className="relative z-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center shadow-xl">
                  <CheckCircle className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>

            {/* Right – Text */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                Booking Confirmed!
              </h1>

              <p className="text-gray-300 mb-8 text-lg">
                Your parcel service has been successfully booked.  
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => (window.location.href = "/")}
                  className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 px-8 py-3 text-white font-medium shadow-lg"
                >
                  OK
                </Button>

                <Button
                  variant="outline"
                  className="border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 px-8 py-3 font-medium"
                  onClick={() => (window.location.href = "/support")}
                >
                  Contact Support
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
