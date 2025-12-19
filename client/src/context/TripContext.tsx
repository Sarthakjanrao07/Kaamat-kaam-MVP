import { createContext, useContext, useState } from "react";

type TripData = {
  from?: string;
  to?: string;
  date?: string;
  pickup?: any;
  dropoff?: any;
};

type TripContextType = {
  trip: TripData;
  setTrip: React.Dispatch<React.SetStateAction<TripData>>;
};

const TripContext = createContext<TripContextType | null>(null);

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [trip, setTrip] = useState<TripData>({});

  return (
    <TripContext.Provider value={{ trip, setTrip }}>
      {children}
    </TripContext.Provider>
  );
}

export const useTrip = () => {
  const ctx = useContext(TripContext);
  if (!ctx) throw new Error("useTrip must be used inside TripProvider");
  return ctx;
};
