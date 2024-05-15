import Header from "./components/Header";
import Guitar from "./components/Guitar";

import useCart from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    deleteGuitar,
    incrementQuantoty,
    decrementQuantity,
    deleteCart,
  } = useCart();
  return (
    <>
      <Header
        cart={cart}
        deleteGuitar={deleteGuitar}
        deleteCart={deleteCart}
        incrementQuantoty={incrementQuantoty}
        decrementQuantity={decrementQuantity}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((d) => (
            <Guitar
              name={d.name}
              price={d.price}
              key={d.id}
              description={d.description}
              image={d.image}
              id={d.id}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
