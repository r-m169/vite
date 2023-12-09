import React, { useEffect, useState } from 'react';
import FavItem from './components/FavItem';
import { getArticlesFromLocalStorage } from '../../../utils';

export const Favourites = () => {
  const [favouriteArticles, setFavouriteArticles] = useState(getArticlesFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(favouriteArticles));
  }, [favouriteArticles]);

  return (
    <div className='container'>
      <h1>Your Favourites</h1>
      {favouriteArticles.length === 0 ? <p>No favourites</p> : null}
      {favouriteArticles.map((article) => (
        <FavItem
          key={article.pageid}
          pageid={article.pageid}
          title={article.title}
          snippet={article.snippet}
          setFavouriteArticles={setFavouriteArticles}
        />
      ))}
    </div>
  );
};