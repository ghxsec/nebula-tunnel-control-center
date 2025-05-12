
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Bell, 
  Plus, 
  Search 
} from "lucide-react";
import { currentUser } from "@/data/mockData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  onCreateConfig: () => void;
}

export function Header({ onCreateConfig }: HeaderProps) {
  const userInitials = currentUser.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="border-b border-vpn-purple/20 py-3 px-6 flex items-center justify-between bg-vpn-deep-blue/50 backdrop-blur-md">
      <div className="flex items-center w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-full pl-10 bg-muted/20 border-vpn-purple/20 placeholder:text-muted-foreground focus-visible:ring-vpn-cyan"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button
          onClick={onCreateConfig}
          className="bg-gradient-to-r from-vpn-cyan to-vpn-indigo hover:opacity-90"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Configuration
        </Button>

        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-vpn-cyan rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col">
                  <span className="font-medium">System Update Available</span>
                  <span className="text-muted-foreground text-sm">A new system update is available. Click to install.</span>
                  <span className="text-muted-foreground text-xs mt-1">2 hours ago</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex flex-col">
                  <span className="font-medium">Singapore Server Status</span>
                  <span className="text-muted-foreground text-sm">Singapore server is experiencing high load.</span>
                  <span className="text-muted-foreground text-xs mt-1">5 hours ago</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-vpn-indigo text-white">
                    {userInitials}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm hidden md:block">{currentUser.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-rose-500">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
