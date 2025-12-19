import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export default function Select_Date() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!date) return;

    // later you can store this in context / redux / backend
    navigate("/pick_up", {
      state: {
        travelDate: date,
      },
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}

      {/* Main */}
      <div className="flex flex-col items-center justify-center mt-12">
        <h2 className="text-3xl font-bold mb-8">
          When are you going?
        </h2>

        {/* Calendar */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            fromDate={new Date()}
            className="rounded-md"
          />
        </div>

        {/* Selected Date */}
        {date && (
          <p className="mt-6 text-sm text-gray-600">
            Selected date:{" "}
            <span className="font-semibold">
              {format(date, "EEEE, dd MMMM yyyy")}
            </span>
          </p>
        )}

        {/* Continue Button */}
        <Button
          onClick={handleContinue}
          disabled={!date}
          className="mt-8 px-10 py-4 text-lg rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center gap-2"
        >
          Continue
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
