import Link from 'next/link';

export default function Todos() {
  return (
    <div>
      {Array.from({ length: 200 }, (_, i) => i + 1).map((i) => (
        <div key={i}>
          <Link href={`/todos/${i}`}>Todo {i}</Link>
        </div>
      ))}
    </div>
  );
}
