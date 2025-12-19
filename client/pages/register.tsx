import { Search, User, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navbar */}
      
      {/* Register Card */}
      <div className="flex items-center justify-center min-h-[85vh] px-4">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
            Create Account
          </h2>

          <div className="space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
              <Input
                placeholder="Full name"
                className="pl-10 bg-transparent border-gray-400 text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
              <Input
                type="email"
                placeholder="Email address"
                className="pl-10 bg-transparent border-gray-400 text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10 bg-transparent border-gray-400 text-white placeholder-gray-400"
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 shadow-lg">
              Register
            </Button>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/sign_in" className="text-cyan-400 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
