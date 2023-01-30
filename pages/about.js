import { useRouter } from "next/router";
import { urlFor } from "../utils/sanity";

function About({ pageData, preview, slug }) {
  const router = useRouter();

  return (
    <div>
      <div className="w-2/4 mx-auto text-center my-16">
        <h1 className="text-xl mb-5">Artist Bio</h1>
        <p>1988 - Born, Sofia</p>
        <p>2007 - Graduates from SGSAG with Park Construction</p>
        <p>
          2012 - Graduates MA Landscape Architecture, University of Forestry
        </p>
        <p>2014 - Graduates in Graphics Design Second Degree, FNTS</p>
        <p>
          2015-2016 - Lives and works in Freiburg (Germany) as entry level
          Landscape Architect
        </p>
        <p>2017 - Starts independent work as a freelance artist</p>
        <p>Feb. 2017 - Exhibition in Coshare Hive, Sofia</p>
        <p>October 2019 - First Solo Exhibition, "Plus Tova", Sofia</p>
      </div>
      <div className="bg-custom-blue h-64">
        <img
          className="mx-auto h-64"
          src={urlFor(
            "https://cdn.sanity.io/images/d0zrxjy3/production/5d1f6bcb78362db9386962810603b66463eba15e-938x440.png"
          )}
          alt="Dragonflies in space"
        />
      </div>
      <div className="bg-white">
        <div className="w-3/5 mx-auto my-20">
          <h1 className="text-xl mb-5 text-center">Artist Statement</h1>
          <p className="text-justify">
            I believe the world is full of so much intriguing forms and
            creatures and I think art is one more opportunity for us to see
            their beauty, to connect with them and maybe sometimes feel
            something more. Art is everywhere and it answers the existential
            question "Is there anything more to it?". Mostly art is mostly a
            mirror, you see in it yourself, but not the memory of you in your
            head, but the full picture with all the details.
          </p>
        </div>
      </div>
      <div className="bg-custom-blue flex">
        <div className="w-2/4 mx-auto py-10">
          <h1 className="text-2xl mb-5">FEATURES</h1>
          <p>Doodlewash.com blog</p>
          <p className="mb-5">2017</p>
          <p>artgallery.bg blog</p>
          <p className="mb-5">2017</p>
          <p>creativu.org</p>
          <p className="mb-5">2017</p>
          <p>tallgallery</p>
          <p className="mb-5">2017</p>
        </div>

        <div className="absolute hidden md:inline right-0 mr-64 mt-32">
          <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50.4607"
              cy="50.1013"
              r="49"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="absolute hidden md:inline right-0 mr-64 mt-64">
          <svg
            width="80"
            height="76"
            viewBox="0 0 80 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M73.3142 1.35627C76.345 0.812014 78.8283 3.7527 77.7843 6.64951L54.2939 71.8277C53.2499 74.7245 49.4615 75.4049 47.4748 73.0523L2.77401 20.1199C0.787306 17.7674 2.09232 14.1464 5.12305 13.6021L73.3142 1.35627Z"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="absolute hidden md:inline right-0 mr-40 mt-32">
          <svg
            width="123"
            height="127"
            viewBox="0 0 123 127"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.4316 5.11909C25.0178 2.0962 28.6566 0.841485 30.9814 2.8606L119.905 80.0916C122.23 82.1108 121.497 85.8894 118.586 86.8931L7.24004 125.288C4.32904 126.291 1.42306 123.767 2.00926 120.745L24.4316 5.11909Z"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
