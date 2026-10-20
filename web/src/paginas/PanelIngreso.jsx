// Generado desde Figma (a1). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import Boton from "../componentes/Boton.jsx";
import Logo from "../componentes/Logo.jsx";
import "./PanelIngreso.css";

export default function PanelIngreso() {
  return (
    <>
      <section className="a1-pantalla">
        <div className="a1-pantalla__hoja">
          <div className="a1-pantalla__marca">
            <Logo className="a1-pantalla__marca-logo" />
            <p className="a1-pantalla__el-tintero">El Tintero</p>
          </div>
          <p className="a1-pantalla__el-cuaderno-de">El cuaderno de</p>
          <div className="a1-pantalla__resaltador">
            <p className="a1-pantalla__ingreso">secretaría.</p>
          </div>
          <p className="a1-pantalla__clases-reservas-saldos-y-docentes-en-un-solo-lugar">Clases, reservas, saldos y docentes en un solo lugar.</p>
          <p className="a1-pantalla__panel-interno-solo-administracion-y-docentes">Panel interno · solo administración y docentes</p>
        </div>
        <div className="a1-pantalla__ingreso-2">
          <div className="a1-pantalla__formulario">
            <p className="a1-pantalla__ingresa-al-panel">Ingresá al panel</p>
            <div className="a1-pantalla__campo">
              <p className="a1-pantalla__nombre-del-estudiante">Correo</p>
              <div className="a1-pantalla__caja">
                <p className="a1-pantalla__valor">nombre@eltintero.com.ar</p>
              </div>
            </div>
            <div className="a1-pantalla__campo-2">
              <p className="a1-pantalla__nombre-del-estudiante-2">Contraseña</p>
              <div className="a1-pantalla__caja-2">
                <p className="a1-pantalla__valor-2">••••••••</p>
              </div>
            </div>
            <Boton tipo="primario" className="a1-pantalla__boton" href="/panel/agenda">Ingresar</Boton>
            <p className="a1-pantalla__olvide-mi-contrasena">Olvidé mi contraseña</p>
          </div>
        </div>
      </section>
    </>
  );
}
