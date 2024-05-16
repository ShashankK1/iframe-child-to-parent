import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const receiveMessage = (e) => {
    if (e.data === 'iframe-btn-clicked') {
      setShowOverlay(true);
    }
  }
  useEffect(() => {
    window.addEventListener('message', receiveMessage);
    return () => {
      window.removeEventListener('message', receiveMessage);
    }
  }, []);
  return (
    <div className="App">
      {
        showOverlay &&
        <div className='overlay'>
          <div style={{ position: 'absolute', height: '200px', width: '200px', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', color: 'red' }}>{"message received from overlay"}</div>
        </div>
      }
      <iframe height={'100%'} src="Iframe.html" />
    </div>
  );
}

export default App;
