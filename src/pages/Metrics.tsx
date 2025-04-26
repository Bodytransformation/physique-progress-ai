
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { mockNutritionData } from "@/lib/mock-data";

export default function Metrics() {
  const { theme } = useTheme();
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add weight tracking logic here
    console.log("Logging weight:", weight, "kg, body fat:", bodyFat, "%, date:", selectedDate);
    // Reset form
    setWeight("");
    setBodyFat("");
    setSelectedDate(new Date().toISOString().split('T')[0]);
  };
  
  // Nutrition data
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#6366F1'];
  
  // Body composition data
  const bodyComposition = [
    { name: 'Fat Mass', value: 15 },
    { name: 'Muscle Mass', value: 45 },
    { name: 'Bone Mass', value: 10 },
    { name: 'Water', value: 30 },
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Metrics & Measurements</h1>
          <p className="text-muted-foreground">
            Track and log your body metrics
          </p>
        </div>
      </div>

      <Tabs defaultValue="log" className="space-y-4">
        <TabsList>
          <TabsTrigger value="log">Log Metrics</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          <TabsTrigger value="body">Body Composition</TabsTrigger>
          <TabsTrigger value="measurements">Measurements</TabsTrigger>
        </TabsList>
        
        {/* Log Weight Tab */}
        <TabsContent value="log" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Log Your Weight</CardTitle>
              <CardDescription>
                Track your progress by regularly logging your weight and body fat percentage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input 
                      id="weight" 
                      type="number" 
                      step="0.1" 
                      placeholder="75.5" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="body-fat">Body Fat % (optional)</Label>
                    <Input 
                      id="body-fat" 
                      type="number" 
                      step="0.1" 
                      placeholder="18.0" 
                      value={bodyFat}
                      onChange={(e) => setBodyFat(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                </div>
                <Button type="submit" className="btn-primary">
                  Save Metrics
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Nutrition Tab */}
        <TabsContent value="nutrition" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Macronutrient Breakdown</CardTitle>
                <CardDescription>
                  Your daily macronutrient consumption
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={mockNutritionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {mockNutritionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}g`, ""]}
                        contentStyle={{
                          backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                          color: theme === "dark" ? "#ffffff" : "#000000",
                          border: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.1)",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1,850</div>
                    <div className="text-sm text-muted-foreground">Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">145g</div>
                    <div className="text-sm text-muted-foreground">Protein</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">2.5L</div>
                    <div className="text-sm text-muted-foreground">Water</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Calorie Tracking</CardTitle>
                <CardDescription>
                  Monitor your calorie intake vs. your goal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Daily Goal</span>
                    <span className="text-sm text-muted-foreground">2,200 kcal</span>
                  </div>
                  <div className="h-2 bg-muted rounded">
                    <div 
                      className="h-full bg-fitness-primary rounded" 
                      style={{ width: "84%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0</span>
                    <span>1,850 kcal consumed (84%)</span>
                    <span>2,200</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Today's Meals</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between items-center py-2 border-b">
                      <div>
                        <div className="font-medium">Breakfast</div>
                        <div className="text-sm text-muted-foreground">Oatmeal with fruits</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">420 kcal</div>
                        <div className="text-xs text-muted-foreground">P: 15g C: 65g F: 8g</div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b">
                      <div>
                        <div className="font-medium">Lunch</div>
                        <div className="text-sm text-muted-foreground">Chicken salad</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">580 kcal</div>
                        <div className="text-xs text-muted-foreground">P: 45g C: 30g F: 25g</div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b">
                      <div>
                        <div className="font-medium">Dinner</div>
                        <div className="text-sm text-muted-foreground">Salmon with vegetables</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">650 kcal</div>
                        <div className="text-xs text-muted-foreground">P: 42g C: 40g F: 32g</div>
                      </div>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <div>
                        <div className="font-medium">Snacks</div>
                        <div className="text-sm text-muted-foreground">Protein shake, almonds</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">200 kcal</div>
                        <div className="text-xs text-muted-foreground">P: 25g C: 8g F: 10g</div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full btn-primary">Log New Meal</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Body Composition Tab */}
        <TabsContent value="body" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Body Composition</CardTitle>
                <CardDescription>
                  Breakdown of your body composition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={bodyComposition}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {bodyComposition.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, ""]}
                        contentStyle={{
                          backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                          color: theme === "dark" ? "#ffffff" : "#000000",
                          border: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.1)",
                          borderRadius: "8px",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Body Metrics</CardTitle>
                <CardDescription>
                  Key body metrics and calculations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">BMI (Body Mass Index)</span>
                    <div>
                      <span className="font-bold">22.5</span>
                      <span className="text-sm text-muted-foreground ml-2">Normal</span>
                    </div>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Body Fat Percentage</span>
                    <div>
                      <span className="font-bold">18%</span>
                      <span className="text-sm text-muted-foreground ml-2">Fitness</span>
                    </div>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Fat Mass</span>
                    <span className="font-bold">13.5 kg</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Lean Body Mass</span>
                    <span className="font-bold">61.5 kg</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Basal Metabolic Rate</span>
                    <div>
                      <span className="font-bold">1,650</span>
                      <span className="text-sm text-muted-foreground ml-1">kcal/day</span>
                    </div>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="font-medium">Total Daily Energy Expenditure</span>
                    <div>
                      <span className="font-bold">2,200</span>
                      <span className="text-sm text-muted-foreground ml-1">kcal/day</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Measurements Tab */}
        <TabsContent value="measurements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Body Measurements</CardTitle>
              <CardDescription>
                Track your body measurements over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="chest">Chest (cm)</Label>
                      <Input id="chest" type="number" placeholder="95.0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="waist">Waist (cm)</Label>
                      <Input id="waist" type="number" placeholder="80.0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hips">Hips (cm)</Label>
                      <Input id="hips" type="number" placeholder="90.0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="leftArm">Left Arm (cm)</Label>
                      <Input id="leftArm" type="number" placeholder="35.0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rightArm">Right Arm (cm)</Label>
                      <Input id="rightArm" type="number" placeholder="35.0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="leftThigh">Left Thigh (cm)</Label>
                      <Input id="leftThigh" type="number" placeholder="55.0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rightThigh">Right Thigh (cm)</Label>
                      <Input id="rightThigh" type="number" placeholder="55.0" />
                    </div>
                  </div>
                  <Button type="submit" className="btn-primary">Save Measurements</Button>
                </form>
                
                <div className="border-t pt-4 mt-6">
                  <h3 className="text-lg font-medium mb-4">Measurement History</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-2">Date</th>
                          <th className="text-center py-2 px-2">Chest</th>
                          <th className="text-center py-2 px-2">Waist</th>
                          <th className="text-center py-2 px-2">Hips</th>
                          <th className="text-center py-2 px-2">L Arm</th>
                          <th className="text-center py-2 px-2">R Arm</th>
                          <th className="text-center py-2 px-2">L Thigh</th>
                          <th className="text-center py-2 px-2">R Thigh</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-2">Apr 25, 2025</td>
                          <td className="text-center py-2 px-2">95.0</td>
                          <td className="text-center py-2 px-2">80.0</td>
                          <td className="text-center py-2 px-2">90.0</td>
                          <td className="text-center py-2 px-2">35.0</td>
                          <td className="text-center py-2 px-2">35.5</td>
                          <td className="text-center py-2 px-2">55.0</td>
                          <td className="text-center py-2 px-2">54.5</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-2">Apr 18, 2025</td>
                          <td className="text-center py-2 px-2">95.5</td>
                          <td className="text-center py-2 px-2">81.0</td>
                          <td className="text-center py-2 px-2">90.5</td>
                          <td className="text-center py-2 px-2">34.5</td>
                          <td className="text-center py-2 px-2">34.5</td>
                          <td className="text-center py-2 px-2">54.5</td>
                          <td className="text-center py-2 px-2">54.0</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-2">Apr 11, 2025</td>
                          <td className="text-center py-2 px-2">96.0</td>
                          <td className="text-center py-2 px-2">82.0</td>
                          <td className="text-center py-2 px-2">91.0</td>
                          <td className="text-center py-2 px-2">34.0</td>
                          <td className="text-center py-2 px-2">34.0</td>
                          <td className="text-center py-2 px-2">54.0</td>
                          <td className="text-center py-2 px-2">53.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
