import { useState } from 'react'
import { AuthProvider } from './components/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/inicio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-carbon-900">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* Públicas */}
                <Route path="/" element={<Inicio />} />


                <Route path="/ContactoPage" element={<ContactoPage />} />
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
