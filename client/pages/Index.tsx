import { Search, ChevronRight, User, Mail, Phone, CheckCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-purple-600 text-white px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = "/"}>
            <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center">
              <Search className="w-3 h-3 text-purple-600" />
            </div>
            <span className="font-medium text-sm">Kawasaki-ikhim</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-purple-200">Search</a>
            <a href="#" className="hover:text-purple-200">Take parcel</a>
            <a href="#" className="hover:text-purple-200">Support</a>
            <a href="#" className="hover:text-purple-200">Sign in</a>
            <Button variant="outline" size="sm" className="text-black border-white hover:bg-white hover:text-purple-600">
              Register
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex justify-center py-8">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
          {/* Tabs */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-50 rounded-t-lg">
              <TabsTrigger 
                value="about" 
                className="data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-purple-600 data-[state=active]:text-purple-600"
              >
                About you
              </TabsTrigger>
              <TabsTrigger 
                value="account"
                className="data-[state=inactive]:text-gray-500"
              >
                Account
              </TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="p-6 space-y-6">
              {/* Profile Section */}
              <div className="flex items-center gap-4 pb-4 border-b">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-medium text-gray-900">Sarthak</h2>
                  <p className="text-sm text-gray-500">Hi everyone!</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Complete Profile Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">Complete your profile</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Get help from us all, encouraging members to trust with you.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">2 out of 8 complete</span>
                  </div>
                  <Progress value={25} className="h-2 bg-gray-200">
                    <div className="h-full bg-purple-600 rounded-full transition-all" style={{width: "25%"}} />
                  </Progress>
                  <div className="text-xs text-gray-500 mt-2">
                    Completed basic information
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
                  <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                  <span>We are verifying your profile picture</span>
                </div>

                <button className="text-sm text-purple-600 hover:underline">
                  Edit personal details
                </button>
              </div>

              {/* Verify Profile Section */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Verify your profile</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full border-2 border-purple-600 flex items-center justify-center">
                      <div className="w-1 h-1 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-purple-600">Verify your Govt. ID</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-600">Confirm email sarthakjsnrao@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-900">+91922046579</span>
                  </div>
                </div>
              </div>

              {/* About You Section */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">About you</h3>
                
                <div className="space-y-2">
                  <button className="flex items-center gap-2 text-sm text-purple-600 hover:underline">
                    <Plus className="w-4 h-4" />
                    <span>Add a mini bio</span>
                  </button>

                  <button className="flex items-center gap-2 text-sm text-purple-600 hover:underline">
                    <Plus className="w-4 h-4" />
                    <span>Chat travel preferences</span>
                  </button>
                </div>
              </div>

              {/* Vehicles Section */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Vehicles</h3>
                
                <button className="flex items-center gap-2 text-sm text-purple-600 hover:underline">
                  <Plus className="w-4 h-4" />
                  <span>Add vehicle</span>
                </button>
              </div>
            </TabsContent>

            <TabsContent value="account" className="p-6">
              <div className="text-center text-gray-500">
                Account settings will be displayed here
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
