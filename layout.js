import "./globals.css";

export const metadata = {
  title: "NOVATECH",
  description: "Engineering solutions for roads and airfields",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
