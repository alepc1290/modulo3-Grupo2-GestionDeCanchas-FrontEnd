import { useState } from 'react'
import { AuthProvider } from './components/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GaleriaPage from './pages/GaleriaPage'


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
                <Route path="/GaleriaPage" element={<GaleriaPage />} />

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
