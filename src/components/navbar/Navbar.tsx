import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <header>
      <div className='menu__btn' onClick={() => setOpen(!open)}>
        <span
          className={
            open ? 'menu__btn--burger menu--open' : 'menu__btn--burger'
          }
        />
      </div>
      <nav className={open ? 'nav' : 'nav menu--open'}>
        <ul className={open ? 'menu__nav menu--open' : 'menu__nav'}>
          <li
            className={open ? 'menu__nav--item menu--open' : 'menu__nav--item'}
          >
            <a className='menu__nav--link' href='/'>
              home
            </a>
          </li>
          <li
            className={open ? 'menu__nav--item menu--open' : 'menu__nav--item'}
          >
            <a className='menu__nav--link' href='/projects'>
              my projects
            </a>
          </li>
          <li
            className={open ? 'menu__nav--item menu--open' : 'menu__nav--item'}
          >
            <a className='menu__nav--link' href='/about'>
              about me
            </a>
          </li>
          <li
            className={open ? 'menu__nav--item menu--open' : 'menu__nav--item'}
          >
            <a className='menu__nav--link' href='/contact'>
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
