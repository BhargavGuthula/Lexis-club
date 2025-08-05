import React, { useRef, useState } from "react";
import "./ActiveBody.css";

const activeMembers = [
  { name: "Sam Smith", role: "Senior Member", image: "member1.jpg" },
  { name: "Emma Wilson", role: "Active Member", image: "member2.jpg" },
  { name: "David Kumar", role: "Active Member", image: "member3.jpg" },
  { name: "Priya Mehta", role: "Senior Member", image: "member4.jpg" }
  // Add more active members here
];

const ActiveBody = () => {
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
    <div className="active-body-container">
      <h2>Active Members</h2>
      <div className="controls2">
        <button onClick={scrollLeftHandler}>&larr; Left</button>
        
          <div
            ref={swiperRef}
            className="active-body"
            onMouseDown={handleOnMouseDownOrTouchStart}
            onTouchStart={handleOnMouseDownOrTouchStart}
            onMouseMove={handleOnMouseMoveOrTouchMove}
            onTouchMove={handleOnMouseMoveOrTouchMove}
            onMouseUp={handleOnMouseUpOrLeaveOrTouchEnd}
            onTouchEnd={handleOnMouseUpOrLeaveOrTouchEnd}
            onMouseLeave={handleOnMouseUpOrLeaveOrTouchEnd}
          >
            <div className="team-slider">
            {activeMembers.map((member, index) => (
              <div className="member-card2" key={index}>
                <img src={member.image} alt={member.role} />
                <p className="role2">{member.role}</p>
                <p className="name2">{member.name}</p>
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

export default ActiveBody;
