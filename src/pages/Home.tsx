
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home as HomeIcon, Map, Bell, User, Search, MessageCircle, Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  
  const events = [
    {
      id: 1,
      title: "Community Cleanup",
      location: "Greenfield Park",
      date: "Tomorrow, 10:00 AM",
      participants: 24,
      category: "Environment"
    },
    {
      id: 2,
      title: "Local Business Meetup",
      location: "Town Hall",
      date: "May 15, 6:00 PM",
      participants: 18,
      category: "Networking"
    },
    {
      id: 3,
      title: "Neighborhood Watch Meeting",
      location: "Community Center",
      date: "May 17, 7:30 PM",
      participants: 12,
      category: "Safety"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-3 shadow-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-teal-700">Yolo App</h1>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell className="h-5 w-5 text-gray-500" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 space-y-4">
        <div className="bg-teal-500 text-white rounded-lg p-4 shadow-md">
          <h2 className="font-bold text-lg">Welcome!</h2>
          <p className="text-sm opacity-90 mb-3">Explore what's happening in your community</p>
          <Button className="bg-white text-teal-700 hover:bg-gray-100">
            Discover Events
          </Button>
        </div>

        <div className="flex justify-between items-center my-4">
          <h2 className="font-bold text-lg">Upcoming Events</h2>
          <Button variant="ghost" className="text-teal-600 text-sm px-2 flex items-center">
            See All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="space-y-3">
          {events.map(event => (
            <Card key={event.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-medium px-2 py-1 bg-teal-50 text-teal-700 rounded-full">
                        {event.category}
                      </span>
                      <h3 className="font-bold mt-2">{event.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Map className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-full px-3 border-teal-500 text-teal-700">
                      Join
                    </Button>
                  </div>
                  <div className="mt-3 pt-3 border-t flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="bg-white border-t flex justify-around py-2">
        <button 
          className={`flex flex-col items-center p-2 ${activeTab === "home" ? "text-teal-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("home")}
        >
          <HomeIcon className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button 
          className={`flex flex-col items-center p-2 ${activeTab === "map" ? "text-teal-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("map")}
        >
          <Map className="h-5 w-5" />
          <span className="text-xs mt-1">Map</span>
        </button>
        <button 
          className={`flex flex-col items-center p-2 ${activeTab === "chat" ? "text-teal-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("chat")}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs mt-1">Chat</span>
        </button>
        <button 
          className={`flex flex-col items-center p-2 ${activeTab === "profile" ? "text-teal-600" : "text-gray-500"}`}
          onClick={() => setActiveTab("profile")}
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
