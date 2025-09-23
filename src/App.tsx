import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { RightSidebar } from "@/components/RightSidebar";
import { AllProperties } from "@/components/AllProperties";
import { PropertyDetails } from "@/components/PropertyDetails";
import NotFound from "./pages/NotFound";
import HackneyListing from "./pages/HackneyListing";

const queryClient = new QueryClient();

const AppLayout = ({
  children,
  showRightSidebar = true
}: {
  children: ReactNode;
  showRightSidebar?: boolean;
}) => (
  <div className="flex h-screen w-full overflow-hidden bg-muted/40">
    <Sidebar />
    {children}
    {showRightSidebar ? <RightSidebar /> : null}
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route
            path="/properties"
            element={(
              <AppLayout showRightSidebar={false}>
                <AllProperties />
              </AppLayout>
            )}
          />
          <Route
            path="/properties/:id"
            element={(
              <AppLayout showRightSidebar={false}>
                <PropertyDetails />
              </AppLayout>
            )}
          />
          <Route path="/stays/deluxe-hackney" element={<HackneyListing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
