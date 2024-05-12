import "./nextStep.css";
import IMG from "../../assets/imgs/612eafd7b8e0c762504bfd02c18f48c30f2facf5-4392x4031.png";
import { FaRegCheckCircle } from "react-icons/fa";

const NextStep = () => {
  return (
    <div id="industry" className="nextstep">
      <div className="next-top">
        <span className="subtitle">Take The Next Step in Working With Us</span>
        <span className="next-text">
          Discover the transformative impact our expertise can have on your
          business as we help you navigate challenges, seize opportunities, and
          achieve remarkable growth. Connect with us today and let&#39;s embark
          on a journey together towards success!
        </span>
      </div>
      <div className="next-down">
        <img src={IMG} alt="" />
        <div className="next-right">
          <span className="mini-title">
            We help companies from many industries with various needs:
          </span>
          <div className="next-container">
            <div className="one-row">
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Core Financials</span>
              </div>
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Advanced Financials</span>
              </div>
            </div>
            <div className="one-row">
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Construction</span>
              </div>
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Project Management</span>
              </div>
            </div>
            <div className="one-row">
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Manufacturing</span>
              </div>
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">CRM</span>
              </div>
            </div>
            <div className="one-row">
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Field Service</span>
              </div>
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Payroll</span>
              </div>
            </div>
            <div className="one-row">
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Distribution</span>
              </div>
              <div className="half-row">
                <FaRegCheckCircle className="next-icon" />
                <span className="content-text">Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
