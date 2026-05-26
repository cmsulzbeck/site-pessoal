import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import Projects from './components/Projects';
import { ConnectModal } from './components/ConnectModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showConnect, setShowConnect] = useState(false);
  const openConnect = () => setShowConnect(true);
  const closeConnect = () => setShowConnect(false);

  return (
    <div className="App">
      <NavBar onConnectClick={openConnect} />
      <Banner onConnectClick={openConnect} />
      <Skills />
      <Projects />
      <ConnectModal show={showConnect} onHide={closeConnect} />
    </div>
  );
}

export default App;
