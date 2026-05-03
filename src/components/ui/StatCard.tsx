import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
}

export default function StatCard({ title, value, change, changeType = "neutral", icon }: StatCardProps) {
  return (
    <div className="card p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-500">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-neutral-900">{value}</p>
          {change && (
            <p className={cn(
              "mt-1 text-sm font-medium",
              changeType === "positive" && "text-brand-600",
              changeType === "negative" && "text-red-600",
              changeType === "neutral" && "text-neutral-500"
            )}>
              {change}
            </p>
          )}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          {icon}
        </div>
      </div>
    </div>
  );
}
