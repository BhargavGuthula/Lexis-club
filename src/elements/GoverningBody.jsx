import React, { useRef, useState } from "react";
import "./GoverningBody.css";

const teamMembers = [
  { name: "Bhargav Guthula", role: "President", image: "president.jpg" },
  { name: "Aarav Sharma", role: "Vice President", image: "vp.jpg" },
  { name: "Riya Patel", role: "Secretary", image: "sec.jpg" },
  { name: "John Doe", role: "Treasurer", image: "treasurer.jpg" }
  // Add more team members here
];

const GoverningBody = () => {
  const swiperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleOnMouseDownOrTouchStart = (event) => {
    if (!swiperRef.current) return;
    setIsDragging(true);
    const pageX =
      event.type === "mousedown" ? event.pageX : event.touches[0].pageX;
    setStartX(pageX - swiperRef.current.offsetLeft);
    setScrollLeft(swiperRef.current.scrollLeft);
  };

  const handleOnMouseMoveOrTouchMove = (event) => {
    if (!isDragging || !swiperRef.current) return;
    event.preventDefault();
    const pageX =
      event.type === "mousemove" ? event.pageX : event.touches[0].pageX;
    const x = pageX - swiperRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by a factor for speed
    swiperRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleOnMouseUpOrLeaveOrTouchEnd = () => {
    setIsDragging(false);
  };

  const scrollLeftHandler = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({ left: -285, behavior: "smooth" });
    }
  };

  const scrollRightHandler = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({ left: 285, behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="governing-body-container">
      <h2>Governing Body</h2>
      <div className="controls">
        <button onClick={scrollLeftHandler}>&larr; Left</button>
        <div
          ref={swiperRef}
          className="governing-body"
          onMouseDown={handleOnMouseDownOrTouchStart}
          onTouchStart={handleOnMouseDownOrTouchStart}
          onMouseMove={handleOnMouseMoveOrTouchMove}
          onTouchMove={handleOnMouseMoveOrTouchMove}
          onMouseUp={handleOnMouseUpOrLeaveOrTouchEnd}
          onTouchEnd={handleOnMouseUpOrLeaveOrTouchEnd}
          onMouseLeave={handleOnMouseUpOrLeaveOrTouchEnd}
        >
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

        <button onClick={scrollRightHandler}>Right &rarr;</button>
      </div>
    </div>
    </>
  );
};

export default GoverningBody;
