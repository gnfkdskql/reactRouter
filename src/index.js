import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./redux/configureStore";
import { AppContainer } from "react-hot-loader";

const store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        document.getElementById("root")
    );
};

render(Root);

if (module.hot) {
    module.hot.accept("./Root", () => render(Root));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
