import { Title } from "../styles";

import { useSelector } from "react-redux";
import { useState } from "react";

import BakeryItem from "./BakeryItem";

import SearchBar from "./SearchBar";

const BakeryList = () => {
  const bakeries = useSelector((state) => state.bakeries.bakeries);

  const [query, setQuery] = useState("");

  const bakeryList = bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Title>{bakeryList}</Title>
    </div>
  );
};

export default BakeryList;
