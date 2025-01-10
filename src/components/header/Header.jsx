import './header.scss';
import search from '../../assets/home-page/svg/search-normal.svg';
import filter from '../../assets/home-page/svg/filter.svg';
import like from '../../assets/home-page/svg/Like.svg';
import Notification from '../../assets/home-page/svg/Notification.svg';
import Dote from '../../assets/home-page/svg/Notif.svg';
import Settings from '../../assets/home-page/svg/Settings.svg';
import User from '../../assets/home-page/png/Profil.png';
function Header() {
  return (
    <>
      <header className="header">
        <div className="header-wrap">
          <div className="logo">
            <p className="logo__text">MORENT</p>
          </div>
          <form className="search">
              <label className="search__wrap">
                <img src={search} alt="search" className="search__wrap-img" />
                <input type="text" placeholder='Search something here' className="search__wrap-input" />
              </label>
              <img src={filter} alt="filter" className="search__img" />
          </form>
        </div>
        <div className="header-user">
          <img src={like} alt="like" className="header-user__heart" />
          <img src={Notification} alt="Notification" className="header-user__bell" />
          <img src={Settings} alt="Settings" className="header-user__settings" />
          <a href="" className="header-user__reges">Sign In</a>
        </div>
      </header>
    </>
  )
}
export default Header