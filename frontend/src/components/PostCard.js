import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { ChevronUp, ChevronDown, MessageSquare, Share2, MoreHorizontal } from "lucide-react";

const PostCard = ({ isEmpty = false }) => {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);
  const [userVote, setUserVote] = useState(null); // null, 'up', 'down'

  const handleVote = (voteType) => {
    if (userVote === voteType) {
      // Remove vote
      if (voteType === 'up') {
        setUpvotes(prev => prev - 1);
      } else {
        setDownvotes(prev => prev - 1);
      }
      setUserVote(null);
    } else {
      // Change or add vote
      if (userVote === 'up') {
        setUpvotes(prev => prev - 1);
        setDownvotes(prev => prev + 1);
      } else if (userVote === 'down') {
        setDownvotes(prev => prev - 1);
        setUpvotes(prev => prev + 1);
      } else {
        if (voteType === 'up') {
          setUpvotes(prev => prev + 1);
        } else {
          setDownvotes(prev => prev + 1);
        }
      }
      setUserVote(voteType);
    }
  };

  if (isEmpty) {
    return (
      <Card className="bg-white border border-gray-200 hover:shadow-md transition-all duration-200">
        <CardContent className="p-6">
          <div className="flex space-x-4">
            {/* Voting Section */}
            <div className="flex flex-col items-center space-y-2 min-w-[60px]">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#bac5ff]/20 hover:text-[#8a92c1] transition-all duration-200"
                onClick={() => handleVote('up')}
              >
                <ChevronUp className={`h-5 w-5 ${userVote === 'up' ? 'text-[#bac5ff]' : 'text-gray-400'}`} />
              </Button>
              <span className="text-sm font-medium text-gray-600">{upvotes - downvotes}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-[#ffaf16]/20 hover:text-[#b37808] transition-all duration-200"
                onClick={() => handleVote('down')}
              >
                <ChevronDown className={`h-5 w-5 ${userVote === 'down' ? 'text-[#ffaf16]' : 'text-gray-400'}`} />
              </Button>
            </div>

            {/* Content Section */}
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="bg-gray-200 text-gray-500 text-xs">
                    ?
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span className="h-4 w-16 bg-gray-200 rounded animate-pulse"></span>
                  <span>•</span>
                  <span className="h-4 w-12 bg-gray-200 rounded animate-pulse"></span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse"></div>
                  <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse"></div>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-gray-100">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#8a92c1] transition-colors">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  <span className="text-sm">Comments</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#51fed6] transition-colors">
                  <Share2 className="h-4 w-4 mr-2" />
                  <span className="text-sm">Share</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 transition-colors ml-auto">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null; // For now, only return empty state cards
};

export default PostCard;