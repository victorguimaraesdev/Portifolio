
import Nav from "@/components/Nav/Nav";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
