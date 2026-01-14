'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const COLORS = ['#dc2626', '#16a34a', '#2563eb', '#9333ea', '#ea580c', '#0891b2'];

export default function DistrictStatsChart({ data }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!data || data.length === 0) return null;

  // Determine colors based on theme, fallback to light values during SSR
  const isDark = mounted && theme === 'dark';
  const textColor = isDark ? '#e2e8f0' : '#4b5563';
  const gridColor = isDark ? '#334155' : '#e5e7eb';
  const tooltipBg = isDark ? '#1e293b' : '#ffffff';
  const tooltipText = isDark ? '#f8fafc' : '#1f2937';

  return (
    <div className="h-[450px] w-full bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 transition-all duration-300 flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">সংবাদ পরিসংখ্যান</h3>
      </div>
      
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            layout="vertical" 
            margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={gridColor} />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={100} 
              tick={{ fontSize: 13, fill: textColor, fontWeight: 500 }} 
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: isDark ? '#334155' : '#f3f4f6', opacity: 0.4 }}
              contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                backgroundColor: tooltipBg,
                color: tooltipText,
                padding: '12px'
              }}
            />
            <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
