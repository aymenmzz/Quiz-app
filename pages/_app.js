import "../styles/globals.css";
import React from "react";
import Layout from "../components/Layout";
import useSWR from "swr";
import Loading from "react-loading";


const fetcher = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
  );
  const data = await response.json();
  return data;
};

function MyApp({ Component, pageProps }) {
  const { data, error } = useSWR("fetch", fetcher);
  
  if(!data) return <Loading />;

  const [dark, setDark] = React.useState(false);

  const toggleDark = () => setDark((prevDark) => !prevDark);

  return (
    <Layout dark={dark} toggleDark={toggleDark}>
      <Component {...pageProps} dark={dark} quiz={data} />
    </Layout>
  );
}

export default MyApp;
