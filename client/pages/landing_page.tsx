import { Search, User, Calendar, MessageCircle, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Landing_Page() {
  const feedPosts = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "",
        initials: "JD"
      },
      timestamp: "2 hours ago",
      content: "Hey there! Are you still attending tonight? I needed something for tomorrow.",
      isOnline: true
    },
    {
      id: 2,
      user: {
        name: "Sarah Wilson",
        avatar: "",
        initials: "SW"
      },
      timestamp: "4 hours ago", 
      content: "Thanks for the information. I'll be there.",
      isOnline: false
    },
    {
      id: 3,
      user: {
        name: "Mike Johnson",
        avatar: "",
        initials: "MJ"
      },
      timestamp: "1 day ago",
      content: "Can I have the transaction data here?",
      isOnline: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-brand-600 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
            <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
              <Search className="w-4 h-4 text-brand-600" />
            </div>
            <span className="font-semibold text-lg">Kawasaki Search</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/details_available" className="hover:text-brand-200">Search</a>
            <a href="/get_parcel" className="hover:text-purple-200">
                Take parcel
            </a>
            <a href="#" className="hover:text-brand-200">Support</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-white border-white hover:bg-white/10">
              Sign in
            </Button>
            <Button className="bg-white text-brand-600 hover:bg-gray-100">
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-brand-600 px-6 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <Input 
              placeholder="Search User" 
              className="w-full max-w-md bg-white pl-4 pr-4 py-3 rounded-lg"
            />
            <Button className="absolute right-0 top-0 h-full px-6 bg-cyan-400 hover:bg-cyan-500 text-white rounded-r-lg rounded-l-none">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Feed Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Thursday, 31 July</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>3:20 PM</span>
              </div>
            </div>

            <div className="space-y-4">
              {feedPosts.map((post) => (
                <Card key={post.id} className="p-6 bg-white shadow-sm">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={post.user.avatar} />
                          <AvatarFallback className="bg-brand-100 text-brand-600">
                            {post.user.initials}
                          </AvatarFallback>
                        </Avatar>
                        {post.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                          <span className="text-sm text-gray-500">{post.timestamp}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{post.content}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <button className="flex items-center gap-1 hover:text-brand-600">
                            <MessageCircle className="w-4 h-4" />
                            <span>Reply</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-brand-600">
                            <Star className="w-4 h-4" />
                            <span>Star</span>
                          </button>
                          <button className="hover:text-brand-600">
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white shadow-sm">
              <div className="text-center mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Thursday, 31 July</h3>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>3:20 PM</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-brand-100 text-brand-600">AA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">Alexander Andersen</p>
                    <p className="text-sm text-gray-500">alexander@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Location:</p>
                <p className="text-sm font-medium text-gray-800">#5042</p>
              </div>

              <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white">
                Start conversation
              </Button>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl text-gray-700 mb-4">
            "We are 1 Platform for everything you need to build and manage a successful business"
          </blockquote>
          <cite className="text-gray-600">— Be a Provider</cite>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                  <Search className="w-4 h-4 text-brand-600" />
                </div>
                <span className="font-semibold text-lg">Kawasaki Search</span>
              </div>
              <p className="text-brand-200 text-sm mb-4">
                Helping locals turn their neighborhood into the place they want to live.
              </p>
              <p className="text-brand-200 text-sm">
                Ready to get started? Get a free quote today for a call to get started.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact us</h3>
              <div className="space-y-3 text-brand-200 text-sm">
                <p>(720) 555-0304</p>
                <p>kawasaki@gmail.com</p>
                <div>
                  <p>5574 68th St, San Francisco,</p>
                  <p>California CA-94103</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
              <div className="space-y-3">
                <Input 
                  placeholder="Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input 
                  placeholder="E-mail" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-brand-600 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-brand-200 text-sm">
              Copyright 2023 | Kawasaki Search. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
