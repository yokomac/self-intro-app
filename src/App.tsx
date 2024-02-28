import React from 'react';
import Introduction from './Introduction.tsx';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function App() {
  const myInfo = {
    name: ' Takuto Yokomaku',
    age: 25,
    hobbies: ['Reading', 'Coding', 'Traveling'],
  };

  const openWebsite = () => {
    // 別のWEBサイトのURLを指定
    const externalWebsiteURL = 'https://buttoned-kettle-f73.notion.site/My-portfolio-site-358cd5f2b7e843fe83961e95d2f4c2a7';

    // 別のWEBサイトを新しいウィンドウまたはタブで開く
    window.open(externalWebsiteURL, '_blank');
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Introduction {...myInfo} />
              <Button variant="primary" onClick={openWebsite}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;