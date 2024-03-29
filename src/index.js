import './styles/style.scss';
import './assets/img/logo.svg';
import './assets/img/Anniversary.png';
import './assets/img/Birthday.png';
import './assets/img/blog.png';
import './assets/img/home.png';
import './assets/img/LogoFooter.png';
import './assets/img/Thanks.png';
import "./assets/img/Valentine's.png";
import './assets/img/Christmas.png';
import burger from './js/burger';
import blogAccordion from './js/blog-accordion';
import blogCart from './js/blog-cart';
import scroll from './js/scroll';
import notWorking from './js/not-working';

function start() {
  burger();
  blogAccordion();
  blogCart();
  scroll();
  notWorking();
}

start();
