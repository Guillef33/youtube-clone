import React from "react";

const Categories = ({ technology, categories, filterItems }) => {
  return (
    <div className="category-container">
      {technology.map((tech, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(tech)}
          >
            {tech}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
