import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../components/AuthContext'

// Ruta protegida. Requiere estar logueado
function PrivateRoute() {
  const { isLogged } = useAuth()
  return isLogged ? <Outlet /> : <Navigate to="/login" replace />
}

export default PrivateRoute
