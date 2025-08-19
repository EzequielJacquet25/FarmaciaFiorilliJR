import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

// 👉 Lista de productos (puede venir de props, de un fetch o de un archivo)

const Perfumeria = ({ productos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productosPorPagina = 3;

  // 👉 Calcular total de páginas según productos
  const totalPages = Math.ceil(productos.length / productosPorPagina);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  // 👉 Obtener productos de la página actual
  const indexOfLast = currentPage * productosPorPagina;
  const indexOfFirst = indexOfLast - productosPorPagina;
  const productosActuales = productos.slice(indexOfFirst, indexOfLast);

  // 👉 Crear ítems de paginación
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    if (
      number === 1 ||
      number === totalPages ||
      (number >= currentPage - 2 && number <= currentPage + 2)
    ) {
      paginationItems.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handleClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    } else if (
      (number === currentPage - 3 && number > 1) ||
      (number === currentPage + 3 && number < totalPages)
    ) {
      paginationItems.push(
        <Pagination.Ellipsis key={`ellipsis-${number}`} disabled />
      );
    }
  }

  return (
    <div className="secctionMargin container">
      <h1>Perfumería</h1>

      {/* 👉 Renderiza productos de la página actual */}
      <div className="row">
        {productosActuales.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={producto.img}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 👉 Paginación Bootstrap */}
      <Pagination>
        <Pagination.First
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {paginationItems}
        <Pagination.Next
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default Perfumeria;
