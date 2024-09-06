import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Air Travel",
    template: "%s - Air Travel",
  },
  description: "Travel planning made easy",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}

        <Toaster richColors position="bottom-left" />
      </body>
    </html>
  );
}
