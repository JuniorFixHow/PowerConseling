/* eslint-disable react/no-unescaped-entities */
import "./home.css";
import IMG from "../../assets/imgs/solutions-backround-1.png";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-container">
        <div className="home-left">
          <h1 className="title">
            We are a global digital services and solutions provider.
          </h1>
          <a href="#services">
            <button>Learn More</button>
            <img
              className="home-img"
              src={IMG}
              alt="startup-3267505_1920.jpg"
            />
          </a>
        </div>
        <div className="home-center">
          <img src={IMG} alt="startup-3267505_1920.jpg" />
        </div>
        <div className="home-right">
          <span className="welcome-text home-text">
            <b>Why Choose PowerXcel Solutions for ERP Training?</b>
            <br /> <br />
            PowerXcel Solutions
            offers a comprehensive and structured approach to ERP training,
            ensuring participants gain in-depth knowledge and practical
            experience. Here are the key benefits and features of PowerXcel
            Solutions' ERP training programs:
            <br />
            🗸 Diverse ERP System Training
            Multi-Platform Expertise
            <br />
            🗸 Comprehensive Course Offerings Beginner to
            Advanced Levels
            <br />
            🗸 Hands-On Learning Real-World
            Projects
            <br />
            <span className="hidden" >
            🗸 Expert Instructors
            Industry Veterans
            <br />
            🗸 Flexible Learning Options Online and In-Person
            Training
            <br />
            🗸 Certification and Career Support
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
