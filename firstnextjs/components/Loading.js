import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center>
      <div
      // styles={{
      //   display: "flex",
      //   height: "100vh",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        {/* <img
          src="https://assets.nflxext.com/ffe/siteui/allow-robots/contentSampling/seo-watch-free-link-preview.jpg"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        /> */}
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
};

export default Loading;
