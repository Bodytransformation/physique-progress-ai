
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application preferences and settings
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="units">Units & Formats</TabsTrigger>
          <TabsTrigger value="data">Data Management</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>App Settings</CardTitle>
              <CardDescription>
                Configure general application settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Enable Dashboard Analytics</Label>
                    <p className="text-sm text-muted-foreground">
                      Show detailed analytics and trends on your dashboard
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Progress Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive reminders to log your progress
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Workout Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable workout tracking features
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Advanced Analytics</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable detailed data analysis and projections
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="btn-primary">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize how the application looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <select id="theme" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="system">System Default</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="accent-color">Accent Color</Label>
                  <select id="accent-color" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="blue">Blue (Default)</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="btn-primary">Apply</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Units & Formats Settings */}
        <TabsContent value="units" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Measurement Units</CardTitle>
              <CardDescription>
                Configure your preferred measurement units
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="weight-unit">Weight Unit</Label>
                  <select id="weight-unit" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="kg">Kilograms (kg)</option>
                    <option value="lb">Pounds (lb)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="height-unit">Height Unit</Label>
                  <select id="height-unit" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="cm">Centimeters (cm)</option>
                    <option value="ft-in">Feet & Inches (ft/in)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="distance-unit">Distance Unit</Label>
                  <select id="distance-unit" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="km">Kilometers (km)</option>
                    <option value="mi">Miles (mi)</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="btn-primary">Save Units</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Date & Time Format</CardTitle>
              <CardDescription>
                Configure your preferred date and time format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <select id="date-format" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="mm-dd-yyyy">MM/DD/YYYY</option>
                    <option value="dd-mm-yyyy">DD/MM/YYYY</option>
                    <option value="yyyy-mm-dd">YYYY/MM/DD</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time-format">Time Format</Label>
                  <select id="time-format" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="12h">12 Hour (AM/PM)</option>
                    <option value="24h">24 Hour</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <select id="timezone" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="auto">Auto-Detect (Device Timezone)</option>
                    <option value="utc">UTC (Coordinated Universal Time)</option>
                    <option value="est">Eastern Time (US & Canada)</option>
                    <option value="pst">Pacific Time (US & Canada)</option>
                    <option value="gmt">Greenwich Mean Time</option>
                    <option value="cet">Central European Time</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="btn-primary">Save Format</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Data Management */}
        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Backup</CardTitle>
              <CardDescription>
                Manage your data backups and exports
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Export Data</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Download all your data as a file
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline">Export as CSV</Button>
                    <Button variant="outline">Export as JSON</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium">Auto Backup</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Configure automatic data backups
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Enable Auto Backup</Label>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="backup-frequency">Backup Frequency</Label>
                  <select id="backup-frequency" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="btn-primary">Save Backup Settings</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Data Deletion</CardTitle>
              <CardDescription>
                Delete your data from the system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Clear History</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Selectively clear parts of your data
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline">Clear Weight History</Button>
                    <Button variant="outline">Clear Measurement History</Button>
                    <Button variant="outline">Clear Photos</Button>
                    <Button variant="outline">Clear Chat History</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium">Account Deletion</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Permanently delete your account and all associated data
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Integrations */}
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connected Services</CardTitle>
              <CardDescription>
                Manage your connected health and fitness services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                      G
                    </div>
                    <div>
                      <h3 className="font-medium">Google Fit</h3>
                      <p className="text-sm text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                      F
                    </div>
                    <div>
                      <h3 className="font-medium">Fitbit</h3>
                      <p className="text-sm text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-300 font-bold">
                      A
                    </div>
                    <div>
                      <h3 className="font-medium">Apple Health</h3>
                      <p className="text-sm text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">
                      S
                    </div>
                    <div>
                      <h3 className="font-medium">Strava</h3>
                      <p className="text-sm text-muted-foreground">
                        Not connected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>
                Manage API access for developers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Enable API Access</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow third-party applications to access your data
                    </p>
                  </div>
                  <Switch />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <div className="flex space-x-2">
                    <Input id="api-key" value="••••••••••••••••••••••" readOnly />
                    <Button variant="outline">Generate New Key</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Last generated: Never
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="btn-primary">Save API Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
