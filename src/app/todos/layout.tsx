export default function TodosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 bg-amber-200">
      <div>Todos</div>
      {children}
    </div>
  );
}
