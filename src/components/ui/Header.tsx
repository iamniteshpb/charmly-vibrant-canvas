import { motion } from "framer-motion";
import { Bell, Search, User, Menu } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Header({ title = "Dashboard", subtitle, onMenuClick, showMenuButton }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-14 md:h-16 border-b border-border/50 bg-background/80 backdrop-blur-sm flex items-center justify-between px-4 md:px-6 sticky top-0 z-40"
    >
      {/* Title Section */}
      <div className="flex items-center gap-3">
        {showMenuButton && (
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        )}
        <div>
          <h1 className="text-lg md:text-xl font-semibold truncate max-w-[150px] sm:max-w-none">{title}</h1>
          {subtitle && <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">{subtitle}</p>}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Search - Hidden on mobile */}
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="w-48 xl:w-64 pl-10 bg-muted/30 border-border/50 focus:border-primary/50"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <Bell className="w-4 h-4 md:w-5 md:h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        {/* User - Icon only on mobile */}
        <Button variant="ghost" size="icon" className="h-9 w-9 sm:hidden">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-3.5 h-3.5 text-primary" />
          </div>
        </Button>
        <Button variant="ghost" className="gap-2 hidden sm:flex">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm font-medium hidden md:inline">Admin</span>
        </Button>
      </div>
    </motion.header>
  );
}