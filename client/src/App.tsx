import { ThemeProvider } from "@/components/theme/theme-provider";
import "./App.css";
import { HomeScreen } from "./pages/HomeScreen";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <HomeScreen />
    </ThemeProvider>
  );
};
