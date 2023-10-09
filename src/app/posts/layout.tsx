export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-3 bg-amber-200">
      <div>Posts</div>
      {children}
    </div>
  );
}
