"use client";

import { useState } from "react";
import AppShell from "@/components/layout/AppShell";
import DataTable from "@/components/ui/DataTable";
import { formatCurrency } from "@/lib/utils";

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  status: "active" | "inactive";
}

const employees: Employee[] = [
  { id: "1", firstName: "Marie", lastName: "Dupont", department: "Production", position: "Responsable qualite", salary: 3200, startDate: "2019-03-15", status: "active" },
  { id: "2", firstName: "Jean", lastName: "Martin", department: "Logistique", position: "Chef d'equipe", salary: 2800, startDate: "2020-06-01", status: "active" },
  { id: "3", firstName: "Sophie", lastName: "Bernard", department: "Administration", position: "Assistante direction", salary: 2600, startDate: "2021-01-10", status: "active" },
  { id: "4", firstName: "Pierre", lastName: "Leroy", department: "Production", position: "Operateur", salary: 2200, startDate: "2024-04-25", status: "active" },
  { id: "5", firstName: "Claire", lastName: "Moreau", department: "R&D", position: "Ingenieure", salary: 3400, startDate: "2018-09-01", status: "active" },
  { id: "6", firstName: "Luc", lastName: "Petit", department: "Maintenance", position: "Technicien", salary: 2400, startDate: "2022-11-15", status: "active" },
  { id: "7", firstName: "Anne", lastName: "Roux", department: "Commercial", position: "Commerciale", salary: 2700, startDate: "2023-02-20", status: "active" },
  { id: "8", firstName: "Marc", lastName: "Fournier", department: "Production", position: "Operateur", salary: 2100, startDate: "2023-07-01", status: "inactive" },
];

const columns = [
  {
    key: "name",
    header: "Employe",
    render: (item: Employee) => (
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-xs font-medium text-brand-700">
          {item.firstName[0]}{item.lastName[0]}
        </div>
        <div>
          <p className="font-medium text-neutral-900">{item.firstName} {item.lastName}</p>
          <p className="text-xs text-neutral-500">{item.position}</p>
        </div>
      </div>
    ),
  },
  {
    key: "department",
    header: "Departement",
    render: (item: Employee) => (
      <span className="badge-gray">{item.department}</span>
    ),
  },
  {
    key: "salary",
    header: "Salaire brut",
    render: (item: Employee) => (
      <span className="font-medium">{formatCurrency(item.salary)}</span>
    ),
  },
  {
    key: "startDate",
    header: "Date d'entree",
    render: (item: Employee) => (
      <span className="text-neutral-500">{new Date(item.startDate).toLocaleDateString("fr-FR")}</span>
    ),
  },
  {
    key: "status",
    header: "Statut",
    render: (item: Employee) => (
      <span className={item.status === "active" ? "badge-green" : "badge-gray"}>
        {item.status === "active" ? "Actif" : "Inactif"}
      </span>
    ),
  },
  {
    key: "actions",
    header: "",
    render: () => (
      <button className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      </button>
    ),
  },
];

export default function EmployesPage() {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("all");

  const departments = Array.from(new Set(employees.map((e) => e.department)));

  const filtered = employees.filter((e) => {
    const matchesSearch = `${e.firstName} ${e.lastName}`.toLowerCase().includes(search.toLowerCase());
    const matchesDept = filterDept === "all" || e.department === filterDept;
    return matchesSearch && matchesDept;
  });

  return (
    <AppShell title="Employes" subtitle="Gestion du personnel">
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            <div className="relative flex-1 sm:max-w-xs">
              <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher un employe..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-9"
              />
            </div>
            <select
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="input-field w-auto sm:w-48"
            >
              <option value="all">Tous les departements</option>
              {departments.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          <button className="btn-primary">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Ajouter un employe
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="card p-4">
            <p className="text-sm text-neutral-500">Total employes</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">{employees.filter((e) => e.status === "active").length}</p>
          </div>
          <div className="card p-4">
            <p className="text-sm text-neutral-500">Salaire moyen</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">
              {formatCurrency(employees.filter((e) => e.status === "active").reduce((s, e) => s + e.salary, 0) / employees.filter((e) => e.status === "active").length)}
            </p>
          </div>
          <div className="card p-4">
            <p className="text-sm text-neutral-500">Departements</p>
            <p className="mt-1 text-2xl font-semibold text-neutral-900">{departments.length}</p>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filtered}
          keyExtractor={(item) => item.id}
        />
      </div>
    </AppShell>
  );
}
