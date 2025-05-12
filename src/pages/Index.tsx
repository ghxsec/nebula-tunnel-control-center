
import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { StatusCard } from "@/components/dashboard/StatusCard";
import { BandwidthChart } from "@/components/dashboard/BandwidthChart";
import { ServerStatusTable } from "@/components/dashboard/ServerStatusTable";
import { ConfigCard } from "@/components/dashboard/ConfigCard";
import { AddConfigModal } from "@/components/dashboard/AddConfigModal";
import { 
  mockServers, 
  mockBandwidthData, 
  mockConfigurations, 
  totalBandwidth 
} from "@/data/mockData";
import { Configuration } from "@/types";
import { Activity, ArrowDown, ArrowUp, Clock, Server } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [configs, setConfigs] = useState<Configuration[]>(mockConfigurations);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddConfig = (newConfig: Configuration) => {
    setConfigs([newConfig, ...configs]);
  };

  const handleDeleteConfig = (id: string) => {
    setConfigs(configs.filter((config) => config.id !== id));
    toast.success("Configuration deleted successfully");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onCreateConfig={() => setIsAddModalOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your VPN and tunneling services
              </p>
            </div>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatusCard
                title="Daily Download"
                value={totalBandwidth.dailyDownload}
                icon={<ArrowDown className="h-5 w-5" />}
                trend={{ direction: "up", value: "5% from yesterday" }}
              />
              <StatusCard
                title="Daily Upload"
                value={totalBandwidth.dailyUpload}
                icon={<ArrowUp className="h-5 w-5" />}
                trend={{ direction: "down", value: "2% from yesterday" }}
              />
              <StatusCard
                title="Active Servers"
                value={`${mockServers.filter(s => s.status === "online").length}/${mockServers.length}`}
                icon={<Server className="h-5 w-5" />}
                description="All regions available"
              />
              <StatusCard
                title="Total Usage"
                value={totalBandwidth.monthlyDownload}
                icon={<Activity className="h-5 w-5" />}
                description="This month"
                trend={{ direction: "neutral", value: "40% of limit" }}
              />
            </div>
            
            {/* Bandwidth Chart */}
            <div>
              <BandwidthChart 
                data={mockBandwidthData} 
                title="Bandwidth Usage (Last 24 Hours)" 
                description="Real-time monitoring of network traffic"
              />
            </div>
            
            {/* Server Status */}
            <div>
              <h2 className="text-xl font-bold mb-4">Server Status</h2>
              <ServerStatusTable servers={mockServers} />
            </div>
            
            {/* Configurations */}
            <div>
              <h2 className="text-xl font-bold mb-4">Your Configurations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {configs.map((config) => (
                  <ConfigCard 
                    key={config.id} 
                    config={config} 
                    onDelete={handleDeleteConfig} 
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <AddConfigModal 
        open={isAddModalOpen} 
        onOpenChange={setIsAddModalOpen}
        onAddConfig={handleAddConfig}
      />
    </div>
  );
};

export default Index;
