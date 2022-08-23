import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import './CourseGoalList.css';

const CourseGoalList = props => {

    return (
        <ul className="goal-list">
            {
                props.items.map((item) =>
                    <CourseGoalItem key={item.id} id={item.id} onDelete={props.onDeleteItem}>{item.text}</CourseGoalItem>
                )
            }
        </ul>
    )

}

export default CourseGoalList;