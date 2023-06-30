import AuthContext from "../../context/AuthContext";
import React, { useContext } from "react";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import AcceptRequestFeature from "./AcceptRequestFeature/AcceptRequestFeature";
import FeatureSection from "./FeatureSection/FeatureSection";
import Hero from "./Hero/Hero";
import SectionA from "./SectionA/SectionA";

const Homepage = () => {
  // let { authTokens, logoutUser, user } = useContext(AuthContext);
  // console.log(user);

  //   useEffect(() => {
  //     getNotes();
  //   }, []);

  //   let getNotes = async () => {
  //     let response = await fetch("http://127.0.0.1:8000/api/notes/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + String(authTokens.access),
  //       },
  //     });
  //     let data = await response.json();

  //     if (response.status === 200) {
  //       setNotes(data);
  //     } else if (response.statusText === "Unauthorized") {
  //       logoutUser();
  //     }
  //   };

  return (
    <>
      <Header isHomepage={true} />
      <div
        style={{
          backgroundColor: "var(--primary-bg-color)",
          paddingBottom: "10rem",
        }}
      >
        <Hero />
        <SectionA />
        <FeatureSection />
        <AcceptRequestFeature />
      </div>
      <Footer isHomepage={true} />
    </>
  );
};

export default Homepage;
