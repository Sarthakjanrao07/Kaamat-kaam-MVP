import { Search, User, Calendar, MessageCircle, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Conversation() {
  const feedPosts = [
    {
      id: 1,
      user: { name: "John Doe", avatar: "", initials: "JD" },
      timestamp: "2 hours ago",
      content: "Hey there! Are you still attending tonight? I needed something for tomorrow.",
      isOnline: true,
    },
    {
      id: 2,
      user: { name: "Sarah Wilson", avatar: "", initials: "SW" },
      timestamp: "4 hours ago",
      content: "Thanks for the information. I'll be there.",
      isOnline: false,
    },
    {
      id: 3,
      user: { name: "Mike Johnson", avatar: "", initials: "MJ" },
      timestamp: "1 day ago",
      content: "Can I have the transaction data here?",
      isOnline: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-gray-100">
      
      {/* Navbar */}
      <header className="bg-black/30 backdrop-blur-lg border-b border-white/10 px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between container mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
            <div className="w-7 h-7 bg-gradient-to-r from-purple-500 to-cyan-400 rounded flex items-center justify-center">
              <Search className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Kawasaki Search
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-yellow-300">Search</a>
            <a href="#" className="hover:text-yellow-300">Take portal</a>
            <a href="#" className="hover:text-yellow-300">Support</a>
            <a href="#" className="hover:text-yellow-300">Sign in</a>
            <Button className="bg-gradient-to-r from-purple-500 to-cyan-400 hover:from-purple-600 hover:to-cyan-500 text-white px-4 py-1.5 rounded-lg shadow-md transition">
              Register
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 flex justify-center">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-md w-full max-w-xl">
                <Input
                placeholder="Search User"
                className="pl-4 pr-24 py-3 bg-transparent text-gray-100 placeholder-gray-400 border-none focus:ring-0 rounded-xl w-full"
                />
                <Button className="absolute right-0 top-0 h-full px-6 bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 text-white rounded-r-xl rounded-l-none">
                Search
                </Button>
            </div>
        </div>
      </header>

      {/* Feed Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Posts */}
        <div className="lg:col-span-2 space-y-4">
          {feedPosts.map((post) => (
            <Card key={post.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-md hover:shadow-xl hover:scale-[1.01] transition transform">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={post.user.avatar} />
                      <AvatarFallback className="bg-purple-500 text-white">{post.user.initials}</AvatarFallback>
                    </Avatar>
                    {post.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{post.user.name}</h3>
                      <span className="text-sm text-gray-400">{post.timestamp}</span>
                    </div>
                    <p className="text-gray-300 mb-3">{post.content}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <button className="flex items-center gap-1 hover:text-cyan-400">
                        <MessageCircle className="w-4 h-4" />
                        <span>Reply</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-yellow-400">
                        <Star className="w-4 h-4" />
                        <span>Star</span>
                      </button>
                      <button className="hover:text-gray-200">
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-white/10 backdrop-blur-lg rounded-xl p-5 shadow-md">
            <div className="text-center mb-6">
              <h3 className="font-semibold text-white mb-2">Thursday, 31 July</h3>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>3:20 PM</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-purple-500 text-white">AA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">Alexander Andersen</p>
                  <p className="text-xs text-gray-400">alexander@gmail.com</p>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 text-white mt-4">
              Start Conversation
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
