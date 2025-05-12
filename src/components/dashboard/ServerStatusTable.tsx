
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ServerStatus } from "@/types";
import { cn } from "@/lib/utils";

interface ServerStatusTableProps {
  servers: ServerStatus[];
}

export function ServerStatusTable({ servers }: ServerStatusTableProps) {
  return (
    <Table className="border-2 border-muted/30 rounded-lg overflow-hidden">
      <TableHeader>
        <TableRow className="bg-muted/10">
          <TableHead className="text-muted-foreground">Server</TableHead>
          <TableHead className="text-muted-foreground">Protocol</TableHead>
          <TableHead className="text-muted-foreground">Status</TableHead>
          <TableHead className="text-muted-foreground">Uptime</TableHead>
          <TableHead className="text-muted-foreground">Location</TableHead>
          <TableHead className="text-muted-foreground">Load</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {servers.map((server) => (
          <TableRow key={server.id} className="border-b border-muted/10 hover:bg-muted/10">
            <TableCell className="font-medium">{server.name}</TableCell>
            <TableCell>{server.protocol}</TableCell>
            <TableCell>
              <div className="flex items-center">
                <div
                  className={cn(
                    "h-2 w-2 rounded-full mr-2",
                    server.status === "online" && "bg-emerald-500",
                    server.status === "offline" && "bg-rose-500",
                    server.status === "warning" && "bg-amber-500"
                  )}
                />
                <span
                  className={cn(
                    server.status === "online" && "text-emerald-500",
                    server.status === "offline" && "text-rose-500",
                    server.status === "warning" && "text-amber-500"
                  )}
                >
                  {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
                </span>
              </div>
            </TableCell>
            <TableCell>{server.uptime}</TableCell>
            <TableCell>{server.location}</TableCell>
            <TableCell>
              <div className="w-full bg-muted/30 rounded-full h-2">
                <div
                  className={cn(
                    "h-2 rounded-full",
                    server.load < 50 && "bg-emerald-500",
                    server.load >= 50 && server.load < 80 && "bg-amber-500",
                    server.load >= 80 && "bg-rose-500"
                  )}
                  style={{ width: `${server.status === "offline" ? 0 : server.load}%` }}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
