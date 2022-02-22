import React from "react";

const Timelineitem = ({ data }) => {
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.time}</time>
            <p>{data.time}</p>
            <span className="cirlce"></span>
        </div>
    </div>
};

export default Timelineitem;