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

      <img src={qrcode} width={'90px'} height={'90px'} style={{ position: 'absolute', left: '30px', top: '430px' }} />



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
  qrcode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAYAAADApo5rAAAAAklEQVR4AewaftIAAAjkSURBVO3BQY4kyZEAQdVA/f/Lug0eHHZyIJBZPRyuidgfrLX+42GtdTystY6HtdbxsNY6HtZax8Na63hYax0Pa63jYa11PKy1joe11vGw1joe1lrHw1rreFhrHT98SOVvqvibVG4qJpU3KiaVqWJSuan4JpU3KiaVv6niEw9rreNhrXU8rLWOH76s4ptU3lCZKiaVqWJSuamYVG4qvqliUrlRual4o2JSeaPim1S+6WGtdTystY6Htdbxwy9TeaPiDZWp4hMVk8qk8obKJ1RuKt6omFSmijcqPqHyRsVvelhrHQ9rreNhrXX8sK4qblSmijdUbipuVG4qJpWpYlKZKm5Upop/s4e11vGw1joe1lrHD//jVKaKG5WpYlJ5Q+WNiknlpuJGZaq4qZhU/j95WGsdD2ut42Gtdfzwyyr+JpXfVDGpTCpTxY3KpDJV3Ki8oXJTMVXcqHyi4r/Jw1rreFhrHQ9rreOHL1P5J1VMKjcqU8WkMlXcVEwqU8VNxaQyVdxUTCpTxaRyozJVfELlv9nDWut4WGsdD2utw/7gX0zlpuJG5aZiUpkqvknlpuKbVKaKSWWq+F/2sNY6HtZax8Na6/jhQypTxaTyTRVTxaRyozJVTCqTylQxqdxU3KhMFZ9Quam4UZkqJpWbiknlmyp+08Na63hYax0Pa63jhw9VTCpTxaQyVbyhMlVMFZPKVHFTcaMyVdyofJPKVHFT8UbFpPKGyk3FpDJVTCo3KlPFJx7WWsfDWut4WGsd9gdfpDJVvKHyTRU3KjcVNypTxRsqNxU3Kn9TxaQyVbyhMlXcqEwV3/Sw1joe1lrHw1rr+OGXqdxUTBVvqNyoTBU3Fd+k8gmVm4oblTcqblRuVKaKSWWqmFSmir/pYa11PKy1joe11vHDh1SmijdU3qi4qbhRmSpuVKaKG5WpYlK5qZhUpopJZaq4qbhRmSr+SSpTxW96WGsdD2ut42GtddgffJHKTcU/SeWNihuVNyp+k8pUcaMyVdyoTBU3Kp+ouFGZKj7xsNY6HtZax8Na67A/+IDKVHGjclMxqXyi4kblpuI3qXxTxaTyTRWTyk3FpPKJit/0sNY6HtZax8Na6/jhl6m8oTJVTCpTxRsqb6hMFd9UMam8UfGJik9U3KhMFZPKTcXf9LDWOh7WWsfDWuuwP/iAyjdVTCpTxaQyVUwqU8WkclNxo/JGxSdU3qiYVD5RcaMyVUwqU8WNylTxmx7WWsfDWut4WGsdP/zDKiaVqeKm4psq3qh4Q+WmYlK5qZhUJpWp4hMqNxWTyo3KTcWkclPxiYe11vGw1joe1lrHDx+qmFSmiknlpmJSmSomlanijYoblZuKG5Wp4hMVk8pUcaNyUzGpTBVvVNyoTBU3Fb/pYa11PKy1joe11mF/8EUq31QxqUwVk8pUMalMFW+oTBV/k8pNxW9SmSomlaniRuWmYlKZKr7pYa11PKy1joe11vHDh1TeqJhUpopJZar4RMWNylQxVbyhclMxqdxUfEJlqphUbiomlanijYoblaniNz2stY6HtdbxsNY67A/+i6hMFTcqU8UbKlPFGyo3FZPKTcWNylTxCZWp4kblN1VMKm9UfOJhrXU8rLWOh7XW8cM/TOVGZap4Q2WqmCpuVG4q3qiYVG5UpopJZaqYVL6p4g2VqeJGZar4mx7WWsfDWut4WGsdP3yZyk3FTcUnVN5QmSqmiknlDZWbikllqphUvqniEypTxY3KTcUbKlPFJx7WWsfDWut4WGsdP3xZxRsVNyqfqPhNKjcVb1RMKlPFpDKp3FTcqEwVk8pUMalMFZ9QmSp+08Na63hYax0Pa63jhw+p3FRMKlPFpDJVTCpTxaQyqfymihuVT1RMKlPFjcobFZ+omFQ+UTGp/KaHtdbxsNY6HtZah/3BB1SmihuVT1TcqNxUTCqfqPhNKlPFjcpUMalMFZ9QuamYVG4q/kkPa63jYa11PKy1DvuDX6RyU/FPUpkqblSmijdU3qi4UZkqJpU3KiaVNyo+oTJVTCpTxTc9rLWOh7XW8bDWOn74MpWbihuVm4pJ5abiN6lMFW9U3KjcVEwqb1RMKp9QmSo+oTJV/KaHtdbxsNY6HtZah/3BB1TeqJhUbiomlaliUrmpeENlqphU3qiYVG4qblSmijdUpopJ5abiRuUTFZPKTcUnHtZax8Na63hYax32Bx9QmSq+SWWqmFTeqJhUbiomlZuKSeWmYlK5qbhRmSomlU9U3Ki8UTGpTBV/08Na63hYax0Pa63jh79MZaq4qZhUbireqLhR+UTFpDKp3FTcqEwVk8obFb+pYlJ5Q2Wq+KaHtdbxsNY6HtZaxw+/TOVGZaqYVKaKG5Wp4g2Vm4oblU9UvFExqUwVk8pUMan8JpWbikllqvhND2ut42GtdTystQ77g38xlZuKSeWmYlKZKiaVm4pJZaqYVH5TxaQyVdyo3FS8oTJV3KjcVHziYa11PKy1joe11vHDh1T+poqp4hMVk8pUcVMxqdxUTCo3FW+o3KhMFb9JZaq4UZkqporf9LDWOh7WWsfDWuv44csqvknlRuWm4o2KG5U3VG4qJpVJZap4o2JSeUNlqphUbir+TR7WWsfDWut4WGsdP/wylTcqPlHxCZWpYqr4myreqJhUpooblU+ofKJiUpkqftPDWut4WGsdD2ut44f/MSpTxY3KVDGp3FRMKp+omFRuKm4qblSmijcqJpWpYlKZKiaVf9LDWut4WGsdD2ut44f/MRU3FZPKGxWTyk3FjcpNxRsqU8WkMlVMKm9U3KjcqNxU/E0Pa63jYa11PKy1jh9+WcVvqnhD5Ublm1SmiqliUrmpuKm4qZhUpoo3VG4qblTeUJkqvulhrXU8rLWOh7XW8cOXqfxNKr+pYlK5qZhUJpWpYqqYVG5U3qi4UZkqJpWp4g2Vm4pJZar4TQ9rreNhrXU8rLUO+4O11n88rLWOh7XW8bDWOh7WWsfDWut4WGsdD2ut42GtdTystY6HtdbxsNY6HtZax8Na63hYax0Pa63j/wBtW919Lkb8kwAAAABJRU5ErkJggg=='
}

export default App;
