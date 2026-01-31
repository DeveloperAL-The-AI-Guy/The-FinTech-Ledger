export interface MetricProps {
  label: string;
  value: string;
  subtext: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChartDataPoint {
  time: string;
  value: number;
  volume: number;
}