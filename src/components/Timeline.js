import data from "../data";
import Timelineitem from "./Timelineitem";
import React from "react";

const Timeline = () =>
      data.length > 0 && (
          <div className="timeline-container">
              {data.map((data, idx) => (
                  <Timelineitem data={data} key={idx}/>
              ))}
            </div>
        );

export default Timeline;