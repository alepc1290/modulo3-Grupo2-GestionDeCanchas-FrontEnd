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
import Login from './pages/Login'
import Register from './pages/registrarse'
import Productos from './pages/Productos'


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
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/ContactoPage" element={<ContactoPage />} />
                <Route path="/GaleriaPage" element={<GaleriaPage />} />
                <Route path="/NosotrosPage" element={<NosotrosPage />} />
                <Route element={<AdminRoute />}>
                  <Route path="/admin" element={<PanelAdministrador />} />
                </Route>
                
                {/* solo cuando esta logueado se puede acceder a las reservas */}
                <Route element={<PrivateRoute />}>
                  <Route path="/reservas" element={<Reservas />} />
                </Route>

                <Route
                  path="*"
                  element={
                    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                      <p className="section-label mb-3">Error 404</p>
                      <h2 className="font-display font-black text-white uppercase text-6xl mb-4">
                        No encontrado
                      </h2>
                      <p className="text-carbon-400 text-sm mb-8">
                        La página que buscás no existe.
                      </p>
                      <a href="/" className="btn-primary flex items-center gap-2">
                        Volver al inicio
                      </a>
                    </div>
                  }
                />

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
