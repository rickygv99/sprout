import * as React from "react";

/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function About() {
  
  return (
    <div className="page">
      <h2>About me</h2>
      <div class="post">
        I'm a co-term Master's student in AI, and I love researching and
        teaching cool topics in AI and HCI. Right now, I'm investigating
        ways to create common ground between human and machine co-workers,
        and before that I worked on the PolicyKit governance project at the
        University of Washington and spent 16 months teaching AI to
        high-school students (very fun!). I love traveling, board games,
        escape rooms, poetry, and trying out new restaurants!
      </div>
    </div>
  );
}
