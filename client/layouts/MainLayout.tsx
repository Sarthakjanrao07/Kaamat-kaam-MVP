import { Outlet } from "react-router-dom";
import Navbar from "@/src/components/Navbar";

export default function MainLayout() {
  // TEMP: fake auth state
  const isAuthenticated = false; // later from context / JWT

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Navbar isAuthenticated={isAuthenticated} />
      <Outlet />
    </div>
  );
}
