import { urlFor } from "../utils/sanity";

function ContactSection({}) {
  return (
    <div className="h-full bg-custom-blue pt-8 pb-40 text-center font-kannada">
      <h3 className="text-2xl font-kannada mb-8">Contact</h3>
      <div className="absolute inset-x-0 lg:mt-64 sm:mt-12 bg-white mx-auto w-9/12 flex flex-col items-center justify-center z-10 shadow-lg text-center pb-10">
        <div className="flex flex-col w-full ">
          <div className="flex w-full pt-10">
            <input
              className="h-8 bg-custom-gray2 rounded-sm w-full shadow-inner px-2 ml-10 mr-10"
              placeholder="Name"
            />
            <input
              className="h-8 bg-custom-gray2 rounded-sm w-full shadow-inner px-2 mr-10"
              placeholder="Email"
            />
          </div>
          <textarea
            className="h-12 bg-custom-gray2 rounded-sm shadow-inner px-2 mx-10 my-5"
            placeholder="Message"
          />
        </div>
        <button className="shadow-xl rounded-md mt-8 py-2 px-10 bg-black text-white font-kannada">
          Send
        </button>
      </div>
      <img
        className="z-0"
        src={urlFor(
          "https://cdn.sanity.io/images/d0zrxjy3/production/4aee883064b49d8508dbd1f0ba70b01c524e86b0-1440x528.png"
        )}
        alt="Dragonflies in space"
      />
    </div>
  );
}

export default ContactSection;
