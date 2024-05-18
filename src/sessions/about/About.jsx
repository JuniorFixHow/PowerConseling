import './about.css'
import ABOUT  from '../../assets/imgs/data-science.svg';

const About = () => {
  return (
    <div id="aboutus" className="about">
      <span className="subtitle">About Us</span>
      <span className="text-content">
        We are a team of passionate innovators dedicated to creating
        transformative technology solutions. With a wealth of experience and a
        commitment to excellence, we strive to push the boundaries of what&#38;s
        possible and deliver exceptional value to our clients. Our mission is to
        empower businesses and individuals to achieve their goals through the
        power of cutting-edge software and services.
      </span>
      <div className="about-content">
        <div className="about-left">
          <img src={ABOUT} alt="" />
        </div>
        <div className="about-right">
          <span className="sub-text">
            AcuPower Group is a leading provider of comprehensive business
            solutions, serving clients across a wide range of industries. With
            expertise spanning software development, training, CRM, business
            analysis, and consulting, we are dedicated to empowering
            organizations to achieve their full potential.
            <br /> <br />
            Our seasoned team of
            professionals brings a wealth of knowledge and experience to the
            table, enabling us to craft tailored solutions that address the
            unique challenges our clients face. From custom software development
            to strategic business consulting, we leverage the latest
            technologies and best practices to drive measurable results.
            <br /> <br />
            At the
            heart of AcuPower Group lies a steadfast commitment to innovation
            and excellence. We are continuously exploring new ways to enhance
            our services, ensuring that our clients always have access to the
            most cutting-edge tools and strategies to stay ahead of the curve.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About