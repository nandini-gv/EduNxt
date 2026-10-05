import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import Home from '@/pages/Home'
import Marketplace from '@/pages/Marketplace'
import CompanyDetail from '@/pages/CompanyDetail'
import NotFound from '@/pages/NotFound'
import { SmoothScroll } from '@/hooks/useSmoothScroll'

// The single-file demo build uses hash routing so it works without a server.
const Router = import.meta.env.VITE_ROUTER === 'hash' ? HashRouter : BrowserRouter

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="marketplace/:slug" element={<CompanyDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </Router>
  )
}
