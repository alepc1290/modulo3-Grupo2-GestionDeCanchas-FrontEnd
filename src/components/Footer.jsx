import { Link } from 'react-router'
import { Zap, MapPin, Phone, Mail } from 'lucide-react'
import logo from "./img/LogoImagen.png"

function Footer() {
  return (
    <footer className="bg-carbon-800 border-t border-carbon-700 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="w-auto h-8 flex items-center justify-center">
                <img
                            src={logo}
                            alt="RC Sport Logo"
                            className="h-12 w-auto "
                          />
              </span>
            </Link>
            <p className="text-carbon-300 text-sm leading-relaxed">
              El mejor complejo deportivo de la ciudad. Siempre buscamos las canchas de primer nivel para tu próximo partido.
            </p>
          </div>

          <div>
            <h4 className="section-label mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { to: '/',          label: 'Inicio' },
                { to: '/reservas',  label: 'Reservar turno' },
                { to: '/productos', label: 'Tienda' },
                { to: '/GaleriaPage', label: 'Galeria de Imagenes' },
                { to: '/ContactoPage', label: 'Contactanos' },
                { to: '/NosotrosPage', label: 'Acerca de Nosotros' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-carbon-300 hover:text-verde-400 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="section-label mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-carbon-300 text-sm hover:text-verde-400 text-sm transition-colors">
                <MapPin size={14} className="text-verde-500 flex-shrink-0" />
                <a href="https://www.google.com/maps?client=opera-gx&hs=pfc&sca_esv=918d0965cae38051&biw=1878&bih=969&output=search&q=RollingCode+School&source=lnms&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpn60DczFdcvPnuv8WQohHLTaMb_WtLz8zQ41bNqiqMK_2tAHCL8fGF2xU6_n5bwc1V3vFmQuRIG-bvH-sIZyV2LbLX-JmUis5A72EqkpI1mhjnS_FAIXeb5XQWYfW8fsJ8igzep0ixTQaFgWlBdRkD8xhsxTJzcG_0ZiVfJTPo05kMPhycaIfa1OiudlKTGxZX3KitEf2nh_dv98F69QxpGGzYT2A&entry=mc&ved=1t:200715&ictx=111">
                General Paz 576, San Miguel de Tucumán.
                </a>
              </li>
              <li className="flex items-center gap-2 text-carbon-300 text-sm">
                <Phone size={14} className="text-verde-500 flex-shrink-0" />
                +54 9 381 620 3897
              </li>
              <li className="flex items-center gap-2 text-carbon-300 text-sm">
                <Mail size={14} className="text-verde-500 flex-shrink-0" />
                gestiondecanchaproyecto@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-carbon-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-carbon-400 text-xs font-mono">
            © {new Date().getFullYear()} RC SPORT — Todos los derechos reservados
          </p>
          <p className="text-carbon-400 text-xs">
            Lunes a Domingo · 08:00 – 23:00 hs
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer