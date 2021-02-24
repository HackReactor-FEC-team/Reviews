/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* cSpell: disable */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import { Container, Button, Accordion, Card } from 'react-bootstrap';
import Review from './reviewMod/review';
import ReviewForm from './reviewMod/form';
import './style.css';
import Footer from './footer/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: null,
      submitted: null,
    };
    this.getData = this.getData.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  //  18.191.88.165
  getData() {
    axios.get('http://localhost:3000/reviews')
      .then((result) => this.setState({ allReviews: result.data }))
      .catch((err) => console.log(err, 'error'));
  }

  submitReview(input) {
    axios.post('http://localhost:3000/review', { input })
      .then(() => {
        this.getData();
      })
      .then(() => this.setState({ submitted: true }))
      .catch((e) => {
        console.log(e, 'error calling submitReview');
      });
  }

  revealFormButton() {
    return (
      <Accordion defaultActiveKey="">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              className="accordionTitle"
              as={Button}
              variant="link"
              eventKey="0"
            >
              Write A Review?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <ReviewForm fn={this.submitReview} />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }

  revealReviews() {
    const { allReviews } = this.state;
    return (
      <Accordion defaultActiveKey="">
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className="accordionTitle"
            >
              Customer Reviews
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Review reviews={allReviews} />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }

  render() {
    const { allReviews } = this.state;
    const { submitted } = this.state;
    return (
      <div
        style={{
          backgroundColor: '#F7F7F7',
        }}
      >
        <Container>
          {submitted || this.revealFormButton()}
          {allReviews && this.revealReviews()}
        </Container>

        <Footer />
      </div>
    );
  }
}

// footer color rgb(0, 109, 183)

export default App;
