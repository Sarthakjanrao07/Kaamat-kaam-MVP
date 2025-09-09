import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OrderBooked from "./pages/order_booked";
import NotFound from "./pages/NotFound";
import Book_Waiting from "./pages/book_waiting";
import Details from "./pages/details";
import Get_Parcel from "./pages/get_parcel";
import Pick_Up from "./pages/pick_up";
import Publish_Route from "./pages/publish_route";
import Route_Map from "./pages/route_map";
import Verify_details from "./pages/verify_details";
import Glow_Nest from "./pages/conversation";
import Cancel_Booking from "./pages/cancel_booking";
import Buy_Now from "./pages/buy_now";
import Details_available from "./pages/details_available";
import Landing_Page from "./pages/landing_page";
import SupportPage from "./pages/support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/account_page" element={<Index />} />
          <Route path="/" element={<Publish_Route />} />
          <Route path="/order_booked" element={<OrderBooked />} />
          <Route path="/Book_Waiting" element={<Book_Waiting />} />
          <Route path="/buy_now" element={<Buy_Now />} />
          <Route path="/cancel_booking" element={<Cancel_Booking />} />
          <Route path="/details_available" element={<Details_available />} />
          <Route path="/get_parcel" element={<Get_Parcel />} />
          <Route path="/conversation" element={<Glow_Nest />} />
          <Route path="/pick_up" element={<Pick_Up />} />
          <Route path="/route_map" element={<Route_Map />} />
          <Route path="/verify_details" element={<Verify_details />} />
          <Route path="/landing_page" element={<Landing_Page />} />
          <Route path="/support" element={<SupportPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
