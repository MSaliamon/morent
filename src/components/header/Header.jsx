import './header.scss';
import search from '../../assets/home-page/svg/search-normal.svg';
import filter from '../../assets/home-page/svg/filter.svg';
import like from '../../assets/home-page/svg/Like.svg';
import Notification from '../../assets/home-page/svg/Notification.svg';
import Settings from '../../assets/home-page/svg/Settings.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';

function Header() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const name = localStorage.getItem('username');
        setUsername(name);
      } else {
        setUser(null);
        setUsername(null);
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('username');
      setUser(null);
      setUsername(null);
    } catch (error) {
      console.error(error);
    }
  };

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
            <a href="" className="search-filter"><img src={filter} alt="filter" className="search__img" /></a>
          </form>
        </div>
        <div className="header-user">
          <img src={like} alt="like" className="header-user__heart" />
          <img src={Notification} alt="Notification" className="header-user__bell" />
          <img src={Settings} alt="Settings" className="header-user__settings" />
          {user ? (
            <>
              <span>{username}!</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="SignUp">Sign Up</Link>
              <Link to="SignIn">Sign In</Link>
            </>
          )}
        </div>
      </header>
    </>
  )
}
export default Header