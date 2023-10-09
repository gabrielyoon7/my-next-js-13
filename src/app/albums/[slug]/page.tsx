export interface Album {
  userId: number;
  id: number;
  title: string;
}

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/albums').then<Album[]>((res) =>
    res.json()
  );
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Album: {params.slug}</div>;
}
