
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function Profile() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
          <p className="text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your personal information</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <div className="h-full w-full bg-fitness-primary flex items-center justify-center text-white text-xl font-bold">
                JD
              </div>
            </Avatar>
            <div className="text-center space-y-1">
              <h3 className="text-lg font-medium">John Doe</h3>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              <p className="text-sm text-muted-foreground">Member since April 2025</p>
            </div>
            <Button className="mt-4 w-full" variant="outline">
              Change Avatar
            </Button>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="goals">Fitness Goals</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>
            
            {/* Personal Info Tab */}
            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" defaultValue="Doe" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" defaultValue="1990-06-15" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <select id="gender" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="non-binary">Non-binary</option>
                          <option value="prefer-not">Prefer not to say</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input id="height" type="number" defaultValue="183" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="btn-primary">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Fitness Goals Tab */}
            <TabsContent value="goals" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Your Fitness Goals</CardTitle>
                  <CardDescription>
                    Define what you want to achieve
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primary-goal">Primary Goal</Label>
                    <select id="primary-goal" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>Weight Loss</option>
                      <option>Muscle Gain</option>
                      <option>Endurance</option>
                      <option>General Fitness</option>
                      <option>Strength</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="target-weight">Target Weight (kg)</Label>
                    <Input id="target-weight" type="number" defaultValue="70" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="weekly-workouts">Weekly Workout Goal</Label>
                    <select id="weekly-workouts" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>3 times per week</option>
                      <option>4 times per week</option>
                      <option>5 times per week</option>
                      <option>6 times per week</option>
                      <option>Everyday</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Goal Timeframe</Label>
                    <select id="timeframe" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>1 Month</option>
                      <option>3 Months</option>
                      <option>6 Months</option>
                      <option>1 Year</option>
                      <option>Long-term</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <textarea 
                      id="notes"
                      className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 resize-none"
                      placeholder="Any specific details about your fitness goals..."
                    ></textarea>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="btn-primary">Save Goals</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Progress Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Reminders to log your weight and measurements
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Workout Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications for scheduled workouts
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Goal Achievement</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications when you reach fitness milestones
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Newsletter</Label>
                          <p className="text-sm text-muted-foreground">
                            Tips, articles and fitness advice
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Daily Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications to remind you about your daily tasks
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base">Progress Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Weekly summaries of your fitness progress
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="btn-primary">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Privacy Tab */}
            <TabsContent value="privacy" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Manage your data and privacy preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Profile Visibility</Label>
                        <p className="text-sm text-muted-foreground">
                          Make your profile visible to other users
                        </p>
                      </div>
                      <Switch />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Share Progress Photos</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow your progress photos to be featured (anonymously)
                        </p>
                      </div>
                      <Switch />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-base">Data for Research</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow anonymous data to be used for fitness research
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">Change Password</Button>
                    <Button variant="outline" className="w-full text-destructive hover:text-destructive">
                      Export My Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
