import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Col, Row, Button, Alert, Card, Breadcrumb, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form className='mb-3'>
            <Row>
              <Col md>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder='example@gmail.com' />
                  <Form.Text className='text-muted'>We will never share your email with ad agencies</Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId='formPass'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder='Password' />
                </Form.Group>
              </Col>
            </Row>
            <Button type='submit' variant='secondary'>Login</Button>
          </Form>
          <Card className='mb-3' style={{ color: '#000' }}>
            <Card.Img src='https://picsum.photos/200/100' />
            <Card.Body>
              <Card.Title>
                Card Example
            </Card.Title>
              <Card.Text>
                This is where card text goes. you can see it in browser
            </Card.Text>
              <Button>Read more..</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>BreadcrumItem 1</Breadcrumb.Item>
            <Breadcrumb.Item>BreadcrumItem 2</Breadcrumb.Item>
            <Breadcrumb.Item active>BreadcrumItem 3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant='success'>This is Alert</Alert>
          <Button>Hello Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
