
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Home,
  Activity,
  Server,
  Settings,
  ChevronLeft,
  ChevronRight,
  Shield,
  User,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PROTOCOLS } from "@/data/mockData";
import { Protocol } from "@/types";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-vpn-deep-blue border-r border-vpn-purple/20 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="flex items-center">
            <Shield className="h-6 w-6 text-vpn-cyan mr-2 animate-pulse-glow" />
            <span className="font-bold text-xl bg-gradient-to-r from-vpn-cyan to-vpn-indigo bg-clip-text text-transparent">
              NexusVPN
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto text-muted-foreground hover:text-white"
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      <div className="flex flex-col flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        <TooltipProvider>
          <SidebarItem
            icon={<Home className="h-5 w-5" />}
            label="Dashboard"
            href="/"
            collapsed={collapsed}
            active
          />
          <SidebarItem
            icon={<Activity className="h-5 w-5" />}
            label="Bandwidth"
            href="/bandwidth"
            collapsed={collapsed}
          />
          <SidebarItem
            icon={<Server className="h-5 w-5" />}
            label="Servers"
            href="/servers"
            collapsed={collapsed}
          />

          <div className="pt-2">
            <div
              className={cn(
                "text-xs uppercase text-muted-foreground mb-2",
                collapsed && "sr-only"
              )}
            >
              Protocols
            </div>
            {PROTOCOLS.map((protocol) => (
              <ProtocolItem
                key={protocol}
                protocol={protocol}
                collapsed={collapsed}
              />
            ))}
          </div>

          <div className="pt-2">
            <div
              className={cn(
                "text-xs uppercase text-muted-foreground mb-2",
                collapsed && "sr-only"
              )}
            >
              Account
            </div>
            <SidebarItem
              icon={<User className="h-5 w-5" />}
              label="Profile"
              href="/profile"
              collapsed={collapsed}
            />
            <SidebarItem
              icon={<Settings className="h-5 w-5" />}
              label="Settings"
              href="/settings"
              collapsed={collapsed}
            />
          </div>
        </TooltipProvider>
      </div>

      <div className="p-3 border-t border-vpn-purple/20">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start border-vpn-purple/20 text-muted-foreground hover:text-white bg-transparent",
                  collapsed && "justify-center px-0"
                )}
              >
                <LogOut className="h-5 w-5" />
                {!collapsed && <span className="ml-2">Logout</span>}
              </Button>
            </TooltipTrigger>
            {collapsed && <TooltipContent side="right">Logout</TooltipContent>}
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  collapsed: boolean;
  active?: boolean;
}

function SidebarItem({ icon, label, href, collapsed, active }: SidebarItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className={cn(
            "flex items-center px-3 py-2 rounded-md transition-colors",
            active
              ? "bg-vpn-purple/20 text-white"
              : "text-muted-foreground hover:text-white hover:bg-muted/20",
            collapsed && "justify-center px-0"
          )}
        >
          {icon}
          {!collapsed && <span className="ml-2">{label}</span>}
        </a>
      </TooltipTrigger>
      {collapsed && <TooltipContent side="right">{label}</TooltipContent>}
    </Tooltip>
  );
}

interface ProtocolItemProps {
  protocol: Protocol;
  collapsed: boolean;
}

function ProtocolItem({ protocol, collapsed }: ProtocolItemProps) {
  // Simplified protocol display name
  const shortName = protocol.split(' ')[0];
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={`/protocols/${protocol.toLowerCase().replace(' ', '-')}`}
          className={cn(
            "flex items-center px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-muted/20 transition-colors",
            collapsed && "justify-center px-0"
          )}
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-vpn-cyan to-vpn-indigo flex items-center justify-center text-xs font-bold">
            {shortName.charAt(0)}
          </div>
          {!collapsed && <span className="ml-2">{protocol}</span>}
        </a>
      </TooltipTrigger>
      {collapsed && <TooltipContent side="right">{protocol}</TooltipContent>}
    </Tooltip>
  );
}
