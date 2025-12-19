import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/src/components/Navbar";


export default function Book_Waiting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
      {/* Navbar */}

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
        <div className="text-center max-w-md mx-auto bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-8 shadow-lg">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-24 h-24 bg-purple-600/30 rounded-full mx-auto flex items-center justify-center shadow-md">
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 64 64" className="w-full h-full text-purple-400">
                  <rect x="8" y="16" width="48" height="40" rx="4" ry="4" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                  <rect x="12" y="20" width="40" height="32" rx="2" ry="2" fill="white"/>
                  <line x1="16" y1="8" x2="16" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="48" y1="8" x2="48" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="28" x2="56" y2="28" stroke="currentColor" strokeWidth="2"/>
                  <rect x="18" y="34" width="8" height="6" rx="1" fill="currentColor"/>
                  <rect x="30" y="34" width="8" height="6" rx="1" fill="currentColor"/>
                  <rect x="42" y="34" width="8" height="6" rx="1" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-4 leading-snug">
              Your booking is awaiting the <br />
              Trusty's approval
            </h1>
            <p className="text-gray-300 text-sm">
              Suraj will respond before 14:20 today
            </p>
          </div>

          {/* Action Button */}
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white px-6 py-3 font-medium rounded-lg shadow-lg transition">
            See your booking request
          </Button>
        </div>
      </div>
    </div>
  );
}
