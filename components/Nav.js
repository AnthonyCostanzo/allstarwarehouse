const li_styles = "cursor-pointer hover:font-bold min-w-max";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/Link";
const Nav = () => (
  <>
    <Link href="/" passHref>
      <AiOutlineHome
        className="absolute left-5 top-4 cursor-pointer"
        size={24}
      />
    </Link>
    <div className="flex justify-end pt-5">
      <ul className="flex justify-around gap-3 pr-5">
        {/* <li className={li_styles}>ADD NEW ITEM</li> */}
        <li className={li_styles}>
          <Link href="/order">ORDERS</Link>
        </li>
        <li className={li_styles}>
          <Link href="/login">LOGIN</Link>
        </li>
      </ul>
    </div>
  </>
);

export default Nav;
