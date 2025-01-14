import "~/styles/globals.css";

import { Source_Sans_3 } from "next/font/google";
import { type Metadata } from "next";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar";

export const metadata: Metadata = {
  title: "Jared Rhizor",
  description: "I'm Jared Rhizor, a maker, founder, and software dev.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceSans.className}`}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-24 shrink-0 items-center gap-2 border-b">
              <div className="flex items-center gap-2 px-3">
                <SidebarTrigger />
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
