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
    onSubmit={(values, { resetForm }) => {
      db.collection("info")
        .add({
          name: values.name,
          number: values.number,
          email: values.email,
          timestamp: new Date().getTime()
        })
        .then(
          alert("Thanks for the submission, we'll get back to you soon !!!")
        )
        .catch((error) => {
          alert(error.message);
        });
      resetForm({ values: "" });
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email(),
      number: Yup.string().length(10, "Length should be equal to 10"),
    })}
  >

    {(props) => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <div className="middlepage">
          <div className="middlepage__component1">
            <div className="blank"></div>
            <div className="middlepage__form">
              <form onSubmit={handleSubmit} className="review__table">
                <h2>Register Now !!!</h2>

                <div className="inputform">
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
                    <div className="input-feedback">*{errors.name}</div>
                  )}
                </div>

                <div className="inputform">
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
                    <div className="input-feedback">*{errors.email}</div>
                  )}
                </div>

                <div className="inputform">
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
                    <div className="input-feedback">*{errors.number}</div>
                  )}
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

              <div className="inputform">
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
                  <div className="input-feedback">*{errors.name}</div>
                )}
              </div>

              <div className="inputform">
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
                  <div className="input-feedback">*{errors.email}</div>
                )}
              </div>

              <div className="inputform">
                <label htmlFor="number">Contact No:</label>
                <input
                  name="number"
                  type="tel"
                  value={values.number}
                  placeholder=" Enter your Contact No."
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.number && touched.number && (
                  <div className="input-feedback">*{errors.number}</div>
                )}
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
              <Landing />
              <Landingleft />
              <Landing3 />
              <Landingleft4 />
              <Landing5 />
              <Landingleft6 />            
          </div>

          <div className="middle__bottom">
            <h1>Our Eminent Billionaire Professors</h1>
            <img src={f1} alt="Relevant Photograph Here" />
            <img src={f2} alt="Relevant Photograph Here" />
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
