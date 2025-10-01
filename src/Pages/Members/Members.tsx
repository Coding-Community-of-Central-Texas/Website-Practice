import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./Members.css";
import Logo from "../../images/osccct-logo-transparent.png";
import { members, roleOrder } from "../../data/members";

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

export default function Members() {
  document.title = "Our Members";

  // Sort by role, then name for stable order
  const sortedMembers = useMemo(
    () =>
      [...members].sort((a, b) => {
        const diff = roleOrder[a.role] - roleOrder[b.role];
        return diff !== 0 ? diff : a.name.localeCompare(b.name);
      }),
    [],
  );

  const pyramid = createPyramid(sortedMembers);

  return (
    <div className="members-container">
      <h2>Our Members</h2>
      {pyramid.map((row, rowIndex) => (
        <div className="member-row" key={rowIndex}>
          {row.map((member) => (
            <Link
              to={`/members/${member.slug}`} // <-- hyperlink
              className="member-card"
              key={member.slug}
            >
              <div className="image-container">
                <img
                  src={member.imageUrl || Logo}
                  alt={`${member.name} — ${member.role}`}
                  className="member-image"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.src !== Logo) img.src = Logo; // fallback
                  }}
                />
              </div>
              <div>
                <strong>{member.name}</strong>
                <p>{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
