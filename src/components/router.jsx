import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Posts from "../pages/posts";
import Post_LinearRegression from "../pages/posts/linear-regression"
import Post_LogisticRegression from "../pages/posts/logistic-regression"
import Post_NeuralNetworks from "../pages/posts/neural-networks"

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
      <Route path="/posts/linear-regression" component={Post_LinearRegression} />
      <Route path="/posts/logistic-regression" component={Post_LogisticRegression} />
      <Route path="/posts/neural-networks" component={Post_NeuralNetworks} />
    </Switch>
);
