
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function MetricCard({ title, value, description, icon, trend, className }: MetricCardProps) {
  return (
    <Card className={cn("metric-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center mt-1">
            {trend && (
              <span
                className={`text-xs mr-1 ${
                  trend.isPositive ? "text-fitness-secondary" : "text-destructive"
                }`}
              >
                {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value).toFixed(1)}%
              </span>
            )}
            {description && <CardDescription className="text-xs">{description}</CardDescription>}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
