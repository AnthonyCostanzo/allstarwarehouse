import Head from "next/head";

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
      <>{children}</>
    </>
  );
};

export default Layout;
