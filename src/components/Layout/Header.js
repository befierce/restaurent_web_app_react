import classes from "./Header.module.css";
import headerImage from '../../assets/food_web_banner_32.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>this is the header</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src = {headerImage}  alt="A table full of delicious food"></img>
      </div>
    </>
  );
};

export default Header;
