"use client";

import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import DonutChart from "@/components/charts/DonutChart";
import { formatCurrency } from "@/lib/utils";

const primeTypes = [
  { id: "1", name: "Prime d'anciennete", description: "Apres 3 ans de service", amount: 150, frequency: "Mensuelle", eligibleCount: 87 },
  { id: "2", name: "Prime de performance", description: "Basee sur les objectifs individuels", amount: 400, frequency: "Trimestrielle", eligibleCount: 120 },
  { id: "3", name: "Prime de productivite", description: "Basee sur les indicateurs de production", amount: 250, frequency: "Mensuelle", eligibleCount: 95 },
  { id: "4", name: "Prime d'equipe", description: "Partagee entre les membres de l'equipe", amount: 600, frequency: "Trimestrielle", eligibleCount: 60 },
  { id: "5", name: "Prime annuelle", description: "Prime de fin d'annee", amount: 1200, frequency: "Annuelle", eligibleCount: 142 },
  { id: "6", name: "Prime de nuit", description: "Compensation pour le travail de nuit", amount: 80, frequency: "Mensuelle", eligibleCount: 35 },
];

const breakdownData = [
  { label: "Primes performance", value: 35, color: "#16a34a" },
  { label: "Primes anciennete", value: 20, color: "#22c55e" },
  { label: "Primes productivite", value: 25, color: "#86efac" },
  { label: "Autres primes", value: 20, color: "#dcfce7" },
];

export default function RemunerationPage() {
  const [activeTab, setActiveTab] = useState<"primes" | "avantages" | "historique">("primes");

  return (
    <AppShell title="Remuneration" subtitle="Gestion des primes et avantages">
      <div className="space-y-6">
        <div className="flex gap-1 rounded-lg bg-neutral-100 p-1 w-fit">
          {(["primes", "avantages", "historique"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              {tab === "primes" ? "Primes" : tab === "avantages" ? "Avantages" : "Historique"}
            </button>
          ))}
        </div>

        {activeTab === "primes" && (
          <>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="card lg:col-span-2">
                <div className="card-header flex items-center justify-between">
                  <h2 className="text-base font-semibold text-neutral-900">Types de primes</h2>
                  <button className="btn-primary text-sm">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Nouvelle prime
                  </button>
                </div>
                <div className="divide-y divide-neutral-100">
                  {primeTypes.map((prime) => (
                    <div key={prime.id} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-neutral-50">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-medium text-neutral-900">{prime.name}</p>
                          <span className="badge-green">{prime.frequency}</span>
                        </div>
                        <p className="mt-0.5 text-xs text-neutral-500">{prime.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-neutral-900">{formatCurrency(prime.amount)}</p>
                        <p className="text-xs text-neutral-500">{prime.eligibleCount} eligibles</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h2 className="text-base font-semibold text-neutral-900">Repartition des primes</h2>
                </div>
                <div className="card-body flex items-center justify-center py-6">
                  <DonutChart segments={breakdownData} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="card p-4">
                <p className="text-sm text-neutral-500">Budget primes mensuel</p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900">{formatCurrency(48500)}</p>
                <p className="mt-1 text-xs text-brand-600">78% du budget alloue</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-neutral-500">Primes versees (mois)</p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900">{formatCurrency(42300)}</p>
                <p className="mt-1 text-xs text-neutral-500">312 versements</p>
              </div>
              <div className="card p-4">
                <p className="text-sm text-neutral-500">Prime moyenne / employe</p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900">{formatCurrency(298)}</p>
                <p className="mt-1 text-xs text-brand-600">+5.2% vs mois precedent</p>
              </div>
            </div>
          </>
        )}

        {activeTab === "avantages" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Mutuelle sante", coverage: "100% des employes", cost: "120 EUR/mois", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" },
              { name: "Tickets restaurant", coverage: "100% des employes", cost: "8 EUR/jour", icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" },
              { name: "Prevoyance", coverage: "100% des employes", cost: "45 EUR/mois", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" },
              { name: "CE / Activites", coverage: "Tous les adherents", cost: "15 EUR/mois", icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.72m8.158-3.408A11.944 11.944 0 0 1 12 10.5c2.17 0 4.207.576 5.963 1.584M15 10.5V9m-3 1.5V9m-3 1.5V9" },
              { name: "Formation", coverage: "Sur demande", cost: "Budget annuel", icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 8.25 60.44 60.44 0 0 0 15.632-2.09m-15.632 2.09L3 12m0 0 18.14-5.147M3 12l18.14-5.147M21.14 6.853a60.438 60.438 0 0 0-.491-8.25" },
              { name: "Teletravail", coverage: "Postes eligibles", cost: "Indemnite mensuelle", icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.33A2.25 2.25 0 0 0 18 8.25h-2.25a2.25 2.25 0 0 0-2.25 2.25v1.5m-7.5 9V10.33A2.25 2.25 0 0 1 6 8.25H3.75a2.25 2.25 0 0 0-2.25 2.25v1.5" },
            ].map((benefit) => (
              <div key={benefit.name} className="card p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">{benefit.name}</h3>
                <p className="mt-1 text-xs text-neutral-500">{benefit.coverage}</p>
                <p className="mt-3 text-sm font-medium text-brand-700">{benefit.cost}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "historique" && (
          <div className="card">
            <div className="card-header">
              <h2 className="text-base font-semibold text-neutral-900">Historique des versements</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="table-header px-6 py-3">Date</th>
                    <th className="table-header px-6 py-3">Type</th>
                    <th className="table-header px-6 py-3">Beneficiaires</th>
                    <th className="table-header px-6 py-3">Montant total</th>
                    <th className="table-header px-6 py-3">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { date: "01 Mai 2026", type: "Prime de performance", count: 120, total: 48000, status: "Verse" },
                    { date: "01 Avr 2026", type: "Prime d'anciennete", count: 87, total: 13050, status: "Verse" },
                    { date: "01 Avr 2026", type: "Prime de productivite", count: 95, total: 23750, status: "Verse" },
                    { date: "01 Mar 2026", type: "Prime de performance", count: 118, total: 47200, status: "Verse" },
                    { date: "01 Jan 2026", type: "Prime annuelle", count: 142, total: 170400, status: "Verse" },
                  ].map((row, i) => (
                    <tr key={i} className="transition-colors hover:bg-neutral-50">
                      <td className="table-cell">{row.date}</td>
                      <td className="table-cell font-medium">{row.type}</td>
                      <td className="table-cell">{row.count} employes</td>
                      <td className="table-cell font-medium">{formatCurrency(row.total)}</td>
                      <td className="table-cell">
                        <span className="badge-green">{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
