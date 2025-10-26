import './globals.css';

export const metadata = {
  title: 'App',
  description: 'Frontend scaffold',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

