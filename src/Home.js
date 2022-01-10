import React from "react";
import Form from "./SearchForm";
import Movies from "./Movies";
import Loading from "./loading";
import { useGlobalContext } from "./context";
const Home = () => {
  const { loading } = useGlobalContext();
  return (
    <main>
      <Form />
      {loading ? <Loading /> : <Movies />}
    </main>
  );
};

export default Home;
