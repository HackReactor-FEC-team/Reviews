/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* cSpell: disable */
/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import { Container, Button, Accordion, Card } from 'react-bootstrap';
import Review from './reviewMod/review';
// import Overview from './overviewMod/overview';
import ReviewForm from './reviewMod/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: '',
      submitted: null,
    };
    this.getData = this.getData.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  // getData() {
  //   axios.get('http://18.224.139.39:3000/reviews')
  //     .then((result) => this.setState({ allReviews: result }))
  //     .catch((err) => console.log(err, 'error'));
  // }
  getData() {
    axios.get('http://localhost:3000/reviews')
      .then((result) => this.setState({ allReviews: result }))
      .catch((err) => console.log(err, 'error'));
  }

  submitReview(input) {
    console.log(input, 'input from form');
    // WILL NEED TO ADD CURRENT PRODUCT ID NUMBER TO REQUEST!!
    // CURRENTLY HARDCODED INTO FORM.JS

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
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
    return (
      <Accordion defaultActiveKey="">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
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
      <Container>
        <div style={{
          backgroundColor: '#F7F7F7',
        }}
        />
        {submitted
          ? '' : this.revealFormButton()}
        {allReviews === ''
          ? '' : this.revealReviews }
      </Container>
    );
  }
}

export default App;
