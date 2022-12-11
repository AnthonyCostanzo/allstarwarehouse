const li_styles = "cursor-pointer hover:font-bold min-w-max";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import { Store } from "../utils/store";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Menu } from "@headlessui/react";
import DropDownLink from "./DropDownLink";

const Nav = () => {
  const [isCartOpen, setCartIsOpen] = useState(false);
  const router = useRouter();
  const { status, data: session } = useSession();
  const [hasWindow, setHasWindow] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const toggleProfileMenuOpen = () => {
    setProfileMenuOpen((prevState) => !prevState);
  };

  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(Store);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setCartQuantity(cartItems.length);
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, [cartItems.length, cartItems]);

  const toggleCart = () => {
    setCartIsOpen((prevState) => !prevState);
  };

  const checkoutHandler = () => {
    router.push("/cart");
  };
  const logoutClickHandler = () => {
    Cookies.remove("cartItems");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    hasWindow && (
      <nav className="shadow-lg">
        {/* <Link href="/" passHref>
      <AiOutlineHome
        className="absolute left-5 top-4 cursor-pointer"
        size={24}
      />
    </Link> */}
        <Link href="/" passHref>
          <h1 className="text-Xxl hover:font-bold inline-block text-center mt-4 ml-16 absolute  ">
            All Star Warehouse
            <span className="absolute top-1 ml-[.5px]">
              <AiFillStar className="text-sky-500" size={20} />
            </span>
          </h1>
        </Link>
        <div className="flex justify-end pt-5 w-11/12 ">
          <ul className="flex justify-around gap-5 pr-10">
            {/* <li className={li_styles}>ADD NEW ITEM</li> */}
            <li className={li_styles}></li>
            <li>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block ">
                  <Menu.Button className={"text-blue-500"}>
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute grid bg-opacity-80 right-0 bg-white p-1 rounded-md origin-top-right shadow-lg w-56">
                    <Menu.Item>
                      <DropDownLink href="/profile">Profile</DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropDownLink href="/order-history">
                        Order History
                      </DropDownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="#" onClick={logoutClickHandler}>
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
            <div className="relative">
              <li className={`${li_styles} relative`}>
                <button onClick={toggleCart}>
                  <AiOutlineShoppingCart size={24} />
                  {cartItems.length > 0 && (
                    <span className="absolute bottom-5 left-6">
                      {cartQuantity}
                    </span>
                  )}
                </button>
              </li>
              {isCartOpen && cartItems.length > 0 && (
                <div className="bg-opacity-80 border-[1px] border-yellow-600 h-72 text-white overflow-scroll z-10 bg-black p-5 w-80 space-y-2 absolute right-0.5">
                  {cartItems.map((item) => {
                    return (
                      <div key={item.name} className="flex">
                        <div className="w-1/2 relative h-24">
                          <Image src={item.image} alt={item.name} fill />
                        </div>
                        <div className="ml-2">
                          <h3 className="min-w-max">Name: {item.name}</h3>
                          <p>Price: ${item.price}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-center mt-2">
                    <button
                      onClick={checkoutHandler}
                      className="bg-white w-8/12 text-black hover:bg-black hover:text-white transition-all duration-150 hover:border-[1px] hover:border-white "
                    >
                      CHECK OUT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
      </nav>
    )
  );
};

export default Nav;
