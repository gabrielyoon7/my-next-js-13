import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next-js-13 테스트',
  description: '이것 저것 해보는 레포지토리입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="flex justify-around my-3">
          <Link href="/">Home</Link>
          <Link href="/todos">Todos</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/foo">404</Link>
        </header>
        <div className="bg-green-300 p-3">{children}</div>
      </body>
    </html>
  );
}
