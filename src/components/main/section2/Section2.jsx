import Cars from './cars/Cars'
import './section2.scss'
import Cars1 from '../../../assets/home-page/png/car.png'
import Cars2 from '../../../assets/home-page/png/car(1).png'
import Cars3 from '../../../assets/home-page/png/car(2).png'
import Cars4 from '../../../assets/home-page/png/car(3).png'
import Cars5 from '../../../assets/home-page/png/car(5).png'
import Cars6 from '../../../assets/home-page/png/car(6).png'
import Cars7 from '../../../assets/home-page/png/car(7).png'
import Cars8 from '../../../assets/home-page/png/car(8).png'
import Cars9 from '../../../assets/home-page/png/car(9).png'
function Section2() {
  return (
    <section className="section2">
        <div className="section2-container">
            <p className="section2-container__text">Popular Car</p>
            <a href="" className="section2-container__link">View All</a>
        </div>
        <div className="section2-container2">
            <Cars title="Koenigsegg" type="Sport" img={Cars1} oil="90L" countPeaple="2 People" price="$99.00/ day" />
            <Cars title="Nissan GT - R" type="Sport" img={Cars2} oil="80L" countPeaple="2 People" price="$80.00/ day" />
            <Cars title="Rolls - Royce" type="Sedan" img={Cars3} oil="70L" countPeaple="4 People" price="$96.00/ day" />
            <Cars title="Nissan GT - R" type="Sport" img={Cars2} oil="80L" countPeaple="2 People" price="$80.00/ day" />
            <Cars title="All New Rush" type="SUV" img={Cars4} oil="70L" countPeaple="6 People" price="$72.00/ day" />
            <Cars title="CR  - V" type="SUV" img={Cars5} oil="80L" countPeaple="6 People" price="$80.00/ day" />
            <Cars title="All New Terios" type="SUV" img={Cars6} oil="90L" countPeaple="6 People" price="$74.00/ day" />
            <Cars title="CR  - V" type="SUV" img={Cars7} oil="80L" countPeaple="6 People" price="$80.00/ day" />
            <Cars title="MG ZX Exclusice" type="Hatchback" img={Cars8} oil="70L" countPeaple="4 People" price="$80.00/ day" />
            <Cars title="New MG ZS" type="SUV" img={Cars9} oil="70L" countPeaple="4 People" price="$80.00/ day" />
            <Cars title="MG ZX Exclusice" type="Hatchback" img={Cars8} oil="70L" countPeaple="4 People" price="$80.00/ day" />
            <Cars title="New MG ZS" type="SUV" img={Cars9} oil="70L" countPeaple="4 People" price="$80.00/ day" />
        </div>
        <button className="section2__btn">Show more car</button>
    </section>
  )
}

export default Section2