import "./Projects.css";
import React, { useMemo } from "react";
import { projects, categoryOrder, slugify } from "../../data/Projects";
import { Link } from "react-router-dom";

export default function Projects() {
  document.title = "Our Projects";

  // Sort by role, then name for stable order
  const sortedProjects = useMemo(
    () =>
      [...projects].sort((a, b) => {
        const diff = categoryOrder[a.category] - categoryOrder[b.category];
        return diff !== 0 ? diff : a.name.localeCompare(b.name);
      }),
    [],
  );

  const pyramid = createPyramid(sortedProjects);
  return (
    <div className="home-page">
      <textarea className="projects-text-wrapper" />
      <label htmlFor="categories">Category:</label>
      <select id="categories" name="categories">
        <option value="CyberSecurity">CyberSecurity</option>
        <option value="Coding">Coding</option>
        <option value="Javascript">Javascript</option>
        <option value="Monogame">Monogame</option>
      </select>
      <div className="projects-container">
        <h2>Our projects</h2>
        {pyramid.map((row, rowIndex) => (
          <div className="project-row" key={rowIndex}>
            {row.map((project) => (
              <Link
                to={`/members/${slugify(project.name)}`} // <-- hyperlink
                className="member-card"
              >
                <div>
                  <strong>{project.name}</strong>
                  <p>{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const createPyramid = <T,>(list: T[], maxRowSize = 3): T[][] => {
  const pyramid: T[][] = [];
  let index = 0;
  for (let rowSize = 1; index < list.length; rowSize++) {
    const currentSize = Math.min(rowSize, maxRowSize);
    pyramid.push(list.slice(index, index + currentSize));
    index += currentSize;
  }
  return pyramid;
};
