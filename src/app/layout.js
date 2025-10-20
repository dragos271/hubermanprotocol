export const metadata = {
  title: "Huberman Protocol",
  description: "Science-based protocols for sleep, stress, mental & physical health.",
};

import "./globals.css";
import Providers from "@/components/Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
