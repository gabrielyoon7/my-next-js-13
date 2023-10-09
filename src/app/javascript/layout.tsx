export default function FooLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 bg-amber-200">
      <div>JavaScript</div>
      {children}
    </div>
  );
}
