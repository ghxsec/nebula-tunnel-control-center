
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
  };
  className?: string;
}

export function StatusCard({ 
  title, 
  value, 
  icon, 
  description, 
  trend, 
  className 
}: StatusCardProps) {
  return (
    <Card className={cn(
      "bg-gradient-card glass-effect border-2 border-muted/30 transition-all duration-300 hover:border-vpn-cyan/30",
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-muted-foreground">{title}</CardTitle>
        <div className="w-8 h-8 text-vpn-cyan">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        {trend && (
          <div className="flex items-center mt-2">
            {trend.direction === 'up' && (
              <span className="text-emerald-500 text-xs">↑ {trend.value}</span>
            )}
            {trend.direction === 'down' && (
              <span className="text-rose-500 text-xs">↓ {trend.value}</span>
            )}
            {trend.direction === 'neutral' && (
              <span className="text-muted-foreground text-xs">→ {trend.value}</span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
