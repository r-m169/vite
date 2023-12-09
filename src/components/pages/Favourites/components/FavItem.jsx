import React, { useEffect, useState } from "react";
import RemovalAlert from "./RemovalAlert";
import { createPortal } from 'react-dom';

export default function FavouriteItem({ pageid, title, snippet, setFavouriteArticles }) {
  const [showAlert, setShowAlert] = useState(false);

  const RemoveFromFavourite = () => {
    setFavouriteArticles(prev => prev.filter(item => item.pageid !== pageid));
  };

  const showRemovalAlert = () => {
    setShowAlert(true);
    document.body.classList.add("hide-overflow--removal-alert");
  };

  const closeAlert = () => {
    setShowAlert(false);
    document.body.classList.remove("hide-overflow--removal-alert");
  };

  useEffect(() => {
    return () => {
      closeAlert();
    };
  }, []);

  const handleReadMore = () => {
    window.open(`https://en.wikipedia.org/?curid=${pageid}`, '_blank');
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: snippet }}></div>
        <div className='btns-row'>
          <button onClick={handleReadMore}>Read More</button>
         <br />
          <button onClick={showRemovalAlert}>Remove From Favourites</button>
        </div>
      </div>
      {showAlert && createPortal(
        <RemovalAlert
          RemoveFromFavourite={RemoveFromFavourite}
          closeAlert={closeAlert}
        />,
        document.body
      )}
    </>
  );
}