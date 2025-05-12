
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PROTOCOLS } from "@/data/mockData";
import { Protocol } from "@/types";
import { toast } from "sonner";

interface AddConfigModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddConfig: (config: any) => void;
}

export function AddConfigModal({ open, onOpenChange, onAddConfig }: AddConfigModalProps) {
  const [protocol, setProtocol] = useState<Protocol>("SSH Tunnel");
  const [name, setName] = useState("");
  const [server, setServer] = useState("");
  const [port, setPort] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !server || !port) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    const newConfig = {
      id: `config-${Date.now()}`,
      name,
      protocol,
      server,
      port: parseInt(port, 10),
      created: new Date().toISOString().slice(0, 10),
    };
    
    onAddConfig(newConfig);
    onOpenChange(false);
    resetForm();
    
    toast.success(`New ${protocol} configuration created`);
  };

  const resetForm = () => {
    setProtocol("SSH Tunnel");
    setName("");
    setServer("");
    setPort("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-vpn-dark-blue border-vpn-purple/20">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-glow text-vpn-cyan">Create New Configuration</DialogTitle>
            <DialogDescription>
              Create a new VPN or tunneling configuration.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="protocol" className="text-right">
                Protocol
              </Label>
              <Select
                value={protocol}
                onValueChange={(value) => setProtocol(value as Protocol)}
              >
                <SelectTrigger className="col-span-3 bg-muted/20 border-vpn-purple/20 focus:ring-vpn-cyan">
                  <SelectValue placeholder="Select protocol" />
                </SelectTrigger>
                <SelectContent className="bg-vpn-dark-blue border-vpn-purple/20">
                  {PROTOCOLS.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3 bg-muted/20 border-vpn-purple/20 focus-visible:ring-vpn-cyan"
                placeholder="My VPN Connection"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="server" className="text-right">
                Server
              </Label>
              <Input
                id="server"
                value={server}
                onChange={(e) => setServer(e.target.value)}
                className="col-span-3 bg-muted/20 border-vpn-purple/20 focus-visible:ring-vpn-cyan"
                placeholder="vpn.example.com"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="port" className="text-right">
                Port
              </Label>
              <Input
                id="port"
                value={port}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^\d+$/.test(value)) {
                    setPort(value);
                  }
                }}
                className="col-span-3 bg-muted/20 border-vpn-purple/20 focus-visible:ring-vpn-cyan"
                placeholder="443"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-vpn-purple/20"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-vpn-cyan to-vpn-indigo hover:opacity-90"
            >
              Create Configuration
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
