import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

export default function Header() {
  const [show, setShow] = useState(true);
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthWindow(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (widthWindow < 750) {
    return (
      <header className="header width-100 fixed z-50">
        {show ? (
          <nav className="padding-4">
            <div className="flex center between width-100 gap-2">
              <div className="logo width-100 flex center">
                <img src={logo} alt="logo" className="logo-img" /> Farmacia
                Fiorilli JR
              </div>

              <span
                className="material-symbols-outlined"
                onClick={() => setShow(false)}
              >
                menu
              </span>
            </div>
          </nav>
        ) : (
          <nav className="padding-4">
            <div className="flex flex-col center width-100 gap-4">
              <div className="logo flex center width-100 flex between alignCenter">
                <img src={logo} alt="logo" className="logo-img" /> Farmacia
                Fiorilli JR
                <span
                  className="material-symbols-outlined"
                  onClick={() => setShow(true)}
                >
                  close
                </span>
              </div>

              <div className="width-100 flex flex-col center gap-4">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/preparados"}>Preparados</Link>
                <Link to={"/quienesSomos"}>Quiénes Somos</Link>

                <Link to={"/especialidades"}>Especialidades</Link>
                <Link to={"/FAQ"}>Recomendaciones</Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    );
  }

  return (
    <header className="header width-100 fixed z-50">
      <nav className="padding-4">
        <div className="flex flex-row alignCenter between width-100 gap-4">
          <div className="logo flex center gap-2">
            <img src={logo} alt="logo" className="logo-img" /> Farmacia Fiorilli
            JR
          </div>

          <div className="flex alignCenter gap-4">
            <Link to={"/"}>Inicio</Link>
            <Link to={"/preparados"}>Preparados</Link>
            <Link to={"/quienesSomos"}>Quiénes Somos</Link>
            <Link to={"/especialidades"}>Especialidades</Link>

            <Link to={"/FAQ"}>Recomendaciones</Link>
          </div>
          {/*
        
          <div className="flex alignCenter">
            <Button variant="primary">Acceso Paciente</Button>
          </div>
        */}
        </div>
      </nav>
    </header>
  );
}
