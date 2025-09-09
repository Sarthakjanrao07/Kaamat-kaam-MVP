import { useState } from "react";
import { Plus, Minus, X, Search } from "lucide-react";

export default function Route_Map() {
  const [selectedRoute, setSelectedRoute] = useState("route1");
  const [pricePerSeat, setPricePerSeat] = useState(10);
  const [showPublishDialog, setShowPublishDialog] = useState(false);

  const routes = [
    { id: "route1", duration: "5 min", description: "No tolls", details: "4 km • Blue Ridge Approach Road" },
    { id: "route2", duration: "7 min", description: "No tolls", details: "via Sawsan Rd/B" },
    { id: "route3", duration: "10 min", description: "No tolls", details: "3 km • Impervious Phase 1 Rd" }
  ];

  const handlePriceDecrease = () => {
    if (pricePerSeat > 1) setPricePerSeat(pricePerSeat - 1);
  };
  const handlePriceIncrease = () => setPricePerSeat(pricePerSeat + 1);

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
            <span className="font-medium text-sm">Kawasaki-ikhim</span>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-56px)]">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-lg p-6 overflow-y-auto">
          {/* Route Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">*What is your route?</h2>
            <div className="space-y-4">
              {routes.map((route) => (
                <label
                  key={route.id}
                  className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition ${
                    selectedRoute === route.id
                      ? "bg-purple-500/30 border border-purple-400"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <input
                    type="radio"
                    name="route"
                    checked={selectedRoute === route.id}
                    onChange={() => setSelectedRoute(route.id)}
                    className="mt-1 accent-purple-500"
                  />
                  <div>
                    <div className="font-medium">
                      {route.duration} - {route.description}
                    </div>
                    <div className="text-sm text-gray-300">{route.details}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Price Setting */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">*Set your price per seat</h2>
            <div className="flex items-center justify-center gap-6 mb-4">
              <button
                onClick={handlePriceDecrease}
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10"
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="text-3xl font-bold text-cyan-400">
                ₹{pricePerSeat}
              </div>
              <button
                onClick={handlePriceIncrease}
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white/10"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center">
              <span className="inline-block bg-green-200/20 text-green-300 text-xs px-3 py-1 rounded-full">
                Recommended price: ₹10
              </span>
            </div>
          </div>

          <button
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 font-medium shadow-md hover:opacity-90 transition"
            onClick={() => setShowPublishDialog(true)}
          >
            Publish a Route
          </button>
        </div>

        {/* Right Panel - Mock Map */}
        <div className="w-full lg:w-1/2 relative">
          <div className="h-full w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400"></div>

            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 600"
            >
              <path
                d="M120 180 Q 200 220 280 200 Q 320 190 340 240 Q 360 280 340 320 Q 320 360 300 400"
                stroke="#0891b2"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="120" cy="180" r="8" fill="#000" />
              <circle cx="120" cy="180" r="4" fill="#fff" />
              <circle cx="300" cy="400" r="8" fill="#000" />
              <circle cx="300" cy="400" r="4" fill="#fff" />
            </svg>

            <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center">
              <X className="w-4 h-4" />
            </button>

            <div className="absolute bottom-4 right-4 text-xs text-white bg-black/50 px-2 py-1 rounded">
              Google
            </div>
          </div>
        </div>
      </div>

      {/* Publish Dialog */}
      {showPublishDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 w-full max-w-md shadow-lg">
            <h3 className="text-lg font-semibold mb-3">
              Ready to publish your route?
            </h3>
            <p className="text-sm text-gray-300 mb-2">
              Would you like to add a comment for your reviewer?
            </p>
            <p className="text-xs text-gray-400">
              Please mention where and when to meet. Not taking the motorway?
              Limited space in your boot? Keep passengers in the loop.
            </p>
            <div className="flex gap-3 mt-6">
              <button
                className="flex-1 py-2 rounded-lg border border-gray-400 hover:bg-white/10"
                onClick={() => setShowPublishDialog(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90"
                onClick={() => setShowPublishDialog(false)}
              >
                Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
