import React from "react";
import { commentsData } from "../Data";
function Comments() {
    return (
        <div>
            {commentsData.map((comment) => (
                <div className="card">
                    <div className="card-content">
                        <h3>{comment.name}</h3>
                        <p>{comment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Comments;
