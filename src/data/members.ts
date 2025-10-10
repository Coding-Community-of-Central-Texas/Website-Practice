// Shared member data so both the grid and profile page use the same source.
export enum Role {
  Director = "Director",
  Deputy = "Deputy Director",
  ChiefProjectOfficer = "Chief Project Officer",
  ChiefMarketingOfficer = "Chief Marketing Officer",
  ChiefOperationsOfficer = "Chief Operations Officer",
  Member = "Member",
  Alumni = "Alumni",
}

export const roleOrder: Record<Role, number> = {
  [Role.Director]: 1,
  [Role.Deputy]: 2,
  [Role.ChiefProjectOfficer]: 3,
  [Role.ChiefMarketingOfficer]: 4,
  [Role.ChiefOperationsOfficer]: 5,
  [Role.Member]: 6,
  [Role.Alumni]: 7,
};

export interface Member {
  name: string;
  role: Role;
  imageUrl?: string;
  bio?: string; // <- optional short bio for profile page
}

// Helpers
export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Images (adjust names if yours differ)
import Logo from "../images/osccct-logo-transparent.png";
import AmberImg from "../images/amber.png";
import MarkImg from "../images/oroboros.png";
import DomImg from "../images/doms_dog.png";
import GrmImg from "../images/MountainMan.png";
import LexieImg from "../images/lexiePFP.png";
import JoseImg from "../images/josepfp.png";

// TODO: Add yourself to the member list with your current role
// Optional: Upload a photo to the /images folder,
// then add it to the imports above.
export const members: Member[] = [
  {
    name: "Amber Feeley",
    role: Role.Director,
    imageUrl: AmberImg,
    bio: "Director of OSCCCT.",
  },
  {
    name: "Mark Henry",
    role: Role.ChiefMarketingOfficer,
    imageUrl: MarkImg,
    bio: "Leads marketing initiatives.",
  },
  {
    name: "Dominic Burfict",
    role: Role.Deputy,
    imageUrl: DomImg,
    bio: "Deputy Director.",
  },
  {
    name: "Lee Hamman",
    role: Role.Member,
    imageUrl: Logo,
    bio: "Community member.",
  },
  {
    name: "Guillermo Morrison",
    role: Role.Member,
    imageUrl: GrmImg,
    bio: "Back-end & cybersecurity.",
  },
  {
    name: "Jose Ramos",
    role:Role.ChiefOperationsOfficer,
    imageUrl: JoseImg,
    bio: "Community member."
  },
  {
    name: "Lexie Cabading",
    role: Role.Member,
    imageUrl: LexieImg,
    bio: "Community member.",
  },
];
