/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import {
  Container, Form, Button, Col,
} from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

// class ReviewForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       product_id: '',
//       title: '',
//       review: '',
//       rating: 5,
//       buy_again: true,
//       would_recommend_to_friend: true,
//       play_experience: 5,
//       difficulty_level: 5,
//       value_for_money: 5,
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.buy = this.buy.bind(this);
//     this.recommend = this.recommend.bind(this);
//     this.submit = this.submit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   buy(e) {
//     if (e.target.value === 'Yes!') {
//       this.setState({ buy_again: true });
//     } else {
//       this.setState({ buy_again: false });
//     }
//   }

//   recommend(e) {
//     if (e.target.value === 'Yes!') {
//       this.setState({ would_recommend_to_friend: true });
//     } else {
//       this.setState({ would_recommend_to_friend: false });
//     }
//   }

// submit(e) {
//   e.preventDefault();
//   const record = {
//     product_id: 3,
//     product_name: 'Prego Ducati',
//     username: this.state.username,
//     title: this.state.title,
//     review: this.state.review,
//     rating: this.state.rating,
//     buy_again: this.state.buy_again,
//     would_recommend_to_friend: this.state.would_recommend_to_friend,
//     play_experience: this.state.play_experience,
//     difficulty_level: this.state.difficulty_level,
//     value_for_money: this.state.value_for_money,
//     helpful_count: 0,
//     unhelpful_count: 0,
//   };
//   this.props.fn(record);
// }

const ReviewForm = (props) => (
  <Formik
    initialValues={{
      product_id: '',
      product_name: '',
      // username: '',
      // title: '',
      // review: '',
      // rating: '',
      // buy_again: 'true',
      // would_recommend_to_friend: 'true',
      // play_experience: '',
      // difficulty_level: '',
      // value_for_money: '',
    }}
    onSubmit={(values, { setSubmitting }) => {
      console.log(values);
      console.log(values);
      // props.fn(values);
      // props.toggle();
    }}
    validationSchema={Yup.object().shape({
      product_id: Yup.number()
        .required('Required!'),
      product_name: Yup.string()
        .required('Required!'),
      // username: Yup.string()
      //   .required('Required!'),
      // title: Yup.string()
      //   .required('Required!'),
      // review: Yup.string()
      //   .required('Required!'),
      // rating: Yup.number()
      //   .required('Required!'),
      // buy_again: Yup.string()
      //   .required('Required!'),
      // would_recommend_to_friend: Yup.string()
      //   .required('Required!'),
      // play_experience: Yup.number()
      //   .required('Required!'),
      // difficulty_level: Yup.number()
      //   .required('Required!'),
      // value_for_money: Yup.number()
      //   .required('Required!'),
    })}
  >

    {
          (props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleSubmit,
              handleBlur,
            } = props;

            return (
              <Container className="reviewForm">
                <Form>
                  <Form.Row>

                    <Form.Group as={Col} controlId="formBasicName">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Username"
                        onChange={handleChange}
                        name="username"
                      />
                      <Form.Text className="text-muted" />
                      {errors.username && touched.username && (
                        <div className="input-feedback">{errors.username}</div>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} size="sm" controlId="formBasicEmail">
                      <Form.Label>Review Title</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Review Title"
                        onChange={handleChange}
                        name="title"
                      />
                      <Form.Text className="text-muted" />
                      {errors.title && touched.title && (
                        <div className="input-feedback">{errors.title}</div>
                      )}
                    </Form.Group>
                  </Form.Row>
{/*
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>1 -5, how did we do?</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={handleChange}
                      name="rating"
                    >
                      <option />
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </Form.Control>
                    {errors.rating && touched.rating && (
                    <div className="input-feedback">{errors.rating}</div>
                    )}
                  </Form.Group>

                  <Form.Group controlId="formBasicReview">
                    <Form.Label>What did you think of your product!</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Write your review here"
                      onChange={handleChange}
                      name="review"
                    />
                    <Form.Text className="text-muted" />
                    {errors.review && touched.review && (
                      <div className="input-feedback">{errors.review}</div>
                    )}
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formBasicCheckbox">
                      <Form.Label>Would you buy this item again?</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleChange}
                        name="buy_again"
                      >
                        <option />
                        <option>Yes!</option>
                        <option>Probably not</option>
                      </Form.Control>
                      {errors.buy_again && touched.buy_again && (
                        <div className="input-feedback">{errors.buy_again}</div>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicCheckbox">
                      <Form.Label>Would you recommend this item to a friend?</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleChange}
                        name="would_recommend_to_friend"
                      >
                        <option />
                        <option>Yes!</option>
                        <option>Probably not</option>
                      </Form.Control>
                      {errors.would_recommend_to_friend && touched.would_recommend_to_friend && (
                        <div className="input-feedback">{errors.would_recommend_to_friend}</div>
                      )}
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                      <Form.Label>Rate your play experience!</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleChange}
                        name="play_experience"
                      >
                        <option />
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                      </Form.Control>
                      {errors.play_experience && touched.play_experience && (
                        <div className="input-feedback">{errors.play_experience}</div>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                      <Form.Label>How hard was this build?</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleChange}
                        name="difficulty_level"
                      >
                        <option />
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                      </Form.Control>
                      {errors.difficulty_level && touched.difficulty_level && (
                        <div className="input-feedback">{errors.difficulty_level}</div>
                      )}
                    </Form.Group>

                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
                      <Form.Label>Was this product worth the money?</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleChange}
                        name="value_for_money"
                      >
                        <option />
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                      </Form.Control>
                      {errors.value_for_money && touched.value_for_money && (
                        <div className="input-feedback">{errors.value_for_money}</div>
                      )}
                    </Form.Group>
                  </Form.Row> */}

                  <Button
                    disabled={isSubmitting}
                    className="btn"
                    onClick={handleSubmit}
                  >
                    Submit!
                  </Button>

                </Form>
              </Container>
            );
          }
        }

  </Formik>
);

export default ReviewForm;
