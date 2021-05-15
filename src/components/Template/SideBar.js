import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Summer Nairn</h2>
        <p><a href="mailto:snairn@kent.edu">snairn@kent.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Summer. I like architecting residential structures.
        I am currently in my final year studying Architecture at [Kent State University](https://www.kent.edu/caed). I like dogs, have a samoyed named Loki, and
        have an awesome boyfriend (He made the website so I don't have a say in that being included).
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Summer Nairn <Link to="/">summer-nairn.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
