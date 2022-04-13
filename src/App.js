import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes/shapes'
import Logos from './components/logos/logos'
import { ReactComponent as MakeLogo } from './logo.svg'
import { ReactComponent as ReactLogo } from './react-logo.svg'

function App({ headline, showLogos, backgroundImage }) {
  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>

      <h1>{headline}</h1>

    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'Prawiranegara Subambang',
  showLogos: true,
  backgroundImage: 'http://ruang-ilmiah.oss-ap-southeast-5.aliyuncs.com/template_cert/template02.png',
}

export default App;
