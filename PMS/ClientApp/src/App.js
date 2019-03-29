import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />

    <Route path="/reservation" component={Reservation} />

    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
