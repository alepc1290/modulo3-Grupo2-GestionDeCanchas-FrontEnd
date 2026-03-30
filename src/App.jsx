import { useState } from 'react'
import { AuthProvider } from './components/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GaleriaPage from './pages/GaleriaPage'
import AdminRoute from './components/RutaAdmin'
import PanelAdministrador from './pages/administrador'
import NosotrosPage from './pages/NosotrosPage'
import ContactoPage from './pages/ContactoPage'


function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-carbon-900">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/ContactoPage" element={<ContactoPage />} />
                <Route path="/GaleriaPage" element={<GaleriaPage />} />
                <Route path="/NosotrosPage" element={<NosotrosPage />} />
                <Route element={<AdminRoute />}>
                  <Route path="/admin" element={<PanelAdministrador />} />
                </Route>
                <Route element={<PrivateRoute />}>
                <Route path="/reservas" element={<Reservas />} />
              </Route>
              </Routes>
            </main>
            <Footer />
          </div>

        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
