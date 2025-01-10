import './footer.scss';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <div className="logo">
            <p className="logo__text">MORENT</p>
          </div>
          <p className="footer-box__text">Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <nav className="footer-nav">
          <ul className="footer-nav__list">
            <h3 className="footer-nav__list-title">About</h3>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">How it works</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Featured</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Partnership</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Bussiness Relation</a>
            </li>
          </ul>

          <ul className="footer-nav__list">
            <h3 className="footer-nav__list-title">Community</h3>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Events</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Blog</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Podcast</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Invite a friend</a>
            </li>
          </ul>

          <ul className="footer-nav__list">
            <h3 className="footer-nav__list-title">Socials</h3>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Discord</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Instagram</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Twitter</a>
            </li>
            <li className="footer-nav__item">
              <a href="" className="footer-nav__link">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-container2">
        <p className="footer-container2__text">©2022 MORENT. All rights reserved</p>
        <div className="footer-container2__box">
          <p className="footer-container2__box-text1">Privacy & Policy</p>
          <p className="footer-container2__box-text2">Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer