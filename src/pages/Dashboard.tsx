
import { ArrowDownIcon, ArrowUpIcon, BarChart3, CalendarDays, Ruler, Scale, Timer, User } from "lucide-react";
import { MetricCard } from "@/components/dashboard/metric-card";
import { WeightChart } from "@/components/dashboard/weight-chart";
import { BodyMeasurementsChart } from "@/components/dashboard/body-measurements-chart";
import { ProgressPhotos } from "@/components/dashboard/progress-photos";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Your fitness journey at a glance
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="hidden sm:flex">
            <CalendarDays className="mr-2 h-4 w-4" />
            Last Updated: Today
          </Button>
          <Button className="btn-primary">
            Log New Data
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Current Weight"
          value="75 kg"
          description="Last updated today"
          icon={<Scale className="h-4 w-4" />}
          trend={{ value: -2.3, isPositive: true }}
        />
        <MetricCard
          title="BMI"
          value="22.5"
          description="Healthy range"
          icon={<User className="h-4 w-4" />}
          trend={{ value: -0.5, isPositive: true }}
        />
        <MetricCard
          title="Body Fat %"
          value="18%"
          description="From last measurement"
          icon={<Ruler className="h-4 w-4" />}
          trend={{ value: -1.2, isPositive: true }}
        />
        <MetricCard
          title="Workout Streak"
          value="5 days"
          description="Keep it going!"
          icon={<Timer className="h-4 w-4" />}
        />
      </div>
      
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
        <WeightChart />
        <div className="grid gap-4 grid-cols-1 lg:col-span-2">
          <MetricCard
            title="Goal Progress"
            value="65%"
            description="Target: 70kg by June 30"
            icon={<BarChart3 className="h-4 w-4" />}
            className="h-[126px]"
          />
          <ProgressPhotos />
        </div>
      </div>
      
      <BodyMeasurementsChart />
    </div>
  );
}
