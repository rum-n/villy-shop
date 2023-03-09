import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

function ProductsPage({ products, preview }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" text-center mx-auto px-6">
      <h3 className="text-2xl font-medium mt-16">Explore the Collection</h3>
      <h4 className="mt-3 text-sm mb-10">Welcome to my imaginary world.</h4>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        className="w-4/5 mx-auto "
      >
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </Carousel>
      {preview && (
        <button className="shadow-lg rounded-3xl my-10 py-2 px-10 bg-custom-red text-white">
          Shop
        </button>
      )}
    </div>
  );
}

export default ProductsPage;
