import { Search, User, Calendar, MessageCircle, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/src/components/Navbar";

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
