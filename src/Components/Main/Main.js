import { Slider } from "../Slider/Slider";
import { Navbar } from "../Navbar/Navbar";
import { NavigationButtons } from "../NavigationButtons/NavigationButtons";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider/>
      <NavigationButtons/>
    </div>
  );
};
