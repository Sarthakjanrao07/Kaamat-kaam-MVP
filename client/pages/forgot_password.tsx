import { Phone, KeyRound, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="flex items-center justify-center min-h-[85vh] px-4">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10">

          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
            Reset Password
          </h2>

          {/* STEP 1 – MOBILE NUMBER */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                <Input
                  type="tel"
                  placeholder="Enter mobile number"
                  className="pl-10 bg-transparent border-gray-400 text-white placeholder-gray-400"
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg"
                onClick={() => setStep(2)}
              >
                Send OTP
              </Button>
            </div>
          )}

          {/* STEP 2 – OTP */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
                <Input
                  placeholder="Enter OTP"
                  className="pl-10 bg-transparent border-gray-400 text-white placeholder-gray-400"
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg"
                onClick={() => setStep(3)}
              >
                Verify OTP
              </Button>

              <p className="text-center text-sm text-gray-400">
                Didn&apos;t receive OTP?{" "}
                <button className="text-cyan-400 hover:underline">
                  Resend
                </button>
              </p>
            </div>
          )}

          {/* STEP 3 – NEW PASSWORD */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                <Input
                  type="password"
                  placeholder="New password"
                  className="pl-10 bg-transparent border-gray-400 text-white placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                <Input
                  type="password"
                  placeholder="Confirm password"
                  className="pl-10 bg-transparent border-gray-400 text-white placeholder-gray-400"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg">
                Reset Password
              </Button>
            </div>
          )}

          <p className="text-center text-sm text-gray-400 mt-6">
            Back to{" "}
            <Link to="/sign_in" className="text-cyan-400 hover:underline">
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
