import { Search } from "lucide-react";

export default function Verify_details() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-lg px-4 py-3 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
              <Search className="w-3 h-3 text-purple-700" />
            </div>
            <span className="font-medium text-sm">Homato</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="/details_available" className="hover:text-yellow-300">
              Search
            </a>
            <a href="/get_parcel" className="hover:text-yellow-300">
              Take parcel
            </a>
            <a href="/support" className="hover:text-yellow-300">
              Support
            </a>
          </div>
        </div>
      </header>

      {/* Success Banner */}
      <div className="bg-green-500/20 backdrop-blur-md border border-green-400/30 text-green-300 py-12 text-center shadow-lg">
        <h1 className="text-3xl font-semibold">
          Your Route is Published!
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex justify-center px-4 -mt-8">
        <div className="w-full max-w-md space-y-6 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md">
          {/* Profile Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-full shadow-lg flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-700 font-medium text-xl">S</span>
              </div>
            </div>
          </div>

          {/* Verification Items */}
          <div className="space-y-4">
            {/* Verify Govt ID */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              </div>
              <span className="text-cyan-400 text-sm">Verify your Govt. ID</span>
            </div>

            {/* Confirm Email */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
              </div>
              <span className="text-cyan-400 text-sm">Confirm your email</span>
            </div>

            {/* Confirmed Phone Number */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-200 text-sm">Confirmed phone number</span>
            </div>
          </div>

          {/* See Route Offer Link */}
          <div className="pt-4 text-center">
            <button className="text-sm bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition">
              See my route offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
