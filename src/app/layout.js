export const metadata = {
  title: "Huberman Protocol",
  description: "Science-based protocols for sleep, stress, mental & physical health.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}