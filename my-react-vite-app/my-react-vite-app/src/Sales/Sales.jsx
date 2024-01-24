import React from "react";
import { Link } from "react-router-dom";
import sale from "../../public/images/products/prod10.jpg"
// import Image from "../../designLayouts/Image";

const Sales = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <img className="h-full w-full object-cover" src={sale} />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <img className="h-full w-full object-cover" src={sale} />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <img
              className="h-full w-full object-cover"
              src={sale}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sales;
