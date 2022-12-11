import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
const Layout = ({ title, description, children }) => {
  title = title != undefined && title.length ? title : "All Star Management";
  description =
    description != undefined && title.lengthdescription.length
      ? description
      : "Warehouse management application";
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <>
        <Nav />
        {children}
      </>
    </>
  );
};

export default Layout;
