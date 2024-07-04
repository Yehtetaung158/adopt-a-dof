import React from 'react';

const CatSingleImage = ({i}) => {
    // console.log(i.url)
  return (
    <div>
        <img src={i.url} alt={i.id} />
    </div>
  );
};

export default CatSingleImage;
