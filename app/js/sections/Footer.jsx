import React from 'react';

// -- Styles
import '../../sass/sections/footer.scss';

/* -- Hierarchy
  - App
    - *Footer*
*/

/*
TODO:
- Build footer
*/

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-content">
          <p>A random solution for organizing our stuff made by Jade. Based on the original project of <a href="https://github.com/jadef/gold-miner">Gold Miner</a>.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
