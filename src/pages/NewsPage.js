import React from 'react';
import Categories from "../components/Cartegories";
import NewsList from "../components/NewsList";

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';

  return (
    <>
     <Categories />
     <NewsList category={category} />
    </>
  );
};

export default NewsPage;