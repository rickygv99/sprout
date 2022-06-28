import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import Posts from "../pages/posts";
import Post_LinearRegression from "../pages/posts/linear-regression"

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/posts" component={Posts} />
      <Route path="/posts/linear-regression" component={Post_LinearRegression} />
    </Switch>
);
