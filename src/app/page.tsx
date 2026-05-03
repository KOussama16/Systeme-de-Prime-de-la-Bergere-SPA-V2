"use client";

import AppShell from "@/components/layout/AppShell";
import StatCard from "@/components/ui/StatCard";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";
import { formatCurrency } from "@/lib/utils";

const monthlyData = [
  { label: "Jan", value: 285000, color: "bg-brand-500" },
  { label: "Fev", value: 292000, color: "bg-brand-500" },
  { label: "Mar", value: 288000, color: "bg-brand-500" },
  { label: "Avr", value: 310000, color: "bg-brand-600" },
  { label: "Mai", value: 305000, color: "bg-brand-500" },
  { label: "Jun", value: 298000, color: "bg-brand-500" },
];

const compensationBreakdown = [
  { label: "Salaire de base", value: 65, color: "#16a34a" },
  { label: "Primes", value: 20, color: "#22c55e" },
  { label: "Avantages", value: 10, color: "#86efac" },
  { label: "Bonus", value: 5, color: "#dcfce7" },
];

const recentActivities = [
  { id: "1", action: "Mise a jour salaire", employee: "Marie Dupont", date: "02 Mai 2026", amount: "3 200 EUR" },
  { id: "2", action: "Prime trimestrielle", employee: "Jean Martin", date: "01 Mai 2026", amount: "800 EUR" },
  { id: "3", action: "Promotion", employee: "Sophie Bernard", date: "28 Avr 2026", amount: "3 800 EUR" },
  { id: "4", action: "Nouvelle embauche", employee: "Pierre Leroy", date: "25 Avr 2026", amount: "2 900 EUR" },
  { id: "5", action: "Prime annuelle", employee: "Claire Moreau", date: "22 Avr 2026", amount: "1 200 EUR" },
];

export default function DashboardPage() {
  return (
    <AppShell title="Tableau de bord" subtitle="Vue d'ensemble du systeme de remuneration">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Masse salariale mensuelle"
            value={formatCurrency(298000)}
            change="+2.4% vs mois precedent"
            changeType="positive"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            }
          />
          <StatCard
            title="Nombre d'employes"
            value="142"
            change="+5 ce trimestre"
            changeType="positive"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
            }
          />
          <StatCard
            title="Prime moyenne"
            value={formatCurrency(850)}
            change="-1.2% vs mois precedent"
            changeType="negative"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.72-2.07c.94 0 1.86.08 2.78.22V12M2.25 18.75a60.07 60.07 0 0 0 15.72 2.07c.94 0 1.86-.08 2.78-.22V12M2.25 18.75c-.31-.07-.62-.15-.92-.24A4.5 4.5 0 0 1 2.25 12V6.75c0-.36.04-.71.12-1.05M21.75 12c0 1.95-.78 3.72-2.05 5.01M21.75 12V6.75c0-1.96-.78-3.73-2.05-5.02M3.75 5.75c.31-.08.62-.15.93-.21A60.07 60.07 0 0 1 12 4.5c2.3 0 4.52.18 6.57.52M3.75 5.75A4.5 4.5 0 0 1 12 3c1.95 0 3.73.78 5.02 2.05" />
              </svg>
            }
          />
          <StatCard
            title="Taux de retention"
            value="94.2%"
            change="+0.8% vs trimestre precedent"
            changeType="positive"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.72m8.158-3.408A11.944 11.944 0 0 1 12 10.5c-2.17 0-4.207.576-5.963 1.584M6.905 13.47A11.944 11.944 0 0 1 12 10.5c2.17 0 4.207.576 5.963 1.584M15 10.5V9m-3 1.5V9m-3 1.5V9" />
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="card lg:col-span-2">
            <div className="card-header flex items-center justify-between">
              <h2 className="text-base font-semibold text-neutral-900">Masse salariale mensuelle</h2>
              <select className="input-field w-auto text-sm">
                <option>6 derniers mois</option>
                <option>12 derniers mois</option>
                <option>Cette annee</option>
              </select>
            </div>
            <div className="card-body">
              <BarChart data={monthlyData} height={220} />
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="text-base font-semibold text-neutral-900">Repartition de la remuneration</h2>
            </div>
            <div className="card-body flex items-center justify-center py-6">
              <DonutChart segments={compensationBreakdown} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header flex items-center justify-between">
            <h2 className="text-base font-semibold text-neutral-900">Activites recentes</h2>
            <button className="btn-ghost text-sm">Voir tout</button>
          </div>
          <div className="divide-y divide-neutral-100">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-neutral-50">
                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-sm font-medium text-brand-700">
                    {activity.employee.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{activity.action}</p>
                    <p className="text-xs text-neutral-500">{activity.employee}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-neutral-900">{activity.amount}</p>
                  <p className="text-xs text-neutral-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
