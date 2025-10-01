import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./Members.css";
import Logo from "../../images/osccct-logo-transparent.png";
import AmberImg from "../../images/amber.png";
import MarkImg from "../../images/oroboros.png";
import DomImg from "../../images/doms_dog.png";
import GrmImg from "../../images/MountainMan.png";
import LexieImg from "../../images/lexiePFP.png";

// Creates a Role type that each member can have
enum Role {
  Director = "Director",
  Deputy = "Deputy Director",
  ChiefProjectOfficer = "Chief Project Officer",
  ChiefMarketingOfficer = "Chief Marketing Officer",
  ChiefOperationsOfficer = "Chief Operations Officer",
  Member = "Member",
  Alumni = "Alumni",
}

// Allows for members to be sorted by role hierarchy
const roleOrder: Record<Role, number> = {
  [Role.Director]: 1,
  [Role.Deputy]: 2,
  [Role.ChiefProjectOfficer]: 3,
  [Role.ChiefMarketingOfficer]: 4,
  [Role.ChiefOperationsOfficer]: 5,
  [Role.Member]: 6,
  [Role.Alumni]: 7,
};

// The skeleton of each member
interface Member {
  name: string;
  role: Role;
  imageUrl?: string;
  slug: string; // <-- used for /members/:slug
}

// helper to build slugs from names
const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Member list (add slug)
const memberList: Member[] = [
  { name: "Amber Feeley", role: Role.Director, imageUrl: AmberImg, slug: slugify("Amber Feeley") },
  { name: "Mark Henry", role: Role.ChiefMarketingOfficer, imageUrl: MarkImg, slug: slugify("Mark Henry") },
  { name: "Dominic Burfict", role: Role.Deputy, imageUrl: DomImg, slug: slugify("Dominic Burfict") },
  { name: "Lee Hamman", role: Role.Member, imageUrl: undefined, slug: slugify("Lee Hamman") },
  { name: "Guillermo Morrison", role: Role.Member, imageUrl: GrmImg, slug: slugify("Guillermo Morrison") },
  { name: "Lexie Cabading", role: Role.Member, imageUrl: LexieImg },
];

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
  // Sort by role, then name for stable order
  const sortedMembers = useMemo(
    () =>
      [...memberList].sort((a, b) => {
        const diff = roleOrder[a.role] - roleOrder[b.role];
        return diff !== 0 ? diff : a.name.localeCompare(b.name);
      }),
    []
  );

  const pyramid = createPyramid(sortedMembers);

  return (
    <div className="members-container">
      <h2>Our Members</h2>
      {pyramid.map((row, rowIndex) => (
        <div className="member-row" key={rowIndex}>
          {row.map((member) => (
            <Link
              to={`/members/${member.slug}`}        // <-- hyperlink
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
