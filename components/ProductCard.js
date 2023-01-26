import Link from "next/link";
import { urlFor } from "../utils/sanity";

function ProductCard({ _id, title, mainImage, slug, defaultProductVariant }) {
  return (
    <Link href={`/products/${slug.current}`}>
      <div className="border border-black w-4/5 max-w-sm mx-auto rounded-sm">
        <div
          className="flex items-end justify-end h-56 bg-cover"
          style={{
            backgroundImage: `url('${urlFor(mainImage).auto("format")}`,
          }}
        ></div>
        <div className="text-left px-5 py-3">
          <h3>"{title}"</h3>
          <span className=" mt-2">{defaultProductVariant?.price} BGN</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
