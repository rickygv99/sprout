import * as React from "react";
import { Router, Link } from "wouter";

export default function Posts() {
  
  return (
    <div className="page">
      <h2>Blog posts</h2>
      <ul>
        <li className="post-link"><Link className="link" href="/posts/linear-regression">Linear Regression</Link></li>
        <li className="post-link"><Link className="link" href="/posts/logistic-regression">Logistic Regression</Link></li>
      </ul>
      <p>It's a little bit empty right now but more content will be added soon!</p>
    </div>
  );
}
