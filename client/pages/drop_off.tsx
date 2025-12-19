import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Drop_Off() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(1);

  // Dummy drop-off locations (later from DB)
  const dropLocations = [
    {
      id: 1,
      name: "Yeola Bus Stand",
      address: "Yeola, Nashik, Maharashtra",
    },
    {
      id: 2,
      name: "Aurangabad MIDC",
      address: "Waluj MIDC, Aurangabad",
    },
    {
      id: 3,
      name: "Shirdi Temple Area",
      address: "Shirdi, Ahmednagar, Maharashtra",
    },
  ];

  const handleConfirm = () => {
    if (!selectedId) return;

    const selectedDrop = dropLocations.find(
      (l) => l.id === selectedId
    );

    // Navigate to route map page
    navigate("/route_map", {
      state: {
        dropOff: selectedDrop,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
      <div className="flex flex-col items-center py-10">
        <h1 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
          Drop-Off Point
        </h1>

        <div className="w-full max-w-2xl px-4 space-y-4">
          {dropLocations.map((location) => {
            const active = selectedId === location.id;

            return (
              <div
                key={location.id}
                onClick={() => setSelectedId(location.id)}
                className={`flex items-start gap-3 p-5 rounded-xl cursor-pointer transition transform hover:scale-[1.01] ${
                  active
                    ? "bg-gradient-to-r from-purple-500/30 to-cyan-400/30 border border-white/20"
                    : "bg-white/10 hover:bg-white/20"
                } backdrop-blur-lg shadow-md`}
              >
                {/* Radio */}
                <div className="mt-1">
                  <div className="w-4 h-4 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                    {active && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">
                    {location.name}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {location.address}
                  </p>
                </div>

                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            );
          })}

          <Button
            onClick={handleConfirm}
            disabled={!selectedId}
            className="w-full mt-8 bg-gradient-to-r from-purple-500 to-cyan-400 disabled:opacity-50 text-white rounded-xl shadow-md"
          >
            Confirm Drop-Off
          </Button>
        </div>
      </div>
    </div>
  );
}
