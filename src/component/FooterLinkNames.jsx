import React from "react";
import { Link } from "react-router-dom";

const FooterLinkNames = ({ names }) => {
  return (
    <div>
      {names.map((link, index) => ( 
        <div key={index} className="flex flex-col">
          <h2 className="mb-1 text-blue-700">{link.title}</h2>

          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default FooterLinkNames;
