import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { products } from "./data/products";

const renderAt = (path) => {
  window.history.pushState({}, "", path);
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
};

describe("rutas principales", () => {
  it("muestra la página de inicio", async () => {
    renderAt("/");

    expect(
      await screen.findByRole("heading", {
        name: /Precisión y Cuidado Personalizado en cada Fórmula/i,
      }),
    ).toBeInTheDocument();
  });

  it("muestra el catálogo de preparados", async () => {
    renderAt("/preparados");

    expect(
      await screen.findByRole("heading", { name: "Catálogo de Preparados" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${products.length} preparados disponibles en Todos.`),
    ).toBeInTheDocument();
  });

  it("resuelve una ficha de producto", async () => {
    renderAt("/item/Agua%20Micelar");

    expect(
      await screen.findByRole("heading", { name: "Agua Micelar" }),
    ).toBeInTheDocument();
  });

  it("muestra una página de error para rutas inválidas", async () => {
    renderAt("/ruta-inexistente");

    expect(
      await screen.findByRole("heading", { name: "Fórmula no encontrada" }),
    ).toBeInTheDocument();
  });
});
