import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import GuestSearch from "./components/GuestSearch";

import GuestProfile from "./components/GuestProfile/GuestProfile";
import ProfileSearch from "./components/ProfileSearch";

import RoomPlan from "./components/RoomPlan";

import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />

    <Route path="/reservation" component={Reservation} />
    <Route path="/guestsearch" component={GuestSearch} />
    <Route path="/guestprofile" component={GuestProfile} />
    <Route path="/profileSearch" component={ProfileSearch} />
    <Route path="/roomplan" component={RoomPlan} />

    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
