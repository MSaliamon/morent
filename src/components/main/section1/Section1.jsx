import Car1 from '../../../assets/home-page/png/Car1.png';
import Car2 from '../../../assets/home-page/png/Car2.png';
import Swap from '../../../assets/home-page/svg/Swap.svg';
import './section1.scss';
function Section1() {
  return (
    <section className="section1">
        <div className="section1-container">
          <div className="section1-card">
            <div className="section1-card__box">
              <h2 className="section1-card__box-title">The Best Platform for Car Rental</h2>
              <p className="section1-card__box-text">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
              <button className="section1-card__box-btn">Rental Car</button>
            </div>
            <img src={Car1} alt="Car1" className="section1-card__img" />
          </div>
          <div className="section1-card">
            <div className="section1-card__box">
              <h2 className="section1-card__box-title">Easy way to rent a car at a low price</h2>
              <p className="section1-card__box-text">Providing cheap car rental services and safe and comfortable facilities.</p>
              <button className="section1-card__box-btn">Rental Car</button>
            </div>
            <img src={Car2} alt="Car2" className="section1-card__img" />
          </div>
        </div>
        <div className="section1-container2">
          <div className="section1-box">
            <label className="section1-box__label">
              <input type="radio" name="pickup" value="pickup" className="section1-box__label-input" />
              <p className="section1-box__label-text">Pick - Up</p>
            </label>
            <div className="section1-box__wrap">
              <label className="section1-box__label">
                <p className="section1-box__label-text">Location</p>
                <select name="location" id="" className="section1-box__label-select">
                  <option value="select your city" className="section1-box__label-option">Select your city</option>
                  <option value="Kyiv">Kyiv</option>
                  <option value="khmelnitski">khmelnitski</option>
                  <option value=" lviv">lviv</option>
                </select>
              </label>
              <div className="section1-box__cont">
                <label  className="section1-box__label">
                  <p className="section1-box__label-text">Date</p>
                  <select name="location" id="" className="section1-box__label-select">
                    <option value="select your date">Select your date</option>
                    <option value="Mondey">Mondey</option>
                    <option value="Tueday">Tueday</option>
                    <option value="Wednsday">Wednsday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </label>
              </div>
              <div className="section1-box__cont">
                <label  className="section1-box__label">
                  <p className="section1-box__label-text">Time</p>
                  <select name="location" id="" className="section1-box__label-select">
                    <option value="select your time">Select your time</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="section1-box1">
            <img src={Swap} alt="Swap" className="section1-box1-img" />
          </div>
          <div className="section1-box">
            <label className="section1-box__label">
              <input type="radio" name="pickup" value="pickup" className="section1-box__label-input" />
              <p className="section1-box__label-text">Drop - Off</p>
            </label>
            <div className="section1-box__wrap">
              <div className="section1-box__cont">
                <label  className="section1-box__label">
                  <p className="section1-box__label-text">Location</p>
                  <select name="location" id="" className="section1-box__label-select">
                    <option value="select your city">Select your city</option>
                    <option value="Kyiv">Kyiv</option>
                    <option value="khmelnitski">khmelnitski</option>
                    <option value=" lviv">lviv</option>
                  </select>
                </label>
              </div>
              <div className="section1-box__cont">
                <label  className="section1-box__label">
                  <p className="section1-box__label-text">Date</p>
                  <select name="location" id="" className="section1-box__label-select">
                    <option value="select your date">Select your date</option>
                    <option value="Mondey">Mondey</option>
                    <option value="Tueday">Tueday</option>
                    <option value="Wednsday">Wednsday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </label>
              </div>
              <div className="section1-box__cont">
                <label  className="section1-box__label">
                  <p className="section1-box__label-text">Time</p>
                  <select name="location" id="" className="section1-box__label-select">
                    <option value="select your time">Select your time</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
export default Section1