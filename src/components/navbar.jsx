import * as React from "react";
import { Router, Link } from "wouter";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
  <div className="topnav">
    <Link className="link" href="/">Home</Link>
    <Link className="link" href="/posts">Posts</Link>
    <Link className="link" href="/about">About</Link>
  </div>
);
