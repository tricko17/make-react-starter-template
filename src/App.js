import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes/shapes'
import Logos from './components/logos/logos'
import { ReactComponent as MakeLogo } from './logo.svg'
import { ReactComponent as ReactLogo } from './react-logo.svg'

function App({ headline, showLogos, backgroundImage, qrcode }) {
  return (
    <div className="App" style={{ backgroundImage: `url('${backgroundImage}')` }}>

      {
        (headline.length > 52) ?
          <h2>{headline}</h2> :
          <h1>{headline}</h1>
      }

      {
        (qrcode == "") ?
          <img src={qrcode} width={'70px'} height={'70px'} style={{ position: 'absolute', left: '30px', top: '460px' }} />
          : null
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
  headline: 'ABDULLAH ARIEF SYAHPUTRA PRAWIRANEGARA SUBAMBANG HARIS',
  showLogos: true,
  backgroundImage: 'http://ruang-ilmiah.oss-ap-southeast-5.aliyuncs.com/template_cert_kc/2022042910394007.jpg',
  qrcode: ''
}

export default App;
