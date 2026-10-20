// Generado desde Figma (_NivelesHero). Los cambios de diseño se hacen en Figma y se vuelve a generar.
import "./NivelesHero.css";

export default function NivelesHero({ nivel, elegir }) {
  return (
    <>
      <section className="p2-hero">
        <div className="p2-hero__renglones" />
        <div className="p2-hero__margen" />
        <p className="p2-hero__niveles">NIVELES</p>
        <div className="p2-hero__t">
          <p className="p2-hero__de-la-primera-tabla">De la primera tabla</p>
        </div>
        <div className="p2-hero__t2">
          <p className="p2-hero__al">al</p>
          <div className="p2-hero__resaltador">
            <p className="p2-hero__ingreso">ingreso.</p>
          </div>
        </div>
        <p className="p2-hero__tres-niveles-con-la-misma-form">Tres niveles con la misma forma de acompañar. Elegí el tuyo para ver qué trabajamos, con quién y cuándo.</p>
        <div className="p2-hero__pestanas" role="group" aria-label="Nivel">
          <span className="pestanas__indicador" aria-hidden="true" />
          <button type="button" className={"p2-hero__primaria pestana" + (nivel === 0 ? " pestana--activa" : "")} aria-pressed={nivel === 0} onClick={() => elegir(0)}>
            <span className="p2-hero__primaria-2">Primaria</span>
          </button>
          <button type="button" className={"p2-hero__secundaria pestana" + (nivel === 1 ? " pestana--activa" : "")} aria-pressed={nivel === 1} onClick={() => elegir(1)}>
            <span className="p2-hero__secundaria-2">Secundaria</span>
          </button>
          <button type="button" className={"p2-hero__terciario-e-ingreso pestana" + (nivel === 2 ? " pestana--activa" : "")} aria-pressed={nivel === 2} onClick={() => elegir(2)}>
            <span className="p2-hero__terciario-e-ingreso-2">Terciario e ingreso</span>
          </button>
        </div>
      </section>
    </>
  );
}
