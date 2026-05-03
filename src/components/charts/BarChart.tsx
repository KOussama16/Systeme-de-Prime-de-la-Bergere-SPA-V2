"use client";

import { cn } from "@/lib/utils";

interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  maxValue?: number;
  height?: number;
}

export default function BarChart({ data, maxValue, height = 200 }: BarChartProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));

  return (
    <div className="flex items-end gap-2" style={{ height }}>
      {data.map((item, i) => {
        const barHeight = max > 0 ? (item.value / max) * 100 : 0;
        return (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className="relative w-full" style={{ height: "100%" }}>
              <div
                className={cn(
                  "absolute bottom-0 w-full rounded-t-md transition-all duration-500",
                  item.color || "bg-brand-500"
                )}
                style={{ height: `${barHeight}%` }}
              />
            </div>
            <span className="mt-1 text-xs text-neutral-500 truncate w-full text-center">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
