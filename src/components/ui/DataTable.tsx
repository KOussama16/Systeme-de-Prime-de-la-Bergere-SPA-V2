interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
}

export default function DataTable<T>({ columns, data, keyExtractor }: DataTableProps<T>) {
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200">
              {columns.map((col) => (
                <th key={col.key} className="table-header px-6 py-3">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {data.map((item) => (
              <tr key={keyExtractor(item)} className="transition-colors hover:bg-neutral-50">
                {columns.map((col) => (
                  <td key={col.key} className="table-cell">
                    {col.render
                      ? col.render(item)
                      : (item as Record<string, unknown>)[col.key] as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-neutral-400">
          <svg className="mb-3 h-12 w-12" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7m16 0v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5m16 0h-2.586a1 1 0 0 0-.707.293l-2.414 2.414a1 1 0 0 1-.707.293h-3.172a1 1 0 0 1-.707-.293l-2.414-2.414A1 1 0 0 0 6.586 13H4" />
          </svg>
          <p className="text-sm">Aucune donnee disponible</p>
        </div>
      )}
    </div>
  );
}
