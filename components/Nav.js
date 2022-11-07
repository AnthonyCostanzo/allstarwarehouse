const li_styles = "cursor-pointer hover:font-bold min-w-max";
import Link from "next/Link";
const Nav = () => (
  <div className="flex justify-end pt-5">
    <ul className="flex justify-around gap-3 pr-5">
      {/* <li className={li_styles}>ADD NEW ITEM</li> */}
      <li className={li_styles}>ORDERS</li>
      <li className={li_styles}>
        <Link href="/login">LOGIN</Link>
      </li>
    </ul>
  </div>
);

export default Nav;
