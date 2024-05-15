/* eslint-disable no-unused-vars */
import './academy.css';
import IMG from '../../assets/imgs/banner.png';
import { useRef, useState } from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';
import { API } from '../../constant/Data';
import { Alert } from '@mui/material';

const Academy = () => {

 const [country, setCountry] = useState('');
 const [region, setRegion] = useState('');
 const [phone, setPhone] = useState('');
 const [city, setCity] = useState('');
 const [fullname, setFullname] = useState('');
 const [email, setEmail] = useState('');
 const [interest, setInterest] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [message, setMessage] = useState({alert:'', error:false})

 const formRef = useRef();

 const createAcademy = async(e)=>{
    e.preventDefault();
    if(city!=='' && fullname!=='' && email!=='' && interest!=='' && country!=='' && region!=='' && phone.length>8){
      setIsLoading(true);
      const data = {
        email, phone, fullname, interest,
        location:{country, region, city}
      }
      try {
        const res = await axios.post(`${API}academy/create`,data);
        if(res.status===200){
          setMessage({alert:'You have successfully registered', error:false});
          formRef.current.reset();
        }
        else if(res.status === 422){
          setMessage({alert:res.data, error:true})
        }
        else{
          setMessage({alert:'Error occured. Please retry', error:true})
        }
      } catch (error) {
        console.log(error);
        setMessage({alert:'Error occured. Please retry', error:true})
      }finally{
        setIsLoading(false);
      }
    }else{
      setMessage({alert:'Please complete the form', error:true})
    }
 }

  return (
    <div id="academy" className="academy">
      <span className="subtitle">Join Our Academy Today</span>
      <div className="aca-main">
        <span className="aca-text">
          Unlock your full potential and join our academy training group today!
          Gain valuable knowledge, sharpen your skills, and embark on a
          transformative learning journey. Don&#39;t miss this opportunity to
          elevate your expertise and achieve greatness. Sign up now!
        </span>
        <div className="aca-container">
          <img src={IMG} alt="" />
          <div className="aca-right">
            <span className="second-title">Sign up</span>
            <form ref={formRef}>
              <div className="aca-input">
                <span className="sub-text">Enter full name</span>
                <input
                  name="fullname"
                  required
                  className="inp"
                  type="text"
                  placeholder="full name"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="aca-input">
                <span className="sub-text">Enter email</span>
                <input
                  name="email"
                  required
                  className="inp"
                  type="email"
                  placeholder="email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="aca-input">
                <span className="sub-text">Enter phone</span>
                {/* <input
                  required
                  name="phone"
                  className="inp"
                  type="tel"
                  placeholder="phone"
                /> */}
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(e) => setPhone(e)}
                  // inputClass='inp'
                  inputStyle={{ width: "100%" }}
                  containerStyle={{ width: "100%" }}
                  // inputStyle={{paddingLeft:'3rem'}}
                />
              </div>
              <div className="aca-input">
                <span className="sub-text">Select country</span>
                <CountryDropdown
                  classes="inp"
                  value={country}
                  onChange={(e) => setCountry(e)}
                />
              </div>
              <div className="aca-input">
                <span className="sub-text">Select Region</span>
                <RegionDropdown
                  country={country}
                  classes="inp"
                  value={region}
                  onChange={(e) => setRegion(e)}
                />
              </div>
              <div className="aca-input">
                <span className="sub-text">Enter City</span>
                <input
                  name="city"
                  required
                  type="text"
                  className="inp"
                  placeholder="city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="aca-input">
                <span className="sub-text">Select Interest</span>
                <select
                  onChange={(e) => setInterest(e.target.value)}
                  defaultValue=""
                  className="inp"
                  name="interest"
                  id=""
                >
                  <option value="">select</option>
                  <option value="Business Analysis">Business Analysis</option>
                  <option value="Construction">Construction</option>
                  <option value="Customer Service Support">
                    Customer Service Support
                  </option>
                  <option value="Development">Development</option>
                  <option value="Distribution">Distribution</option>
                  <option value="ERP Consultant Procurement">
                    ERP Consultant Procurement
                  </option>
                  <option value="Inventroy">Inventroy</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Retail">Retail</option>
                  <option value="Sales Consultant">Sales Consultant</option>
                  <option value="Wholesale">Wholesale</option>
                </select>
                {/* <input
                  name="interest"
                  required
                  type="text"
                  className="inp"
                  placeholder="area of interest"
                  onChange={(e)=>setInterest(e.target.value)}
                /> */}
              </div>
              {message.alert && (
                <Alert severity={message.error ? "error" : "success"}>
                  {message.alert}
                </Alert>
              )}
              <button
                disabled={isLoading}
                onClick={createAcademy}
                className={isLoading ? "dis-button" : "aca-button"}
              >
                {isLoading ? "Processing" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academy