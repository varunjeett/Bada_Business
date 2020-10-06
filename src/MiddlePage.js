import React from "react";
import Landing from "./Landing";
import Landingleft from "./Landingleft";
import "./MiddlePage.css";
import f1 from "./Media/f1.jpg";
import f2 from "./Media/f2.jpg";
import Landing3 from "./Landing3";
import Landing5 from "./Landing5";
import Landingleft4 from "./Landingleft4";
import Landingleft6 from "./Landingleft6";
import { Button } from "@material-ui/core";
import { db } from "./firebase";
import * as Yup from "yup";
import { Formik } from "formik";

const MiddlePage = () => (
  <Formik
    initialValues={{ name: "", number: "", email: "" }}
    
    // eslint-disable-next-line
    onSubmit={(values, {setSubmitting}) => {
      console.log(values);

      db.collection("info")
        .add({
          name: values.name,
          number: values.number,
          email: values.email,
        })
        .then(
          alert("Thanks for the submission, we'll get back to you soon !!!")
        )
        .catch((error) => {
          alert(error.message);
        });

      window.location.reload();
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      number: Yup.string()
        .length(10, "Length should be equal to 10")
        .required("Phone is required"),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <div className="middlePage">
          <div className="middlePage__first">
            <div className="blank"></div>

            <div className="middlePage__form">
              <form onSubmit={handleSubmit} className="review__table">
                <h2>Register Now !!!</h2>

                <label htmlFor="name">Name:</label>
                <input
                  name="name"
                  type="text"
                  value={values.name}
                  placeholder=" Enter your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}

                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  placeholder=" Enter your Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}

                <label htmlFor="number">Contact No.:</label>
                <input
                  name="number"
                  type="tel"
                  value={values.number}
                  placeholder=" Enter your Contact No."
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.number && touched.number && (
                  <div className="input-feedback">{errors.number}</div>
                )}

                <div className="review__table__inside">
                  <input type="checkbox" />
                  <h3>
                    Yes, I would like to receive offers,updates and marketing
                    materials via email and SMS.
                  </h3>
                </div>

                <div className="button__div">
                  <Button
                    className="review__button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    REGISTER
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="middlePage__from__css">
            <form onSubmit={handleSubmit} className="review__table__css">
              <h2>Register Now !!!</h2>

              <label htmlFor="name">Name:</label>
              <input
                name="name"
                type="text"
                value={values.name}
                placeholder=" Enter your Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <div className="input-feedback">{errors.name}</div>
              )}

              <label htmlFor="email">Email:</label>
              <input
                name="email"
                type="email"
                value={values.email}
                placeholder=" Enter your Email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="number">Contact No.:</label>
              <input
                name="number"
                type="tel"
                value={values.number}
                placeholder=" Enter your Contact No."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.number && touched.number && (
                <div className="input-feedback">{errors.number}</div>
              )}

              <div className="review__table__inside">
                <input type="checkbox" />
                <h3>
                  Yes, I would like to receive offers,updates and marketing
                  materials via email and SMS.
                </h3>
              </div>

              <div className="button__div">
                <Button
                  className="review__button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  REGISTER
                </Button>
              </div>
            </form>
          </div>

          <div className="middlePage__head">
            <div className="middle__landing">
              <Landing />
            </div>
            <div className="middle__landingleft">
              <Landingleft />
            </div>
            <div className="middle__landing">
              <Landing3 />
            </div>
            <div className="middle__landingleft">
              <Landingleft4 />
            </div>
            <div className="middle__landing">
              <Landing5 />
            </div>
            <div className="middle__landingleft">
              <Landingleft6 />
            </div>
          </div>

          <div className="middle__bottom">
            <h1>Our Eminent Billionaire Professors</h1>
            <img src={f1} alt="Relevant Photograph Here"/>
            <img src={f2} alt="Relevant Photograph Here"/>
          </div>
          <div className="end__button">
            <a
              href="https://www.badabusiness.com/dd/BISK005808/"
              target="_black"
            >
              <button className="end__button__END">More</button>
            </a>
          </div>
        </div>
      );
    }}
  </Formik>
);

export default MiddlePage;
