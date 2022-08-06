import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = React.useState(false);

  const toggleDark = () => setDark((prevDark) => !prevDark);

  return (
    <Layout dark={dark} toggleDark={toggleDark}>
      <Component {...pageProps} dark={dark} />;
    </Layout>
  );
}

export default MyApp;
