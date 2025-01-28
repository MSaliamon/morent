import './cars.scss'
import Gas from '../../../../assets/home-page/svg/gas-station.svg';
import Drive from '../../../../assets/home-page/svg/drive.svg';
import Person from '../../../../assets/home-page/svg/profile-2user.svg';
import { Link } from 'react-router-dom';

function Cars(props) {
  return (
    <div className="section2-car">
        <div className="section2-car__cont">
            <div className="section2-car__cont-textbox">
                <h3 className="section2-car__cont-textbox-title"> {props.title}</h3>
                <p className="section2-car__cont-textbox-text"> {props.type}</p>
            </div>
            <img src="" alt="" className="section2-car__cont-img" />
        </div>
        <img src={props.img} alt="" className="section2-car__img" />
        <div className="section2-car__cont2">
            <div className="section2-car__cont2-box">
                <img src={Gas} alt="Gas" className="section2-car__cont2-box-img" />
                <p className="section2-car__cont2-box-text"> {props.oil}</p>
            </div>
            <div className="section2-car__cont2-box">
                <img src={Drive} alt="Drive" className="section2-car__cont2-box-img" />
                <p className="section2-car__cont2-box-text">Manual</p>
            </div>
            <div className="section2-car__cont2-box">
                <img src={Person} alt="Person" className="section2-car__cont2-box-img" />
                <p className="section2-car__cont2-box-text"> {props.countPeaple}</p>
            </div>
        </div>
        <div className="section2-car__cont3">
            <p className="section2-car__cont3-text"> {props.price}</p>
            <button className="section2-car__cont3-btn"><Link to="/payment" className="section2-car__cont3-btn-text">Rent Now</Link></button>
        </div>
    </div>
  )
}

export default Cars
