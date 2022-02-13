import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/datemaker-style.scss";
import { Formik, FormikHelpers, Form, Field } from "formik";
import axios from "axios";

export default function Datemaker() {
  const { search } = useLocation();
  let query = new URLSearchParams(search);
  let phoneNumber = query.get("alt_phone") || "4081121235";

  return (
    <div className="datemaker">
      <div className="route">
        <Link to="/chat">
          <h1>Chat</h1>
        </Link>
        <Link to="/datemaker">
          <h1>Date Maker</h1>
        </Link>
      </div>

      <div className="datemaker-div">
        <h2>Plan dates with your partner here</h2>
      </div>

      <Formik
        initialValues={{
          date: new Date()
        }}
        onSubmit={async (
          v: { date: Date },
          h: FormikHelpers<{ date: Date }>
        ) => {
          let url = `https://hacktheirhearts.epiccodewizard2.repl.co/date/create`;
          console.log(v.date);

          let res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              date: new Date(v.date),
              phone1: phoneNumber,
              phone2: phoneNumber
            })
          });
        }}
      >
        {({ handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                type="datetime-local"
                id="date-picker"
                min="2022-02-01T00:00"
                max="2022-03-01T00:00"
                onChange={handleChange}
              />
              <button type="submit">Schedule your date</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
