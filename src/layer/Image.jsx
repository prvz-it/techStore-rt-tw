import React from "react";
import { Link } from "react-router-dom";

const Image = ({to, src}) => {
  return (
    <Link to={to}>
      <img src={src} alt={src} />
    </Link>
  );
};

export default Image;
