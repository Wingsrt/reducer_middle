import rootreducer from "./reducer";
import { middle } from "./reducer";
import { applyMiddleware } from "redux";

import { createStore } from "redux";

const store=createStore(rootreducer,applyMiddleware(middle));


export default store;

