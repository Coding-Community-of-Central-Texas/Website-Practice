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
  slug: string;          // <- used in route /members/:slug
  bio?: string;          // <- optional short bio for profile page
}

// Helpers
const slugify = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Images (adjust names if yours differ)
import Logo from "../images/osccct-logo-transparent.png";
import AmberImg from "../images/amber.png";
import MarkImg from "../images/oroboros.png";
import DomImg from "../images/doms_dog.png";
import GrmImg from "../images/MountainMan.png";

export const members: Member[] = [
  { name: "Amber Feeley", role: Role.Director, imageUrl: AmberImg, slug: slugify("Amber Feeley"), bio: "Director of OSCCCT." },
  { name: "Mark Henry", role: Role.ChiefMarketingOfficer, imageUrl: MarkImg, slug: slugify("Mark Henry"), bio: "Leads marketing initiatives." },
  { name: "Dominic Burfict", role: Role.Deputy, imageUrl: DomImg, slug: slugify("Dominic Burfict"), bio: "Deputy Director." },
  { name: "Lee Hamman", role: Role.Member, imageUrl: Logo, slug: slugify("Lee Hamman"), bio: "Community member." },
  { name: "Guillermo Morrison", role: Role.Member, imageUrl: GrmImg, slug: slugify("Guillermo Morrison"), bio: "Back-end & cybersecurity." },
];
