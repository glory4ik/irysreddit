import React, { useState } from "react";
import PostCard from "../components/PostCard";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { TrendingUp, Clock, Star, MessageSquare, Wallet } from "lucide-react";

const HomePage = () => {
  const [sortBy, setSortBy] = useState("new");

  const SortButton = ({ value, icon: Icon, label, isActive }) => (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={() => setSortBy(value)}
      className={`flex items-center space-x-2 transition-all duration-200 ${
        isActive 
          ? "bg-[#51fed6] hover:bg-[#34c9a7] text-gray-900" 
          : "hover:bg-gray-50"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Controls */}
            <div className="flex items-center space-x-3 mb-6 p-4 bg-white rounded-lg border border-gray-200">
              <span className="text-sm font-medium text-gray-700">Sort by:</span>
              <div className="flex space-x-2">
                <SortButton 
                  value="new" 
                  icon={Clock} 
                  label="New" 
                  isActive={sortBy === "new"} 
                />
                <SortButton 
                  value="popular" 
                  icon={TrendingUp} 
                  label="Popular" 
                  isActive={sortBy === "popular"} 
                />
                <SortButton 
                  value="top" 
                  icon={Star} 
                  label="Top" 
                  isActive={sortBy === "top"} 
                />
              </div>
            </div>

            {/* Empty State */}
            <div className="space-y-8">
              <Card className="border-dashed border-2 border-gray-300 bg-white/50">
                <CardContent className="flex flex-col items-center justify-center py-16 px-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#bac5ff] to-[#8a92c1] flex items-center justify-center mb-4">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    Be the first to share something with the community. Connect your wallet and create a post to get started.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Wallet className="h-4 w-4" />
                    <span>Connect wallet to start posting</span>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Post Cards (UI Structure Only) */}
              <div className="space-y-4">
                <PostCard isEmpty={true} />
                <PostCard isEmpty={true} />
                <PostCard isEmpty={true} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-[#51fed6]/10 hover:border-[#51fed6]"
                  >
                    <Wallet className="h-4 w-4 mr-2" />
                    Connect Wallet
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start hover:bg-[#bac5ff]/10 hover:border-[#8a92c1]"
                    disabled
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Create Post
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Platform Stats */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Platform Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Posts</span>
                    <Badge variant="secondary" className="bg-[#bac5ff]/20 text-[#8a92c1]">0</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Active Users</span>
                    <Badge variant="secondary" className="bg-[#51fed6]/20 text-[#34c9a7]">0</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Stored</span>
                    <Badge variant="secondary" className="bg-[#ffaf16]/20 text-[#b37808]">0 MB</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card className="bg-gradient-to-br from-[#51fed6]/5 to-[#34c9a7]/5 border border-[#51fed6]/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">About IrysBoard</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A decentralized social platform built on Irys, ensuring your data is permanent and censorship-resistant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;