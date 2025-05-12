
import { ServerStatus, BandwidthData, Configuration, Protocol } from "@/types";

export const mockServers: ServerStatus[] = [
  {
    id: "server-1",
    name: "US East Server",
    protocol: "SSH Tunnel",
    status: "online",
    uptime: "99.9%",
    location: "New York",
    load: 45,
  },
  {
    id: "server-2",
    name: "EU West Server",
    protocol: "V2RAY VMess",
    status: "online",
    uptime: "99.7%",
    location: "Amsterdam",
    load: 32,
  },
  {
    id: "server-3",
    name: "Asia Pacific",
    protocol: "Shadowsocks",
    status: "warning",
    uptime: "98.2%",
    location: "Singapore",
    load: 78,
  },
  {
    id: "server-4",
    name: "US West Server",
    protocol: "Xray Vless",
    status: "offline",
    uptime: "0%",
    location: "Los Angeles",
    load: 0,
  },
  {
    id: "server-5",
    name: "EU East Server",
    protocol: "Trojan-Go",
    status: "online",
    uptime: "99.5%",
    location: "Frankfurt",
    load: 22,
  },
  {
    id: "server-6",
    name: "Australia Server",
    protocol: "Wireguard",
    status: "online",
    uptime: "99.8%",
    location: "Sydney",
    load: 15,
  },
];

export const mockBandwidthData: BandwidthData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  download: Math.floor(Math.random() * 100),
  upload: Math.floor(Math.random() * 50),
}));

export const mockConfigurations: Configuration[] = [
  {
    id: "config-1",
    name: "Work VPN",
    protocol: "SSH Tunnel",
    server: "us-east.vpn.com",
    port: 22,
    username: "user1",
    password: "********",
    created: "2023-05-10",
    lastUsed: "2023-05-12",
  },
  {
    id: "config-2",
    name: "Personal Browsing",
    protocol: "V2RAY VMess",
    server: "eu-west.vpn.com",
    port: 443,
    key: "vmess://eyJ2IjoiMiIsInBzIjoi8J+HqPCfh6YiLCJhZGQiOiIxLjEuMS4xIiwicG9ydCI6IjgwIiwiaWQiOiIxeHh4eHh4eC14eHh4LXh4eHgteHh4eC14eHh4eHh4eHh4eHgiLCJhaWQiOiIwIiwibmV0Ijoid3MiLCJ0eXBlIjoibm9uZSJ9",
    created: "2023-04-20",
    lastUsed: "2023-05-11",
  },
  {
    id: "config-3",
    name: "Media Streaming",
    protocol: "Shadowsocks",
    server: "ap.vpn.com",
    port: 8388,
    password: "********",
    created: "2023-03-15",
    lastUsed: "2023-05-09",
  },
  {
    id: "config-4",
    name: "Secure Connection",
    protocol: "Xray Vless",
    server: "us-west.vpn.com",
    port: 443,
    key: "vless://f80f2c5d-c2ed-4d27-9874-e4f8b3824cb5@example.com:443",
    created: "2023-05-01",
    lastUsed: "2023-05-10",
  },
  {
    id: "config-5",
    name: "Gaming VPN",
    protocol: "Trojan-Go",
    server: "eu-east.vpn.com",
    port: 443,
    password: "********",
    created: "2023-04-10",
    lastUsed: "2023-05-08",
  },
  {
    id: "config-6",
    name: "Mobile VPN",
    protocol: "Wireguard",
    server: "au.vpn.com",
    port: 51820,
    key: "[Interface]\nPrivateKey = ABCDEFG=\nAddress = 10.0.0.2/24\n[Peer]\nPublicKey = HIJKLMN=\nAllowedIPs = 0.0.0.0/0\nEndpoint = au.vpn.com:51820",
    created: "2023-02-20",
    lastUsed: "2023-05-07",
  },
];

export const PROTOCOLS: Protocol[] = [
  "SSH Tunnel", 
  "V2RAY VMess", 
  "Shadowsocks", 
  "Xray Vless", 
  "Trojan-Go", 
  "Wireguard"
];

export const currentUser = {
  id: "user-1",
  name: "Alex Johnson",
  email: "alex@example.com",
  role: "admin",
  avatar: "",
};

export const totalBandwidth = {
  dailyDownload: "1.2 GB",
  dailyUpload: "0.4 GB",
  monthlyDownload: "32.5 GB",
  monthlyUpload: "10.8 GB",
};
