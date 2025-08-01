import React from "react";
import "./GoverningBody.css"; // Don't forget the CSS file

const teamMembers = [
  { name: "Bhargav Guthula", role: "President", image: "president.jpg" },
  { name: "Aarav Sharma", role: "Vice President", image: "vp.jpg" },
  { name: "Riya Patel", role: "Secretary", image: "sec.jpg" },
  { name: "John Doe", role: "Treasurer", image: "treasurer.jpg" },
  // Add more team members here
];

const GoverningBody = () => {
  return (
    <div className="governing-body">
      <h2>Governing Body</h2>
      <div className="team-slider">
        {teamMembers.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.image} alt={member.role} />
            <p className="role">{member.role}</p>
            <p className="name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoverningBody;
