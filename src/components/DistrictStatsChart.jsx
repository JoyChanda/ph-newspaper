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
    <div className="h-[300px] w-full bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">সংবাদ পরিসংখ্যান</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke={gridColor} />
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={80} 
            tick={{ fontSize: 12, fill: textColor }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: isDark ? '#334155' : '#f3f4f6' }}
            contentStyle={{ 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              backgroundColor: tooltipBg,
              color: tooltipText
            }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
