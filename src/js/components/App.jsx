import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [logoPath, setLogoPath] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    setName('Otomte JS');
    setLogoPath('./dist/assets/svg/oto.svg');
  }, []);

  return (
    <React.Fragment>
      <img className="oto_container_logo" src={logoPath} alt={name} />
      <h1 className="oto_container_title">{name}</h1>
      <p>This is Ryan</p>
    </React.Fragment>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('app'));
