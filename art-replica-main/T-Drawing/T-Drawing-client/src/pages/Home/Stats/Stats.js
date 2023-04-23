import React from "react";

const Stats = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow-lg w-full bg-green-300 mb-20">
      <div className="stat  place-items-center">
        <div className="stat-title">Available</div>
        <div className="stat-value">Sat-Thus</div>
        <div className="stat-desc"> 9.00pm - 9.00am</div>
      </div>

      <div className="stat  place-items-center">
        <div className="stat-title">Reviews</div>
        <div className="stat-value">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat  place-items-center">
        <div className="stat-title">New Orders</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Stats;
