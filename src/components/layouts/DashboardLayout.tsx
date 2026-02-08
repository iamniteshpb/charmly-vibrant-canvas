import { useState, ReactNode } from "react";
import { AppSidebar } from "@/components/ui/AppSidebar";
import { Header } from "@/components/ui/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="min-h-screen bg-background">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="left" className="p-0 w-72">
            <AppSidebar collapsed={false} onToggle={() => setMobileOpen(false)} />
          </SheetContent>
        </Sheet>
        <Header title={title} subtitle={subtitle} onMenuClick={() => setMobileOpen(true)} showMenuButton />
        <main className="p-4">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <div 
        className="transition-all duration-300 ease-in-out"
        style={{ marginLeft: sidebarCollapsed ? 72 : 260 }}
      >
        <Header title={title} subtitle={subtitle} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}