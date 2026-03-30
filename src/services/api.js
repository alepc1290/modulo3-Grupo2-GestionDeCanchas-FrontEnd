import { axiosClient } from '../helpers/axiosClient'


// ─── CANCHAS ─────────────────────────────────────────────────────────────────
const getCanchas = () => axiosClient.get('/canchas')
const createCancha = (data) => axiosClient.post('/canchas', data)
const updateCancha = (id, data) => axiosClient.put(`/canchas/${id}`, data)
const deleteCancha = (id) => axiosClient.delete(`/canchas/${id}`)

// ─── PRODUCTOS ────────────────────────────────────────────────────────────────
const getProductos = () => axiosClient.get('/productos')
const createProducto = (data) => axiosClient.post('/productos', data)
const updateProducto = (id, data) => axiosClient.put(`/productos/${id}`, data)
const deleteProducto = (id) => axiosClient.delete(`/productos/${id}`)

// ─── RESERVAS ────────────────────────────────────────────────────────────────

const getReservasAdmin = () => axiosClient.get('/reservas/admin')
const confirmarPago = (id) => axiosClient.patch(`/reservas/${id}/confirmar-pago`)
const cancelarPago = (id) => axiosClient.patch(`/reservas/${id}/cancelar-pago`)

// ─── USUARIOS (admin) ────────────────────────────────────────────────────────
const getUsers = () => axiosClient.get('/users')
const deleteUser = (id) => axiosClient.delete(`/users/${id}`)

export {
    getCanchas,
    createCancha,
    updateCancha,
    deleteCancha,
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto,
    getReservasAdmin,
    confirmarPago,
    cancelarPago,
    getUsers,
    deleteUser
}