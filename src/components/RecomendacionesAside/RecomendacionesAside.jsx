import "./RecomendacionesAside.css";
import RecomendacionesCard from "./RecomendacionesCard";

export default function RecomendacionesAside({ productosR }) {
  return (
    <aside className="recommendations-aside">
      <div className="recommendations-aside-sticky">
        <h3 className="recommendations-aside-title">Recomendaciones para ti</h3>

        <div className="recommendations-aside-list">
          {productosR.map((item) => (
            <div key={item.nombre}>
              <RecomendacionesCard
                image={item.img}
                alt={item.nombre}
                title={item.nombre}
                description={item.compo}
                link={item.nombre}
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
