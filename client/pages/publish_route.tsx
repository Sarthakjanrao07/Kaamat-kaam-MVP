import { Search, MapPin, Calendar, Star, Phone, Mail, DollarSign, Shield, Users, ArrowRight, CheckCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Publish_Route() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
  {/* Header */}
  <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 py-3 shadow-lg">
    <div className="flex items-center justify-between container mx-auto">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-cyan-400 rounded flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Homato
            </span>
          </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 text-sm">
        <a href="/details_available" className="hover:text-yellow-300">
          Search
        </a>
        <a href="/get_parcel" className="hover:text-yellow-300">
          Take parcel
        </a>
        <a href="/Support" className="hover:text-yellow-300">
          Support
        </a>
        <a href="#" className="hover:text-yellow-300">
          Sign in
        </a>
        <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white px-4 py-1.5 rounded-lg shadow-md transition">
              Register
            </Button>
      </div>
    </div>
  </header>

  {/* Hero Section */}
  <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-16">
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column - Form */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-white/20">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3">
          Publish Your Route
        </h2>
        <p className="text-gray-300 mb-6">Where are you going?</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">From?</label>
            <Input
              placeholder="Enter starting location"
              className="w-full bg-gray-800 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Where?</label>
            <Input
              placeholder="Enter destination"
              className="w-full bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Weight (can carry)?
            </label>
            <Input
              placeholder="Enter weight capacity"
              className="w-full bg-gray-800 border border-gray-600 text-white"
            />
          </div>

          <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg shadow-md">
            Publish to route
          </Button>
        </form>
      </div>

      {/* Right Column - Illustration */}
      <div className="relative flex justify-center">
        <div className="relative text-center">
          <div className="absolute -top-8 right-0 text-blue-400 text-4xl">⭐</div>
          <div className="flex items-center gap-4">
            <div className="text-6xl">🧑‍💼</div>
            <div className="w-16 h-28 bg-black rounded-lg flex items-center justify-center">
              <div className="w-12 h-20 bg-white rounded flex flex-col items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mb-2"></div>
                <div className="text-xs">📍</div>
              </div>
            </div>
            <div className="text-8xl">🚗</div>
          </div>
          <div className="absolute -bottom-4 right-8 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* How It Works Section */}
  <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">How it works</h2>
        <p className="text-gray-400">
          Book with ease today by these 3 simple steps
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="text-center flex-1">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold mb-2">Choose Destination</h3>
          <p className="text-sm text-gray-400">
            Pick where you want to go with ease.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center flex-1">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold mb-2">Pick-up Location</h3>
          <p className="text-sm text-gray-400">
            Set your pick-up point quickly and easily.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center flex-1">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-bold mb-2">Your Destination</h3>
          <p className="text-sm text-gray-400">
            Reach your drop point without hassle.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Book Now Section */}
  <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12 text-center">
    <Button className="bg-white text-purple-700 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full shadow-lg">
      Book Now
    </Button>
  </section>

  {/* Features Section */}
  <section className="py-16 bg-gradient-to-b from-black via-purple-950 to-gray-900">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {/* Customer Support */}
      <div className="text-center">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <Shield className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="font-bold mb-2">Customer Support</h3>
        <p className="text-sm text-gray-400">
          Dedicated support teams are here to help 24/7.
        </p>
      </div>

      {/* Transparent Pricing */}
      <div className="text-center">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <DollarSign className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="font-bold mb-2">Transparent Pricing</h3>
        <p className="text-sm text-gray-400">
          No surprises. Transparent, fair and upfront costs.
        </p>
      </div>

      {/* Many Location */}
      <div className="text-center">
        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="font-bold mb-2">Many Locations</h3>
        <p className="text-sm text-gray-400">
          Wide network coverage across multiple cities.
        </p>
      </div>
    </div>
  </section>

  {/* Why to Join Us */}
  <section className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
    <div className="container mx-auto px-4 text-center text-white max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="text-yellow-400 text-4xl mb-4">⭐</div>
        <h2 className="text-3xl font-bold mb-6">Why to Join Us</h2>
        <p className="text-purple-100 leading-relaxed">
          Earn more on your schedule by joining India’s delivery route sharing
          platform. Drive with freedom and grow your income.
        </p>
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="py-16 bg-gradient-to-b from-gray-900 via-purple-950 to-black">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">What our Clients Say</h2>

      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 border border-white/20">
        <div className="text-6xl text-gray-400 mb-4">"</div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod lorem et tellus ultrices tincidunt. Pellentesque habitant
          morbi tristique senectus et netus et malesuada.
        </p>

        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        <p className="font-bold">Web Developer</p>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gradient-to-r from-purple-800 to-indigo-800 text-white py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo and Description */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
            <Search className="w-3 h-3 text-purple-800" />
          </div>
          <span className="font-medium">Kawasaki-ikhim</span>
        </div>
        <p className="text-purple-100 text-sm mb-4">
          Delivering through the road registration network. Share routes and
          get goods delivered faster with ease.
        </p>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-bold mb-4">Contact us</h3>
        <div className="space-y-2 text-purple-100 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(720) 555-0304</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>274 4th St, San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div>
        <h3 className="font-bold mb-4">Subscribe</h3>
        <div className="space-y-3">
          <Input
            placeholder="Name"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Input
            placeholder="Email"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold">
            Subscribe
          </Button>
        </div>
      </div>
    </div>

    <div className="border-t border-white/20 mt-8 pt-8 text-center">
      <p className="text-purple-100 text-sm">
        Copyright ©2023 | Kawasaki-ikhim - All Rights Reserved
      </p>
    </div>
  </footer>
</div>

  );
}
