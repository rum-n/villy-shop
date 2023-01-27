import { useState } from "react";
import Link from "next/link";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleOpen = () => setCartOpen(!cartOpen);
  return (
    <div className="shadow-lg font-kannada">
      <header>
        <div className="container mx-auto px-6 py-5 ">
          <div className="flex items-center justify-between  shadow-bottom	">
            <div className="hidden w-full text-black-600 md:flex md:items-center">
              <span className="mx-1 text-md">VIOLETA BOYADZHIEVA</span>
            </div>
            <div className="flex justify-end w-full">
              <nav
                className={`${
                  menuOpen ? "" : "hidden"
                } sm:flex sm:justify-center sm:items-center`}
              >
                <div className="flex flex-col sm:flex-row">
                  <Link href="/">
                    <a className="mt-3 text-sm text-black-600 hover:underline sm:mx-3 sm:mt-0">
                      Home
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="mt-3 text-sm text-black-600 hover:underline sm:mx-3 sm:mt-0">
                      About me
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="mt-3 text-sm text-black-600 hover:underline sm:mx-3 sm:mt-0">
                      Portfolio
                    </a>
                  </Link>
                  <Link href="/representation">
                    <a className="mt-3 text-sm text-black-600 hover:underline sm:mx-3 sm:mt-0">
                      Representation
                    </a>
                  </Link>
                  <Link href="/products">
                    <a className=" md:flex mt-3 text-sm text-black-600 hover:underline sm:mx-3 sm:mt-0">
                      <span className="mr-1">Shop</span>
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.1344 3.76933C8.592 4.53567 8.4 5.49267 8.4 6.11111V7.33333H15.6V6.11111C15.6 5.49144 15.408 4.53567 14.8668 3.76933C14.3688 3.06533 13.5288 2.44444 12 2.44444C10.4712 2.44444 9.6312 3.06533 9.1344 3.76933ZM18 7.33333V6.11111C18 5.10033 17.712 3.61289 16.8144 2.34178C15.8712 1.00833 14.3112 0 12 0C9.6888 0 8.1288 1.00833 7.1856 2.34178C6.288 3.61289 6 5.10033 6 6.11111V7.33333H1.2C0.88174 7.33333 0.576515 7.4621 0.351472 7.69131C0.126428 7.92053 0 8.2314 0 8.55556C0 8.87971 0.126428 9.19059 0.351472 9.4198C0.576515 9.64901 0.88174 9.77778 1.2 9.77778H1.314L2.406 20.9C2.43575 21.2015 2.57438 21.481 2.79501 21.6842C3.01563 21.8875 3.30251 22 3.6 22H20.4C20.6975 22 20.9844 21.8875 21.205 21.6842C21.4256 21.481 21.5643 21.2015 21.594 20.9L22.686 9.77778H22.8C23.1183 9.77778 23.4235 9.64901 23.6485 9.4198C23.8736 9.19059 24 8.87971 24 8.55556C24 8.2314 23.8736 7.92053 23.6485 7.69131C23.4235 7.4621 23.1183 7.33333 22.8 7.33333H18ZM8.4 13.4444C8.4 13.1203 8.27357 12.8094 8.04853 12.5802C7.82348 12.351 7.51826 12.2222 7.2 12.2222C6.88174 12.2222 6.57652 12.351 6.35147 12.5802C6.12643 12.8094 6 13.1203 6 13.4444V15.8889C6 16.213 6.12643 16.5239 6.35147 16.7531C6.57652 16.9823 6.88174 17.1111 7.2 17.1111C7.51826 17.1111 7.82348 16.9823 8.04853 16.7531C8.27357 16.5239 8.4 16.213 8.4 15.8889V13.4444ZM13.2 13.4444C13.2 13.1203 13.0736 12.8094 12.8485 12.5802C12.6235 12.351 12.3183 12.2222 12 12.2222C11.6817 12.2222 11.3765 12.351 11.1515 12.5802C10.9264 12.8094 10.8 13.1203 10.8 13.4444V15.8889C10.8 16.213 10.9264 16.5239 11.1515 16.7531C11.3765 16.9823 11.6817 17.1111 12 17.1111C12.3183 17.1111 12.6235 16.9823 12.8485 16.7531C13.0736 16.5239 13.2 16.213 13.2 15.8889V13.4444ZM18 13.4444C18 13.1203 17.8736 12.8094 17.6485 12.5802C17.4235 12.351 17.1183 12.2222 16.8 12.2222C16.4817 12.2222 16.1765 12.351 15.9515 12.5802C15.7264 12.8094 15.6 13.1203 15.6 13.4444V15.8889C15.6 16.213 15.7264 16.5239 15.9515 16.7531C16.1765 16.9823 16.4817 17.1111 16.8 17.1111C17.1183 17.1111 17.4235 16.9823 17.6485 16.7531C17.8736 16.5239 18 16.213 18 15.8889V13.4444Z"
                          fill="#D5666E"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </nav>

              <div className="flex sm:hidden">
                <button
                  onClick={handleMenu}
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*
      // This Cart doesn't really work… yet!
      <Cart cartOpen={cartOpen} handleOpen={handleOpen} />
      */}
      <main>{children}</main>
      <footer className="bg-custom-blue flex flex-col items-center justify-center text-center py-5">
        <a
          href="mailto:violetkadimitrovab@gmail.com"
          className="py-2 text-black sm:py-0 underline"
        >
          violetkadimitrovab@gmail.com
        </a>
        <div className="flex w-10 justify-between">
          <p className="py-2 text-black sm:py-0">fb</p>
          <p className="py-2 text-black sm:py-0">in</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
