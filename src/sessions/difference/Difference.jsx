import './difference.css';
import IMG1 from '../../assets/imgs/DataScience1.png';
import IMG2 from '../../assets/imgs/audit.png';
import IMG3 from '../../assets/imgs/consult_dianostic2.png';

const Difference = () => {
  return (
    <div id='support' className='difference' >
        <span className="subtitle">The Acumen Difference</span>
        <div className="diff-container">
            <div className="diff-row">
                <img src={IMG1} alt="DataScience1" />
                <div className="diff-right">
                    <span className="second-title">We Are A Certified Partner</span>
                    <span className="sub-text">
                        As a certified partner, Acumen Integrated Solutions employs consultants fully certified within Acumatica with years of experience.
                        <br /> <br />
                        With our consultants holding every consultant badge along with many technical badges, our knowledge of Acumatica is unmatched!
                    </span>
                </div>
            </div>

            <div className="diff-row">
                <img src={IMG2} alt="DataScience1" />
                <div className="diff-right">
                    <span className="second-title">We Care For Your Success</span>
                    <span className="sub-text">
                        When partnering with Acumen for your Implementation and Support needs, one thing you can be assured of is we truly care for your success.
                        <br /> <br />
                        We take each endeavor on with an approach that has been seen and appreciated by all our clients to date.
                    </span>
                </div>
            </div>

            <div className="diff-row">
                <img src={IMG3} alt="DataScience1" />
                <div className="diff-right">
                    <span className="second-title">We Are Built On Efficiency</span>
                    <span className="sub-text">
                        Here at Acumen, when we begin each project, we take into consideration what services are needed and the timelines in which deliverables are requested.
                        <br /> <br />
                        It is also quite important to us that we match you and your customer with the right Consultant(s) to ensure a seamless result.
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Difference