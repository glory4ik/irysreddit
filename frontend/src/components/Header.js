import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Wallet, Plus, Home, User, TrendingUp, Clock } from "lucide-react";

const Header = ({ isWalletConnected, setIsWalletConnected }) => {
  const location = useLocation();
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    setIsCreatePostOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#51fed6] to-[#34c9a7] flex items-center justify-center">
              <div className="h-4 w-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">IrysBoard</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "secondary" : "ghost"} 
                size="sm" 
                className="flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Popular</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Recent</span>
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Create Post Button */}
            {isWalletConnected && (
              <Dialog open={isCreatePostOpen} onOpenChange={setIsCreatePostOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="sm" 
                    className="bg-[#51fed6] hover:bg-[#34c9a7] text-gray-900 transition-all duration-200"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Create New Post</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCreatePost} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter post title" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea 
                        id="content" 
                        placeholder="What's on your mind?" 
                        className="mt-1 min-h-[120px]" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="tags">Tags</Label>
                      <Input id="tags" placeholder="Add tags (comma separated)" className="mt-1" />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button type="button" variant="outline" onClick={() => setIsCreatePostOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-[#51fed6] hover:bg-[#34c9a7] text-gray-900">
                        Publish
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            )}

            {/* Wallet Connection */}
            {!isWalletConnected ? (
              <Button 
                onClick={handleConnectWallet}
                className="bg-[#51fed6] hover:bg-[#34c9a7] text-gray-900 transition-all duration-200 flex items-center space-x-2"
              >
                <Wallet className="h-4 w-4" />
                <span>Connect Wallet</span>
              </Button>
            ) : (
              <div className="flex items-center space-x-3">
                <Badge variant="secondary" className="bg-[#bac5ff] text-[#8a92c1] border-[#8a92c1]/20">
                  Wallet Connected
                </Badge>
                <Link to="/profile">
                  <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-[#51fed6] transition-all duration-200">
                    <AvatarFallback className="bg-gradient-to-br from-[#bac5ff] to-[#8a92c1] text-white text-sm">
                      W
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;