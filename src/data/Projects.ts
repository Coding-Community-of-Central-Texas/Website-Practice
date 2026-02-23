export enum Category {
  Cyber = "CyberSecurity",
  Coding = "Coding",
  Js = "Javascript",
  Monogame = "Monogame",
}

export const categoryOrder: Record<Category, number> = {
  [Category.Cyber]: 1,
  [Category.Coding]: 2,
  [Category.Js]: 3,
  [Category.Monogame]: 4,
};

export interface Project {
  id: number;
  name: string;
  category: Category;
  url?: string;
  description?: string;
}

// Helpers
export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const projects: Project[] = [
  {
    id: 1,
    name: "Website",
    category: Category.Coding,
  },
  {
    id: 2,
    name: "Rainy Daze",
    category: Category.Monogame,
  },
];
