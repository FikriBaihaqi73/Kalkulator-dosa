import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalkulator Dosa - Introspeksi Diri",
  description: "Aplikasi edukatif untuk menyadarkan pengguna terhadap tindakan buruk yang mereka lakukan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="container">
          {children}
          <footer className="footer">
            <p>© {new Date().getFullYear()} Kalkulator Dosa - Aplikasi Edukatif</p>
            <p>Bertujuan untuk introspeksi diri, bukan untuk menghakimi</p>
            <p><a href="https://teer.id/apg0i4vaap2blgwy8lru" target="_blank" rel="noopener noreferrer">Dukung kami di Trakteer agar semakin semangat ngoding</a></p>
          </footer>
        </div>
      </body>
    </html>
  );
}