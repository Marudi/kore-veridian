import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { PlatformPage } from './pages/PlatformPage'
import { SolutionsPage } from './pages/SolutionsPage'
import { VoiceServicesPage } from './pages/VoiceServicesPage'
import { ConsultingPage } from './pages/ConsultingPage'
import { ManagedServicesPage } from './pages/ManagedServicesPage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { BlogPostRoute } from './pages/BlogPostRoute'
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
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostRoute />} />
          <Route path="resources" element={<ResourcesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
