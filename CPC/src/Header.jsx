import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ideal-gas-calc">Ideal Gas Calc</Link></li>
          <li><Link to="/reactor-design">Reactor Design</Link></li>
          <li><Link to="/heat-exchanger-calc">Heat Exchanger Calculations</Link></li>
          <li><Link to="/mass-energy-balance">Mass or Energy Balance Tools</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;