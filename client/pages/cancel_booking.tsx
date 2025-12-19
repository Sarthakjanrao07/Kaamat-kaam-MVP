import { Search, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/src/components/Navbar";


export default function CancelBooking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      
      {/* Header */}

      {/* Cancel Warning */}
      <div className="flex items-center justify-center min-h-[85vh] px-4">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-10 shadow-2xl border border-white/10 text-center max-w-md w-full">
          
          <AlertTriangle className="w-20 h-20 mx-auto text-red-500 mb-6" />

          <h1 className="text-2xl font-bold mb-4">
            Cancel Booking?
          </h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Cancelling frequently may affect your future bookings.
            Riders depend on your commitment.
          </p>

          <Button className="bg-red-500 hover:bg-red-600 px-8 py-3">
            Confirm Cancellation
          </Button>
        </div>
      </div>
    </div>
  );
}
