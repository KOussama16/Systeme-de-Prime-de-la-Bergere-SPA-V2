"use client";

import AppShell from "@/components/layout/AppShell";
import BarChart from "@/components/charts/BarChart";
import { formatCurrency } from "@/lib/utils";

const quarterlyData = [
  { label: "Q1 2025", value: 845000, color: "bg-brand-300" },
  { label: "Q2 2025", value: 872000, color: "bg-brand-400" },
  { label: "Q3 2025", value: 890000, color: "bg-brand-500" },
  { label: "Q4 2025", value: 920000, color: "bg-brand-600" },
  { label: "Q1 2026", value: 945000, color: "bg-brand-700" },
];

const departmentCosts = [
  { dept: "Production", count: 52, total: 135200, avg: 2600 },
  { dept: "Logistique", count: 25, total: 67500, avg: 2700 },
  { dept: "Administration", count: 18, total: 52200, avg: 2900 },
  { dept: "R&D", count: 15, total: 54000, avg: 3600 },
  { dept: "Commercial", count: 20, total: 56000, avg: 2800 },
  { dept: "Maintenance", count: 12, total: 28800, avg: 2400 },
];

const reports = [
  { name: "Bulletin de paie mensuel", description: "Resume des bulletins de paie du mois", lastGenerated: "01 Mai 2026", format: "PDF" },
  { name: "Rapport masse salariale", description: "Evolution de la masse salariale trimestrielle", lastGenerated: "01 Avr 2026", format: "XLSX" },
  { name: "Rapport primes versees", description: "Detail des primes versees par type", lastGenerated: "01 Avr 2026", format: "PDF" },
  { name: "Bilan social", description: "Indicateurs sociaux annuels", lastGenerated: "15 Jan 2026", format: "PDF" },
  { name: "Rapport couts par departement", description: "Repartition des couts par departement", lastGenerated: "01 Avr 2026", format: "XLSX" },
];

export default function RapportsPage() {
  return (
    <AppShell title="Rapports" subtitle="Analyses et exports">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card">
            <div className="card-header">
              <h2 className="text-base font-semibold text-neutral-900">Evolution trimestrielle</h2>
            </div>
            <div className="card-body">
              <BarChart data={quarterlyData} height={200} />
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="text-base font-semibold text-neutral-900">Couts par departement</h2>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                {departmentCosts.map((d) => (
                  <div key={d.dept} className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-neutral-700">{d.dept}</div>
                    <div className="flex-1">
                      <div className="h-2 w-full rounded-full bg-neutral-100">
                        <div
                          className="h-2 rounded-full bg-brand-500 transition-all duration-500"
                          style={{ width: `${(d.total / 140000) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="w-28 text-right text-sm font-medium text-neutral-900">
                      {formatCurrency(d.total)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="card p-4">
            <p className="text-sm text-neutral-500">Masse salariale annuelle</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">{formatCurrency(3527000)}</p>
            <p className="mt-1 text-xs text-brand-600">+3.8% vs annee precedente</p>
          </div>
          <div className="card p-4">
            <p className="text-sm text-neutral-500">Cout moyen / employe</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">{formatCurrency(24838)}</p>
            <p className="mt-1 text-xs text-neutral-500">Par an</p>
          </div>
          <div className="card p-4">
            <p className="text-sm text-neutral-500">Charges sociales</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">{formatCurrency(1234000)}</p>
            <p className="mt-1 text-xs text-neutral-500">35% du brut</p>
          </div>
          <div className="card p-4">
            <p className="text-sm text-neutral-500">Total primes versees</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">{formatCurrency(425600)}</p>
            <p className="mt-1 text-xs text-brand-600">+7.2% vs annee precedente</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header flex items-center justify-between">
            <h2 className="text-base font-semibold text-neutral-900">Rapports disponibles</h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {reports.map((report) => (
              <div key={report.name} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-neutral-50">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{report.name}</p>
                    <p className="text-xs text-neutral-500">{report.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="badge-gray">{report.format}</span>
                  <span className="text-xs text-neutral-500">{report.lastGenerated}</span>
                  <button className="btn-secondary text-xs">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Telecharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
