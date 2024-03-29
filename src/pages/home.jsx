import * as React from "react";

/**
 * The Home function defines the content that makes up the main content of the Home page
 *
 * This component is attached to the /about path in router.jsx
 * The function in app.jsx defines the page wrapper that this appears in along with the footer
 */

export default function Home() {
  return (
    <>
      <h2>Welcome!</h2>
      Welcome to my blog! Click on Posts to view my latest walkthroughs.
      <br />
      <br />
      <br />
      <b>Changelog</b>
      <br />
      [6/29/22] Had to get a school assignment done today but didn't want to take a break from writing (especially this early on!). Hope you enjoy this article on neural networks!
      <br />
      [6/28/22] Moved the site onto a React framework. This will make it a lot easier for me to create new posts without having to re-create components. Also published the logistic regression article! Hoping to add some articles on neural networks soon (maybe NLP too?).
      <br />
      [6/27/22] The site is born. Added an article on linear regression. I have a logistic regression article as well but it's in Latex right now and I need to format it in HTML.
    </>
  );
}
