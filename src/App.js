import './App.css';
import CertificatesList from './components/CertificatesList';

function App() {
  return (
    <div className="App">
      <h1>Ясінський Олександр</h1>
      <div className='main'>
        <h2>Напрямок, за яким планую розвиватись:</h2>
        <p>Frontend розробка</p>
        <br></br>
        <h2>Персональна сертифікація, яку планую складати:</h2>
        <CertificatesList/>
        <h2>Результат валідації цієї сторінки на сайті <a href='https://validator.w3.org/'>validator.w3.org</a>:</h2>
        <img src='Validation_result.png' id='image' alt='Validation_result'/>
      </div>
    </div>
  );
}

export default App;
