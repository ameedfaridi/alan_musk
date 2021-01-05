import { Header } from "../root";

const Next = () => {
  return (
    <div className="main">
      <Header isTransition={true} />
      <div
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="nextSection"></div>
      </div>
    </div>
  );
};

export default Next;
