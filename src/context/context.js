import React, { useState } from "react";

const Context = React.createContext({
  photos: [],
  photosHandler: function (props) {},
});

export const ContextProvider = (props) => {
  const [photos, setPhotos] = useState([]);

  const photosHandler = (props) => {
    setPhotos(props);
  };
  const contextValue = {
    photos: photos,
    photosHandler: photosHandler,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default Context;
