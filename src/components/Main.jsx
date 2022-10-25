function Main({ products }) {




  return (
    <main>{
      products.map(products => {

        return (
          <>
            <div>
              <img src="{product.image}" alt="" />
            <h1>{products.title}</h1>
            <p>{products.description}</p>
            <p>{products.price}</p>
            <p>{products.category}</p>
            </div>
          </>
        )
      })
    }

    </main>
  );
}
export default Main;