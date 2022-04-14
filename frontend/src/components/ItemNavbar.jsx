import React from "react";
import "../styles/Navbar.scss";
// import OngletNavbar from "./OngletNavbar";

export default function ItemNavbar({ className, image, alt }) {
  return (
    <div>
      <img className={className} src={image} alt={alt} />
    </div>
  );
}
