import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes/shapes'
import Logos from './components/logos/logos'
import { ReactComponent as MakeLogo } from './logo.svg'
import { ReactComponent as ReactLogo } from './react-logo.svg'

function App({ headline, showLogos, backgroundImage }) {
  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>

      {
        (headline.length > 52) ?
          <h2>{headline}</h2> :
          <h1>{headline}</h1>
      }


    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'PRAWIRANEGARA SUBAMBANG HARIS',
  showLogos: true,
  backgroundImage: 'http://ruang-ilmiah.oss-ap-southeast-5.aliyuncs.com/template_cert/2022032308442607.jpg',
}

export default App;
