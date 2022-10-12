import background from "../assets/maintenance-bg.png";

const MaintenanceView = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2
        style={{
          paddingTop: "2.5rem",
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: "2.5rem",
        }}
      >
        {`Sorry, we're down for scheduled maintenance. Please check back soon.`}
      </h2>
      <footer
        style={{
          backgroundColor: "#282c34",
          minHeight: "10vh",
          width: "100%",
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bottom: "0px",
          fontSize: "20px",
        }}
      >
        <a href="/maintenance-schedule" style={{ marginTop: "1rem" }}>
          Maintenance Schedule
        </a>
      </footer>
    </div>
  );
};

export default MaintenanceView;
