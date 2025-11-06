export default function ProductCard({ producto }) {
  return (
    <div
      className="rounded-2xl shadow-custom p-4 flex flex-col items-center hover:scale-105 transition-transform duration-200 ease-in-out"
      style={{
        backgroundColor: "var(--color-white)",
        border: `1px solid var(--color-grey-5)`
      }}
    >
      {/* Imagen */}
      <div
        className="w-full h-48 overflow-hidden rounded-xl mb-3 flex items-center justify-center"
        style={{ backgroundColor: "var(--color-white-2)" }}
      >
        <img
          src={producto.img}
          alt={producto.nombre}
          className="object-contain max-h-full max-w-full"
          loading="lazy"
        />
      </div>

      {/* Nombre */}
      <h2
        className="text-lg font-semibold mb-1 text-center"
        style={{ color: "var(--color-grey-2)" }}
      >
        {producto.nombre}
      </h2>

      {/* Precio */}
      <p
        className="text-base font-bold"
        style={{ color: "var(--color-primary)" }}
      >
        {producto.precio}
      </p>
    </div>
  );
}
