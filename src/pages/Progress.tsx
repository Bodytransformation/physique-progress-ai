
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { mockWeightData, mockProgressPhotos } from "@/lib/mock-data";
import { format } from "date-fns";
import { useState } from "react";
import { Calendar, CalendarCell, CalendarGrid, CalendarHeader, CalendarHeading, CalendarDays, CalendarDay } from "@/components/ui/calendar";

export default function Progress() {
  const [date, setDate] = useState<Date>(new Date());
  // Get recent progress data
  const recentPhotos = mockProgressPhotos.slice(-4); // Last 4 sets of photos
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Progress Tracker</h1>
          <p className="text-muted-foreground">
            View your transformation journey
          </p>
        </div>
        <Button className="btn-primary">Add New Progress Photo</Button>
      </div>

      {/* Calendar and Activity History */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Progress Calendar</CardTitle>
            <CardDescription>Your activity and tracking history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                className="rounded-md"
              />
            </div>
            <div className="mt-4 space-y-1">
              <div className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-full bg-fitness-primary mr-2"></span>
                <span>Weight Logged</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-full bg-fitness-secondary mr-2"></span>
                <span>Workout Completed</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-full bg-fitness-accent mr-2"></span>
                <span>Photos Taken</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-full bg-muted-foreground mr-2"></span>
                <span>Measurements Updated</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Activity Timeline</CardTitle>
            <CardDescription>Recent progress updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mockWeightData.slice(-5).map((entry, index) => (
                <div key={index} className="relative pl-8">
                  <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-fitness-primary flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </span>
                  <div>
                    <h4 className="text-sm font-medium">
                      {format(new Date(entry.date), 'MMMM dd, yyyy')}
                    </h4>
                    <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                      <p>Weight logged: {entry.weight} kg</p>
                      {index % 2 === 0 && <p>Measurements updated</p>}
                      {index === 0 && <p>Progress photos added</p>}
                      {index === 2 && <p>Completed 5 workouts this week</p>}
                    </div>
                  </div>
                  {index < mockWeightData.slice(-5).length - 1 && (
                    <div className="absolute left-2 top-4 h-full w-[1px] bg-muted-foreground/30"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Before/After Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Transformation Progress</CardTitle>
          <CardDescription>Compare your progress over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First photo (oldest) */}
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Starting Point</h3>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(recentPhotos[0].date), 'MMMM dd, yyyy')}
                </p>
                <div className="grid grid-cols-3 gap-1 h-[300px]">
                  <div className="relative">
                    <img 
                      src={recentPhotos[0].front} 
                      alt="Before - Front" 
                      className="object-cover h-full w-full rounded-l-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Front
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={recentPhotos[0].side} 
                      alt="Before - Side" 
                      className="object-cover h-full w-full"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Side
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={recentPhotos[0].back} 
                      alt="Before - Back" 
                      className="object-cover h-full w-full rounded-r-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Back
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="font-medium">Weight:</span> 80 kg
                  </div>
                  <div>
                    <span className="font-medium">Body Fat:</span> 22%
                  </div>
                </div>
              </div>
              
              {/* Latest photo */}
              <div className="space-y-2">
                <h3 className="font-medium text-lg">Current</h3>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(recentPhotos[recentPhotos.length - 1].date), 'MMMM dd, yyyy')}
                </p>
                <div className="grid grid-cols-3 gap-1 h-[300px]">
                  <div className="relative">
                    <img 
                      src={recentPhotos[recentPhotos.length - 1].front} 
                      alt="After - Front" 
                      className="object-cover h-full w-full rounded-l-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Front
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={recentPhotos[recentPhotos.length - 1].side} 
                      alt="After - Side" 
                      className="object-cover h-full w-full"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Side
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={recentPhotos[recentPhotos.length - 1].back} 
                      alt="After - Back" 
                      className="object-cover h-full w-full rounded-r-lg"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      Back
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="font-medium">Weight:</span> 75 kg
                  </div>
                  <div>
                    <span className="font-medium">Body Fat:</span> 18%
                  </div>
                  <div className="text-fitness-secondary font-semibold">
                    <span>-5kg</span> <span className="ml-2">-4% BF</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Photo Timeline */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Progress Timeline</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {recentPhotos.map((photo, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(photo.date), 'MMM dd, yyyy')}
                    </div>
                    <img 
                      src={photo.front} 
                      alt={`Progress on ${format(new Date(photo.date), 'MMM dd')}`}
                      className="object-cover w-full h-40 rounded-md hover:opacity-90 transition-opacity cursor-pointer"
                    />
                    <div className="text-sm">
                      <span className="font-medium">Weight:</span> {mockWeightData.find(w => 
                        new Date(w.date).toDateString() === new Date(photo.date).toDateString()
                      )?.weight || "--"} kg
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
