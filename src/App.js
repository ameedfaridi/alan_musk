import React from "react";
//import Next from "./components/next";
import Root from "./components/root";
import "./style.scss";

// const getPage = (step, setStep) => {
//   switch (step) {
//     case 0:
//       return <Root setStep={setStep} />;
//     case 1:
//       return <Next setStep={setStep} />;
//     default:
//       return <div>404</div>;
//   }
// };

const Home = () => {
  // const [step, setStep] = React.useState(0);
  return (
    <div>
      {/* {getPage(step, setStep)} */}
      <Root />
    </div>
  );
};

export default Home;
