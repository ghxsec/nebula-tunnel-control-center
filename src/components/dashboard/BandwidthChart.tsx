
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BandwidthData } from '@/types';

interface BandwidthChartProps {
  data: BandwidthData[];
  title?: string;
  description?: string;
}

export function BandwidthChart({ data, title = 'Bandwidth Usage', description }: BandwidthChartProps) {
  return (
    <Card className="bg-gradient-card glass-effect border-2 border-muted/30 transition-all duration-300 hover:border-vpn-cyan/30">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="downloadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F5FF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#00F5FF" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="uploadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7B4DFF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#7B4DFF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="timestamp" 
                stroke="#888888" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#888888" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value} MB`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
                labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                itemStyle={{ padding: '4px 0' }}
                formatter={(value) => [`${value} MB`]}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="download" 
                stroke="#00F5FF" 
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#downloadGradient)" 
                name="Download"
              />
              <Area 
                type="monotone" 
                dataKey="upload" 
                stroke="#7B4DFF" 
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#uploadGradient)" 
                name="Upload"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
