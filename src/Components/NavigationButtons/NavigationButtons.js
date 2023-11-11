import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slices/productSlice";
import { Link } from "react-router-dom";

export const NavigationButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex item-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
                <Link to={"/filteredProducts/"+button}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="hove:bg-green-300 duration-300 ease-in-out"
                onClick={() => dispatch(filterProducts(button))}
              >
                {button}
              </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-300 p-2 w-[55%] mx-auto rounded">
        <h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
          ***DISCOUNT UPTO 50% OFF***
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
};
