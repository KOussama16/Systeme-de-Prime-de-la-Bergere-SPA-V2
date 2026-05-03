"use client";

import { useState } from "react";
import AppShell from "@/components/layout/AppShell";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general");

  const sections = [
    { id: "general", name: "General", icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" },
    { id: "salary", name: "Grilles salariales", icon: "M2.25 18.75a60.07 60.07 0 0 1 15.72-2.07c.94 0 1.86.08 2.78.22V12M2.25 18.75a60.07 60.07 0 0 0 15.72 2.07c.94 0 1.86-.08 2.78-.22V12M2.25 18.75c-.31-.07-.62-.15-.92-.24A4.5 4.5 0 0 1 2.25 12V6.75c0-.36.04-.71.12-1.05M21.75 12c0 1.95-.78 3.72-2.05 5.01M21.75 12V6.75c0-1.96-.78-3.73-2.05-5.02M3.75 5.75c.31-.08.62-.15.93-.21A60.07 60.07 0 0 1 12 4.5c2.3 0 4.52.18 6.57.52M3.75 5.75A4.5 4.5 0 0 1 12 3c1.95 0 3.73.78 5.02 2.05" },
    { id: "notifications", name: "Notifications", icon: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" },
  ];

  return (
    <AppShell title="Parametres" subtitle="Configuration du systeme">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <nav className="card lg:col-span-1">
          <div className="p-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-brand-50 text-brand-700"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                </svg>
                {section.name}
              </button>
            ))}
          </div>
        </nav>

        <div className="lg:col-span-3">
          {activeSection === "general" && (
            <div className="card">
              <div className="card-header">
                <h2 className="text-base font-semibold text-neutral-900">Parametres generaux</h2>
              </div>
              <div className="card-body space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700">Nom de l&apos;entreprise</label>
                    <input type="text" defaultValue="La Bergere SPA" className="input-field" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700">SIRET</label>
                    <input type="text" defaultValue="123 456 789 00012" className="input-field" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700">Convention collective</label>
                    <input type="text" defaultValue="Agroalimentaire" className="input-field" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-neutral-700">Devise</label>
                    <select className="input-field">
                      <option>EUR - Euro</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-4 border-t border-neutral-200">
                  <button className="btn-primary">Enregistrer</button>
                </div>
              </div>
            </div>
          )}

          {activeSection === "salary" && (
            <div className="card">
              <div className="card-header flex items-center justify-between">
                <h2 className="text-base font-semibold text-neutral-900">Grilles salariales</h2>
                <button className="btn-primary text-sm">Modifier les grilles</button>
              </div>
              <div className="card-body">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="table-header px-6 py-3">Niveau</th>
                        <th className="table-header px-6 py-3">Coefficient</th>
                        <th className="table-header px-6 py-3">Salaire minimum</th>
                        <th className="table-header px-6 py-3">Salaire median</th>
                        <th className="table-header px-6 py-3">Salaire maximum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {[
                        { level: "Operateur", coeff: "100-120", min: "2 000", med: "2 300", max: "2 600" },
                        { level: "Technicien", coeff: "130-160", min: "2 400", med: "2 700", max: "3 100" },
                        { level: "Agent de maitrise", coeff: "170-200", min: "2 800", med: "3 200", max: "3 600" },
                        { level: "Cadre", coeff: "210-280", min: "3 400", med: "4 000", max: "5 200" },
                        { level: "Cadre superieur", coeff: "290+", min: "5 000", med: "6 500", max: "9 000" },
                      ].map((row) => (
                        <tr key={row.level} className="transition-colors hover:bg-neutral-50">
                          <td className="table-cell font-medium">{row.level}</td>
                          <td className="table-cell">{row.coeff}</td>
                          <td className="table-cell">{row.min} EUR</td>
                          <td className="table-cell">{row.med} EUR</td>
                          <td className="table-cell">{row.max} EUR</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "notifications" && (
            <div className="card">
              <div className="card-header">
                <h2 className="text-base font-semibold text-neutral-900">Preferences de notification</h2>
              </div>
              <div className="card-body space-y-4">
                {[
                  { label: "Alertes de paie", desc: "Notification lors de la generation des bulletins", enabled: true },
                  { label: "Rappels primes", desc: "Rappel avant le versement des primes", enabled: true },
                  { label: "Rapports mensuels", desc: "Envoi automatique du rapport mensuel", enabled: false },
                  { label: "Alertes budget", desc: "Notification en cas de depassement budgetaire", enabled: true },
                ].map((notif) => (
                  <div key={notif.label} className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{notif.label}</p>
                      <p className="text-xs text-neutral-500">{notif.desc}</p>
                    </div>
                    <button
                      className={`relative h-6 w-11 rounded-full transition-colors ${
                        notif.enabled ? "bg-brand-600" : "bg-neutral-200"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                          notif.enabled ? "left-[22px]" : "left-0.5"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
