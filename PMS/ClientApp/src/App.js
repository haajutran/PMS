import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import GuestSearch from "./components/GuestSearch";
import RoomAvailability from "./components/RoomAvailability";

import GuestProfile from "./components/GuestProfile/GuestProfile";
import ProfileSearch from "./components/ProfileSearch";

import RoomPlan from "./components/RoomPlan";
import FloorPlan from "./components/FloorPlan";

import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={Counter} />

    <Route path="/roomavailability" component={RoomAvailability} />
    <Route path="/reservation" component={Reservation} />
    <Route path="/guestsearch" component={GuestSearch} />
    <Route path="/guestprofile" component={GuestProfile} />
    <Route path="/profileSearch" component={ProfileSearch} />
    <Route path="/roomplan" component={RoomPlan} />
    <Route path="/floorplan" component={FloorPlan} />

    <Route path="/fetch-data/:startDateIndex?" component={FetchData} />
  </Layout>
);
