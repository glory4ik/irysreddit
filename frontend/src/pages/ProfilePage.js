import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { 
  Wallet, 
  Edit3, 
  Copy, 
  ExternalLink,
  MessageSquare,
  TrendingUp,
  Calendar,
  Settings
} from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const StatCard = ({ icon: Icon, label, value, color = "gray" }) => (
    <Card className="bg-white border border-gray-200">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-${color}-100`}>
            <Icon className={`h-5 w-5 text-${color}-600`} />
          </div>
          <div>
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-lg font-semibold text-gray-900">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarFallback className="bg-gradient-to-br from-[#bac5ff] to-[#8a92c1] text-white text-2xl">
                      W
                    </AvatarFallback>
                  </Avatar>
                  
                  {isEditing ? (
                    <div className="w-full space-y-3">
                      <div>
                        <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                        <Input
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter username"
                          className="mt-1"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          onClick={handleSaveProfile}
                          className="bg-[#51fed6] hover:bg-[#34c9a7] text-gray-900"
                        >
                          Save
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => setIsEditing(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <h2 className="text-xl font-semibold text-gray-900">
                          {username || "Anonymous User"}
                        </h2>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsEditing(true)}
                          className="h-8 w-8 p-0 hover:bg-gray-100"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      </div>
                      <Badge variant="secondary" className="bg-[#bac5ff]/20 text-[#8a92c1]">
                        Member since today
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Wallet Info */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Wallet className="h-5 w-5 text-[#51fed6]" />
                  <span>Wallet Info</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Wallet Address</Label>
                  <div className="flex items-center space-x-2 mt-1 p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600 font-mono flex-1">
                      0x...connected
                    </span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-gray-700">Irys Balance</Label>
                  <div className="mt-1 p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">-- IRYS</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                icon={MessageSquare}
                label="Posts"
                value="0"
                color="blue"
              />
              <StatCard
                icon={TrendingUp}
                label="Karma"
                value="0"
                color="green"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="posts" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="posts" className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Posts</span>
                </TabsTrigger>
                <TabsTrigger value="activity" className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Activity</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-6">
                <Card className="border-dashed border-2 border-gray-300 bg-white/50">
                  <CardContent className="flex flex-col items-center justify-center py-12 px-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bac5ff] to-[#8a92c1] flex items-center justify-center mb-4">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
                    <p className="text-gray-600 mb-4">
                      Start sharing your thoughts with the community.
                    </p>
                    <Button className="bg-[#51fed6] hover:bg-[#34c9a7] text-gray-900">
                      Create Your First Post
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card className="bg-white border border-gray-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>Recent Activity</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="h-6 w-6 text-gray-400" />
                      </div>
                      <p className="text-gray-600">No activity to show</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="bg-white border border-gray-200">
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="display-name">Display Name</Label>
                      <Input id="display-name" placeholder="How others see you" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Input id="bio" placeholder="Tell us about yourself" className="mt-1" />
                    </div>
                    <Separator />
                    <div className="pt-4">
                      <Button className="bg-[#51fed6] hover:bg-[#34c9a7] text-gray-900">
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;