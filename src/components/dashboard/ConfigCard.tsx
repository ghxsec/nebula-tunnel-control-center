
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Configuration } from "@/types";
import { Clock, Copy, Download, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ConfigCardProps {
  config: Configuration;
  onDelete: (id: string) => void;
}

export function ConfigCard({ config, onDelete }: ConfigCardProps) {
  const handleCopy = () => {
    // In a real app, this would copy the actual config to clipboard
    toast.success(`Configuration copied to clipboard: ${config.name}`);
  };

  const handleDownload = () => {
    // In a real app, this would download the config file
    toast.success(`Configuration downloaded: ${config.name}`);
  };

  return (
    <Card className={cn(
      "bg-gradient-card glass-effect border-2 border-muted/30 transition-all duration-300 hover:border-vpn-cyan/30",
      "flex flex-col h-full",
    )}>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span>{config.name}</span>
          <span className="text-xs py-1 px-3 rounded-full bg-muted/30 text-muted-foreground">
            {config.protocol}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-1">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Server:</span>
            <span>{config.server}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Port:</span>
            <span>{config.port}</span>
          </div>
          {config.username && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Username:</span>
              <span>{config.username}</span>
            </div>
          )}
          {config.lastUsed && (
            <div className="flex items-center text-xs text-muted-foreground mt-4">
              <Clock className="h-3 w-3 mr-1" />
              <span>Last used: {config.lastUsed}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button
          variant="outline"
          size="sm"
          className="text-rose-500 hover:text-rose-400 border-rose-500/20"
          onClick={() => onDelete(config.id)}
        >
          <Trash className="h-4 w-4 mr-1" />
          Delete
        </Button>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="text-vpn-cyan border-vpn-cyan/20 hover:text-white hover:bg-vpn-cyan/20"
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-vpn-cyan to-vpn-indigo hover:opacity-90"
            onClick={handleDownload}
          >
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
