import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pick_Up() {
  const locations = [
    {
      id: 1,
      name: "1, Sahyogi Virat St",
      address: "Phase1-Wagholi Road, Plot No 1, Vishwaraj Bagh, Fursungi, Charholi Bk, Maharashtra",
      highlighted: true,
    },
    {
      id: 2,
      name: "Pune, Maharashtra",
      address: "India",
      highlighted: false,
    },
    {
      id: 3,
      name: "Pune, Maharashtra",
      address: "India",
      highlighted: false,
    },
    {
      id: 4,
      name: "1, Sahyogi Virat St, Blue Ridge Road Pune, Phase 1, Hinjewadi Rajiv Gandhi",
      address:
        "Infotech Park, Hinjewadi, Pune, Phase 1 Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra",
      highlighted: false,
    },
    {
      id: 5,
      name: "1, Sahyogi Virat St, Blue Ridge Road Pune, Phase 1, Hinjewadi Rajiv Gandhi",
      address:
        "Infotech Park, Hinjewadi, Pune, Phase 1 Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Maharashtra",
      highlighted: false,
    },
    {
      id: 6,
      name: "4, Laont Chowk Rd",
      address:
        "4, Laont Chowk Rd, Phase 1, Hinjewadi Rajiv Gandhi Infotech Park, Hinjewadi, Pune, Charholi Bk, Maharashtra",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
      {/* Header */}


      {/* Main Content */}
      <div className="flex flex-col items-center py-10">
        {/* Title */}
        <h1 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
          Pick-Up Point
        </h1>

        {/* Location Results */}
        <div className="w-full max-w-2xl px-4">
          <div className="space-y-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`flex items-start gap-3 p-5 rounded-xl cursor-pointer transition transform hover:scale-[1.01] ${
                  location.highlighted
                    ? "bg-gradient-to-r from-purple-500/30 to-cyan-400/30 border border-white/20"
                    : "bg-white/10 hover:bg-white/20"
                } backdrop-blur-lg shadow-md`}
              >
                {/* Location Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white text-sm leading-tight">
                    {location.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 leading-tight">
                    {location.address}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Confirm Button */}
          <Button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 text-white rounded-xl shadow-md">
            Confirm Pick-Up
          </Button>
        </div>
      </div>
    </div>
  );
}
