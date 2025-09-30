import React from "react";
import "./Members.css";
import Logo from "../../images/OSCCCT Logo transparent.png";
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

// Allows for members to be sorted by role hiearchy
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
// Everyone has a name and role
// imageUrl is optional
interface Member {
  name: string;
  role: Role;
  imageUrl?: string;
}

// TODO: Add yourself to the member list with your current role
// Optional: Upload a photo to the /images folder then add it to the imports
// at the top of the page.
// Then add the role variable to your member object
const memberList: Member[] = [
  { name: "Amber Feeley", role: Role.Director, imageUrl: AmberImg },
  { name: "Mark Henry", role: Role.ChiefMarketingOfficer, imageUrl: MarkImg },
  { name: "Dominic Burfict", role: Role.Deputy, imageUrl: DomImg },
  { name: "Lee Hamman", role: Role.Member },
  { name: "Guillermo Morrison", role: Role.Member, imageUrl: GrmImg },
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
  // Sorts member list by role
  const sortedMembers = [...memberList].sort(
    (a, b) => roleOrder[a.role] - roleOrder[b.role],
  );

  const pyramid = createPyramid(sortedMembers);

  return (
    <div className="members-container">
      <h2>Our Members</h2>
      {
        // Creates a map of each member in the list and their attributes (name, role, image)
        pyramid.map((row, rowIndex) => (
          <div className="member-row" key={rowIndex}>
            {row.map((member, index) => (
              <div className="member-card" key={index}>
                <div className="image-container">
                  <img
                    src={member.imageUrl || Logo}
                    alt={member.name}
                    className="member-image"
                  />
                </div>
                <div>
                  <strong>{member.name}</strong>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
}
