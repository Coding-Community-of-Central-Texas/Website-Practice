import "./Projects.css";
import React, { useMemo, useState } from "react";
import {
  projects,
  categoryOrder,
  slugify,
  Project,
  Category,
} from "../../data/Projects";
import { Link } from "react-router-dom";

export default function Projects() {
  document.title = "Our Projects";

  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all",
  );

  const sortedProjects = useMemo(
    () =>
      [...projects].sort((a, b) => {
        const diff = categoryOrder[a.category] - categoryOrder[b.category];
        return diff !== 0 ? diff : a.name.localeCompare(b.name);
      }),
    [],
  );

  const grid = useMemo(() => {
    const filterValue = selectedCategory === "all" ? null : selectedCategory;
    return createGrid(sortedProjects, 3, filterValue as Category);
  }, [sortedProjects, selectedCategory]);

  return (
    <div className="home-page">
      <div className="projects-container">
        <h2>Our projects</h2>
        <div className="filter-section">
          <label htmlFor="categories" className="filter-label">
            Category
          </label>
          <div className="select-wrapper">
            <select
              id="categories"
              name="categories"
              className="custom-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Category)}
            >
              <option value="all">All Projects</option>
              <option value={Category.Cyber}>CyberSecurity</option>
              <option value={Category.Coding}>Coding</option>
              <option value={Category.Js}>Javascript</option>
              <option value={Category.Monogame}>Monogame</option>
            </select>
            <span className="select-icon">▼</span>
          </div>
        </div>

        {grid.map((row, rowIndex) => (
          <div className="project-row" key={rowIndex}>
            {row.map((project) => (
              <Link
                key={project.id || project.name}
                to={`/projects/${slugify(project.name)}`}
                className="project-card"
              >
                <strong>{project.name}</strong>
                <span>{project.category}</span>
              </Link>
            ))}
            {row.length < 3 &&
              Array(3 - row.length)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    style={{ flex: 1, visibility: "hidden" }}
                  />
                ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const createGrid = (
  list: Project[],
  columns = 3,
  filter: Category | null = null,
): Project[][] => {
  const filteredList = filter
    ? list.filter((item) => item.category === filter)
    : list;

  const grid: Project[][] = [];
  for (let i = 0; i < filteredList.length; i += columns) {
    grid.push(filteredList.slice(i, i + columns));
  }
  return grid;
};
