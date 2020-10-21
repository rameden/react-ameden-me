import React from 'react';
import { Modal } from 'react-bootstrap';
import LoadingBar from 'react-top-loading-bar';
//Custom Deps
import Resume from './components/Resume/resume';
import './App.css';
import Header from './components/common/header';
import Body from './components/common/body';

const App: React.FC = () => {
  const [modalState, setModalState] = React.useState(false);
  const [loaderState, setloaderState] = React.useState(false);
  const [loaderProgress, setLoaderProgress] = React.useState(0);

  const modalLifecycle = () => {
    setloaderState(true);
    setLoaderProgress(100);
    setTimeout(() => {
      setModalState(true);
    }, 1000);
  };

  return (
    <div>
      <div className="mainAppWrapper">
        <div className="mainAppBody">
          <Header />
          <Body />
          <div className="margin-top">
            <button className="main-btn about-trigger" onClick={modalLifecycle.bind(this)}>Résumé</button>
          </div>
        </div>
      </div>
      <Modal
        show={modalState}
        animation={true}
      >
        <Resume
          closeHandler={() => { setModalState(false) }}
        />
      </Modal>
      {loaderState &&
        <LoadingBar
          color='#03adf7'
          progress={loaderProgress}
          onLoaderFinished={() => setLoaderProgress(0)}
          loaderSpeed={1000}
        />
      }
    </div>
  );
};

export default App;
