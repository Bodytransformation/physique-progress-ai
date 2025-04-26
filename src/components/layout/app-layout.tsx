
import { AppSidebar } from "./app-sidebar";
import { Toaster } from "@/components/ui/toaster";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="h-screen flex overflow-hidden bg-background">
      <AppSidebar />
      <main className="flex-1 overflow-y-auto pl-[80px] md:pl-64 transition-all duration-300">
        <div className="container py-8 mx-auto max-w-7xl animate-fade-in">
          {children}
        </div>
        <Toaster />
      </main>
    </div>
  );
}
