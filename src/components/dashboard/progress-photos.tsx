
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockProgressPhotos } from "@/lib/mock-data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export function ProgressPhotos() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const latestPhotos = mockProgressPhotos.slice(-5); // Get last 5 entries
  
  const handlePrevious = () => {
    setSelectedIndex((prev) => 
      prev === 0 ? latestPhotos.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setSelectedIndex((prev) => 
      prev === latestPhotos.length - 1 ? 0 : prev + 1
    );
  };
  
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Progress Photos</CardTitle>
        <CardDescription>Visual progress over time</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className="relative h-[300px] w-full overflow-hidden rounded-md">
          <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs z-10">
            {format(new Date(latestPhotos[selectedIndex].date), 'MMM dd, yyyy')}
          </div>
          
          {/* Photo display */}
          <div className="flex h-full">
            <div className="w-1/3 border-r border-muted">
              <div className="relative h-full">
                <img 
                  src={latestPhotos[selectedIndex].front} 
                  alt="Front view" 
                  className="object-cover h-full w-full"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  Front
                </div>
              </div>
            </div>
            <div className="w-1/3 border-r border-muted">
              <div className="relative h-full">
                <img 
                  src={latestPhotos[selectedIndex].side} 
                  alt="Side view" 
                  className="object-cover h-full w-full"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  Side
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="relative h-full">
                <img 
                  src={latestPhotos[selectedIndex].back} 
                  alt="Back view" 
                  className="object-cover h-full w-full"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  Back
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <Button 
            onClick={handlePrevious}
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-background/90 rounded-full h-8 w-8 p-0"
          >
            ←
          </Button>
          <Button 
            onClick={handleNext}
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-background/90 rounded-full h-8 w-8 p-0"
          >
            →
          </Button>
        </div>
        
        {/* Thumbnails */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {latestPhotos.map((photo, index) => (
            <div 
              key={photo.id}
              className={`flex-shrink-0 cursor-pointer w-16 h-16 overflow-hidden rounded-md border-2 ${
                index === selectedIndex ? "border-fitness-primary" : "border-transparent"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <img 
                src={photo.front} 
                alt={`Thumbnail ${format(new Date(photo.date), 'MMM dd')}`} 
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        
        <Button className="w-full mt-2 btn-primary">Upload New Photos</Button>
      </CardContent>
    </Card>
  );
}
