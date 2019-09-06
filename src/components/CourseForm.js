import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        label="Title"
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            onChange={props.onChange}
            className="form-control"
          >
            <option value="" />
            <option value="1">John Deor</option>
            <option value="2">Allan Duran</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        name="category"
        onChange={props.onChange}
        label="Category"
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
