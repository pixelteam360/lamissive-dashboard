import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/provider/ReduxProvider";


const poppins = Poppins({
    subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})
export const metadata: Metadata = {
  title: "Homigo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-gradient-to-b from-[#FFFFFF] to-[#FFD1D0]`}>
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
