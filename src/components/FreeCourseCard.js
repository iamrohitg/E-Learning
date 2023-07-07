import React from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;

  const handleFreeButtonClick = () => {
    window.open("https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n");
  };

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn" onClick={handleFreeButtonClick}>
          Free
        </button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className="d-flex align-items-center gap-5">
          <span className="d-flex align-items-center gap-2">
            <i className="ri-user-line"></i> {students}k
          </span>

          <span className="d-flex align-items-center gap-2">
            <i className="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
