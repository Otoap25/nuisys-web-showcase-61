import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import SecurityServicesPage from "./pages/SecurityServicesPage";
import InfrastructureServicesPage from "./pages/InfrastructureServicesPage";
import PowerServicesPage from "./pages/PowerServicesPage";
import CloudServicesPage from "./pages/CloudServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Individual Service Pages
import CCTVSystemsPage from "./pages/services/CCTVSystemsPage";
import DoorAccessControlPage from "./pages/services/DoorAccessControlPage";
import AlarmSystemsPage from "./pages/services/AlarmSystemsPage";
import OfficeRelocationPage from "./pages/services/OfficeRelocationPage";
import DataCablingPage from "./pages/services/DataCablingPage";
import NetworkSetupPage from "./pages/services/NetworkSetupPage";
import UPSSystemsPage from "./pages/services/UPSSystemsPage";
import GeneratorsPage from "./pages/services/GeneratorsPage";
import SolarSystemsPage from "./pages/services/SolarSystemsPage";
import CloudInfrastructurePage from "./pages/services/CloudInfrastructurePage";
import SaaSImplementationPage from "./pages/services/SaaSImplementationPage";
import AIAutomationPage from "./pages/services/AIAutomationPage";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/security" element={<SecurityServicesPage />} />
          <Route path="/services/infrastructure" element={<InfrastructureServicesPage />} />
          <Route path="/services/power" element={<PowerServicesPage />} />
          <Route path="/services/cloud" element={<CloudServicesPage />} />
          
          {/* Individual Service Routes */}
          <Route path="/services/security/cctv-systems" element={<CCTVSystemsPage />} />
          <Route path="/services/security/door-access-control" element={<DoorAccessControlPage />} />
          <Route path="/services/security/alarm-systems" element={<AlarmSystemsPage />} />
          <Route path="/services/infrastructure/office-relocation" element={<OfficeRelocationPage />} />
          <Route path="/services/infrastructure/data-cabling" element={<DataCablingPage />} />
          <Route path="/services/infrastructure/network-setup" element={<NetworkSetupPage />} />
          <Route path="/services/power/ups-systems" element={<UPSSystemsPage />} />
          <Route path="/services/power/generators" element={<GeneratorsPage />} />
          <Route path="/services/power/solar-systems" element={<SolarSystemsPage />} />
          <Route path="/services/cloud/cloud-infrastructure" element={<CloudInfrastructurePage />} />
          <Route path="/services/cloud/saas-implementation" element={<SaaSImplementationPage />} />
          <Route path="/services/cloud/ai-automation" element={<AIAutomationPage />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
