import React from "react";
import spaceX from "../images/spaceX.png";
import arrowDown from "../images/whitearrrow.png";
import bg from "../images/bg1.png";

const Root = () => {
  const [step, setStep] = React.useState(0);
  const [backToHome, setBackToHome] = React.useState(false);
  return (
    <Stepper step={step}>
      <section className="mainDiv">
        {backToHome && (
          <div className="forTransition">
            <img src={bg} className="image" />
          </div>
        )}
        <div className="firstPage">
          <Header isTransition={false} />
          <Footer onClick={() => setStep(1)} />
        </div>
      </section>
      <section>
        <section id="main">
          <div className="main"></div>
          <Header isTransition={true} />
          <div>
            <div className="nextSection">
              <a href="#mainDiv" onClick={() => setStep(0)}>
                Home
              </a>
              <a href="#lastpage">About</a>
            </div>
          </div>
        </section>
        <section id="lastpage">
          <div className="lastpage">
            <div className="sideBar">
              <a href="#main">^</a>
              <h5>About Musk</h5>
            </div>
            <div className="content">
              <p>
                “You want to wake up in the morning and think the future is
                going to be great - and that’s what being a spacefaring
                civilization is all about. It’s about believing in the future
                and thinking that the future will be better than the past. And I
                can’t think of anything more exciting than going out there and
                being among the stars.”
                <br />
                <br />
                -Elon Musk
              </p>
            </div>
          </div>
        </section>
      </section>
    </Stepper>
  );
};

export default Root;

export const Footer = ({ className = "", ...props }) => {
  return (
    <div className={className}>
      <div className="footer grid">
        <a
          style={{
            textDecoration: "none",
            color: "rgba(255,255,255,0.7)",
            border: "none",
            cursor: "pointer",
          }}
          {...props}
        >
          <div className="grid" {...props}>
            <p style={{ fontSize: "0.6rem", marginBottom: "-1rem" }}>TAP</p>
            <img src={arrowDown} width="50%" />
          </div>
        </a>
      </div>
    </div>
  );
};

export const Header = ({ isTransition }) => {
  return (
    <div className="header">
      <img src={spaceX} width="30%" />
      <h5 className={isTransition ? "animateText" : "headline"}>
        MAKING HUMANITY MULTIPLANETARY
      </h5>
    </div>
  );
};

const Stepper = ({ children, step }) => {
  const reactChildren = React.Children.toArray(children);
  const currenChild = reactChildren[step];
  return <div>{currenChild}</div>;
};
