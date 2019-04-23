import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";

import * as Reservation from "./Reservation";
import * as GuestSearch from "./GuestSearch";
import * as GuestProfile from "./GuestProfile";
import * as ProfileSearch from "./ProfileSearch";
import * as FloorPlan from "./FloorPlan";
import * as Dashboard from "./Dashboard";

import * as Counter from "./Counter";
import * as WeatherForecasts from "./WeatherForecasts";

export default function configureStore(history, initialState) {
  const reducers = {
    reservation: Reservation.reducer,
    guestSearch: GuestSearch.reducer,
    guestProfile: GuestProfile.reducer,
    profileSearch: ProfileSearch.reducer,
    floorPlan: FloorPlan.reducer,
    dashboard: Dashboard.reducer,

    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer
  };

  const middleware = [thunk, routerMiddleware(history)];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === "development";
  if (
    isDevelopment &&
    typeof window !== "undefined" &&
    window.devToolsExtension
  ) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
}
