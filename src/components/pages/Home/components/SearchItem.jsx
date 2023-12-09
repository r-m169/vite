import React from 'react';

export default function SearchItem({ title, snippet, pageid, setFavouriteArticles, isFavourite }) {
  const addToFav = () => {
    setFavouriteArticles(prev => [...prev, { pageid, title, snippet }]);
  };

  const removeFromFavourite = () => {
    setFavouriteArticles(prev => prev.filter(item => item.pageid !== pageid));
  };

  return (
    <div>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
      <div className='btns-row'>
        <a href={`https://en.wikipedia.org/?curid=${pageid}`} target='_blank' rel='noopener noreferrer'>
          Read More
        </a>
        {isFavourite ? (
          <button onClick={removeFromFavourite}>Remove From Favourites</button>
        ) : (
          <button onClick={addToFav}>Add To Favourites</button>
        )}
      </div>
    </div>
  );
}