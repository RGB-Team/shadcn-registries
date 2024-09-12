"use client";
import { useTheme } from "next-themes";
import { useMounted } from "@hooks/use-mounted";
import { ThemeProvider } from "next-themes";

interface ModeToggleProps {
  children: React.ReactNode;
}

export function ModeToggle({ children }: ModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  return mounted ? (
    <>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {children}
      </button>
      <span className="sr-only">{theme}</span>
    </>
  ) : (
    <div className="animate-pulse rounded-md bg-primary/10 size-9" />
  );
}

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
