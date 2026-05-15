"use client";

import React from "react";
import {
  AreaChart as RechartsArea,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { cn } from "@/lib/utils";

interface AreaChartProps {
  data: Record<string, string | number>[];
  series: { key: string; label: string; color: string }[];
  className?: string;
  showLegend?: boolean;
  showGrid?: boolean;
}

export function AreaChart({
  data,
  series,
  className,
  showLegend = true,
  showGrid = true,
}: AreaChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsArea data={data}>
          {showGrid && (
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100,116,139,0.15)" />
          )}
          <XAxis
            dataKey="month"
            tick={{ fill: "#64748b", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#64748b", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            contentStyle={{
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(59,130,246,0.3)",
              borderRadius: "8px",
              color: "#e2e8f0",
              fontSize: "12px",
            }}
            formatter={(value) => [`${value ?? ""}%`]}
          />
          {showLegend && (
            <Legend
              wrapperStyle={{ fontSize: "12px", color: "#64748b" }}
            />
          )}
          {series.map((s, i) => (
            <Area
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label}
              stroke={s.color}
              fill={`url(#gradient-${i})`}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          ))}
          <defs>
            {series.map((s, i) => (
              <linearGradient key={i} id={`gradient-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={s.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={s.color} stopOpacity={0.02} />
              </linearGradient>
            ))}
          </defs>
        </RechartsArea>
      </ResponsiveContainer>
    </div>
  );
}
