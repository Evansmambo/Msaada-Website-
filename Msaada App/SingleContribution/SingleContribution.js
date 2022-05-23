import React from "react";
import "../App.css";
import Contribution from "./Contribution/Contribution";

function SingleContribution({ contributions, isAdmin }) {
  return (
    <div className="individualContribution">
      {contributions.map((contribution) => (
        <Contribution key={contribution.id} contribution={contribution} isAdmin/>
      ))}
    </div>
  );
}

export default SingleContribution;