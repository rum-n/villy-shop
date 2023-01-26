import { urlFor } from "../utils/sanity";

function LandingHero({}) {
  return (
    <div className="h-full bg-custom-gray pt-16 pb-40">
      <div className="absolute inset-x-0 mt-64 bg-white mx-auto w-9/12 flex flex-col items-center justify-center h-56 z-10 shadow-lg text-center">
        <h3 className="text-2xl font-medium">VIOLETA BOYADZHIEVA</h3>
        <h4>
          Mixed Media Artist with love for surrealism, plants and peace. Welcome
          to my website!
        </h4>
        <button className="shadow-lg rounded-3xl mt-5 py-2 px-10 bg-custom-red text-white">
          Shop
        </button>
      </div>
      <img
        className="z-0"
        src={urlFor(
          "https://cdn.sanity.io/images/d0zrxjy3/production/d3b90bc47e33d68151c6b47cc3073e383a357bb8-1440x558.png"
        )}
        alt="Dragonflies in space"
      />
    </div>
  );
}

export default LandingHero;
