
export type Protocol = 
  | 'SSH Tunnel' 
  | 'V2RAY VMess' 
  | 'Shadowsocks' 
  | 'Xray Vless' 
  | 'Trojan-Go' 
  | 'Wireguard';

export interface ServerStatus {
  id: string;
  name: string;
  protocol: Protocol;
  status: 'online' | 'offline' | 'warning';
  uptime: string;
  location: string;
  load: number;
}

export interface BandwidthData {
  timestamp: string;
  download: number;
  upload: number;
}

export interface Configuration {
  id: string;
  name: string;
  protocol: Protocol;
  server: string;
  port: number;
  username?: string;
  password?: string;
  key?: string;
  config?: string;
  created: string;
  lastUsed?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
}
