import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'sonner'
import { LogIn } from 'lucide-react'
import { loginUser } from '../services/api'
import { useAuth } from '../components/AuthContext'
import { API_URL } from '../config/env'
import logo from "../components/img/LogoImagen.png"

const mensajeNoVerificado = [
    'debes verificar tu correo', 'verifica tu correo',
    'email no verificado', 'correo no verificado', 'verify your email',
]
const esErrorDeVerificacion = (msg) =>
    mensajeNoVerificado.some((mensaje) => msg.toLowerCase().includes(mensaje))

function Login() {
    const { login, isLogged } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [noVerificado, setNoVerificado] = useState(false)

    useEffect(() => { if (isLogged) navigate('/Reservas', { replace: true }) }, [isLogged])
    useEffect(() => { if (location.state?.verificado) toast.success('¡Email verificado! Ya podés iniciar sesión.') }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        if (e.target.name === 'email') setNoVerificado(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(''); setNoVerificado(false); setLoading(true)
        try {
            const res = await loginUser(form)
            login(res.data.data)
            toast.success('¡Bienvenido/a!')
            navigate('/Reservas', { replace: true })
        } catch (err) {
            const msg = err.response?.data?.message || 'Error al iniciar sesión'
            if (esErrorDeVerificacion(msg)) setNoVerificado(true)
            else { setError(msg) }
        } finally { setLoading(false) }
    }

    const googleLoginUrl = `${API_URL}/api/auth/google`

    return (
        <div className="min-h-screen flex items-center justify-center bg-carbon-900 py-12 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6">
                        <span className="w-auto h-6 flex items-center justify-center">
                            <img
                                src={logo}
                                alt="RC Sport Logo"
                                className="h-12 w-auto " />
                        </span>
                    </Link>
                    <h1 className="font-display font-black text-white uppercase text-4xl">Iniciar sesión</h1>
                    <p className="text-carbon-300 text-sm mt-2">Ingresá tu cuenta para reservar canchas</p>
                </div>
                <div className="bg-carbon-800 border border-carbon-600 p-8">
                    {error && (
                        <div className="border border-red-800 bg-red-900/20 px-4 py-3 text-red-400 text-sm font-mono mb-5">
                            ⚠ {error}
                        </div>)}
                    {noVerificado && (
                        <div className="border border-yellow-800 bg-yellow-900/20 px-4 py-3 text-yellow-400 text-sm mb-5">
                            <p className="font-display font-bold uppercase tracking-wide text-sm mb-1">Verificá tu correo electrónico</p>
                            <p className="text-xs text-yellow-400/80">
                                Revisá tu bandeja de entrada{form.email && <> (enviamos a <strong>{form.email}</strong>)</>}.
                                Si no llegó, revisá spam.
                            </p>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="font-mono text-xs text-carbon-400 uppercase tracking-widest block mb-1.5">Email</label>
                            <input
                                type="email"
                                name="email"
                                className={`input-field ${noVerificado ? 'border-yellow-700' : ''}`}
                                placeholder="ejemplo@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required />
                        </div>
                        <div>
                            <label className="font-mono text-xs text-carbon-400 uppercase tracking-widest block mb-1.5">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                className="input-field"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
                            disabled={loading}>
                            {loading
                                ? <><div className="w-4 h-4 border-2 border-carbon-900/40 border-t-carbon-900 rounded-full animate-spin" /> Ingresando...</>
                                : <><LogIn size={16} /> Ingresar</>}
                        </button>
                    </form>

                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-carbon-600" />
                        <span className="font-mono text-carbon-400 text-xs uppercase tracking-widest">O</span>
                        <div className="flex-1 h-px bg-carbon-600" />
                    </div>
                    
                    <a
                        href={googleLoginUrl}
                        className="w-full flex items-center justify-center gap-3 bg-carbon-700 border border-carbon-500 hover:border-verde-600 text-white font-body text-sm px-4 py-3 transition-all duration-200 hover:bg-carbon-600"
                    >
                        {/* Ícono SVG de Google */}
                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                            <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
                            <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05" />
                            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                        </svg>
                        Continuar con Google
                    </a>

                    <div className="border-t border-carbon-600 mt-6 pt-5 text-center">
                        <p className="text-carbon-400 text-sm">
                            ¿No tenés cuenta?{' '}
                            <Link to="/register" className="text-verde-400 hover:text-verde-300 font-semibold transition-colors">
                                Registrate
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login