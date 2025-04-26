
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useTheme } from "@/hooks/use-theme";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { mockMeasurementsData } from "@/lib/mock-data";

export function BodyMeasurementsChart() {
  const { theme } = useTheme();
  const [selectedMeasurement, setSelectedMeasurement] = useState("all");
  
  // Prepare data based on selection
  const chartData = mockMeasurementsData.map(item => {
    const { date, ...measurements } = item;
    // Filter measurements if a specific one is selected
    if (selectedMeasurement !== "all") {
      return { 
        date, 
        [selectedMeasurement]: measurements[selectedMeasurement as keyof typeof measurements] 
      };
    }
    return item;
  });
  
  // Define bar colors
  const barColors = {
    chest: "#3B82F6", // Primary blue
    waist: "#10B981", // Secondary green
    hips: "#F59E0B", // Amber
    leftArm: "#8B5CF6", // Purple
    rightArm: "#EC4899", // Pink
    leftThigh: "#6366F1", // Indigo
    rightThigh: "#14B8A6", // Teal
  };
  
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Body Measurements</CardTitle>
          <CardDescription>Track your body measurements progress</CardDescription>
        </div>
        <Select defaultValue="all" onValueChange={setSelectedMeasurement}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Measurement" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Measurements</SelectItem>
            <SelectItem value="chest">Chest</SelectItem>
            <SelectItem value="waist">Waist</SelectItem>
            <SelectItem value="hips">Hips</SelectItem>
            <SelectItem value="leftArm">Left Arm</SelectItem>
            <SelectItem value="rightArm">Right Arm</SelectItem>
            <SelectItem value="leftThigh">Left Thigh</SelectItem>
            <SelectItem value="rightThigh">Right Thigh</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="pt-4 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke={theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"} 
            />
            <XAxis 
              dataKey="date" 
              stroke={theme === "dark" ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                const date = new Date(value);
                return `${date.getMonth() + 1}/${date.getDate()}`;
              }}
            />
            <YAxis 
              stroke={theme === "dark" ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"} 
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
                color: theme === "dark" ? "#ffffff" : "#000000",
                border: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value: number) => [`${value} cm`, ""]}
              labelFormatter={(label) => {
                const date = new Date(label);
                return date.toLocaleDateString();
              }}
            />
            <Legend />
            {(selectedMeasurement === "all" || selectedMeasurement === "chest") && (
              <Bar dataKey="chest" name="Chest" fill={barColors.chest} radius={[4, 4, 0, 0]} />
            )}
            {(selectedMeasurement === "all" || selectedMeasurement === "waist") && (
              <Bar dataKey="waist" name="Waist" fill={barColors.waist} radius={[4, 4, 0, 0]} />
            )}
            {(selectedMeasurement === "all" || selectedMeasurement === "hips") && (
              <Bar dataKey="hips" name="Hips" fill={barColors.hips} radius={[4, 4, 0, 0]} />
            )}
            {(selectedMeasurement === "all" || selectedMeasurement === "leftArm") && (
              <Bar dataKey="leftArm" name="Left Arm" fill={barColors.leftArm} radius={[4, 4, 0, 0]} />
            )}
            {(selectedMeasurement === "all" || selectedMeasurement === "rightArm") && (
              <Bar dataKey="rightArm" name="Right Arm" fill={barColors.rightArm} radius={[4, 4, 0, 0]} />
            )}
            {(selectedMeasurement === "all" || selectedMeasurement === "leftThigh") && (
              <Bar dataKey="leftThigh" name="Left Thigh" fill={barColors.leftThigh} radius={[4, 4, 0, 0]} />
            )}
            {(selectedMeasurement === "all" || selectedMeasurement === "rightThigh") && (
              <Bar dataKey="rightThigh" name="Right Thigh" fill={barColors.rightThigh} radius={[4, 4, 0, 0]} />
            )}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
