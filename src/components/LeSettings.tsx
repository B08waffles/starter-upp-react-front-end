import {faQuestionCircle, faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {Button, Container, Image} from 'react-bootstrap';

function LeSettings() {
  const [lightMode, setLightMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem('site-light-mode');
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setLightMode(true);
    } else {
      setLightMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (lightMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
    const json = JSON.stringify(lightMode);
    localStorage.setItem('site-light-mode', json);
  }, [lightMode]);

  return (
    <div><aside><a href = "/help"><FontAwesomeIcon icon={faQuestionCircle}/></a></aside>
      <Container className="align-center text-center">
        <h1>Settings</h1>
        <br />
        <Button onClick={() => setLightMode(!lightMode)}>
          <FontAwesomeIcon icon={faStar} /> Toggle Theme
        </Button>
        <br />
      </Container>
      <br />
      <br />
      <Container className="align-center text-center">
        <Image
          className="text-center"
          alt="Garden Orb Weaver"
          src={require('../../public/images/gardenorb.png')}
          style={{minWidth: '10em', maxWidth: '24em', alignSelf: 'center'}}
        />
      </Container>
      {/* <br/>
      <br/>
      
      <br/>
      <br/>
      <br/>
    
     
      <br/>
      <br/>
      <br/>
      <br/>
      
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/> */}
    </div>
  );
}

export default LeSettings;
