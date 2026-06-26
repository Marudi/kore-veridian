import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { PlatformPage } from './pages/PlatformPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { VoiceServicesPage } from './pages/VoiceServicesPage'
import { ConsultingPage } from './pages/ConsultingPage'
import { ManagedServicesPage } from './pages/ManagedServicesPage'
import { ContactPage } from './pages/ContactPage'
import { SupportPage } from './pages/SupportPage'
import { PartnerPage } from './pages/PartnerPage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostRoute } from './pages/BlogPostRoute'
import { SalesContactPage } from './pages/SalesContactPage'
import { GeneralContactPage } from './pages/GeneralContactPage'
import { CareersPage } from './pages/CareersPage'
import { DemoPage } from './pages/DemoPage'
import { CompanyPage } from './pages/CompanyPage'
import { LoginPage } from './pages/LoginPage'
import { PortalPage } from './pages/PortalPage'
import { ResourcesPage } from './pages/ResourcesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="platform" element={<PlatformPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="voice-services" element={<VoiceServicesPage />} />
          <Route path="consulting" element={<ConsultingPage />} />
          <Route path="managed-services" element={<ManagedServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact/sales" element={<SalesContactPage />} />
          <Route path="contact/general" element={<GeneralContactPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="partners" element={<PartnerPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostRoute />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="portal" element={<PortalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
