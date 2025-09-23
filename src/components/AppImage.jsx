import React from 'react';
import AdhishProfile from '../assets/images/AdhishProfile.jpeg';

function Image({
  src,
  alt = "Image Name",
  className = "",
  ...props
}) {

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = AdhishProfile
      }}
      {...props}
    />
  );
}

export default Image;
