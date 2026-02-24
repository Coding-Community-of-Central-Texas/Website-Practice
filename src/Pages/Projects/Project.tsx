import "./Project.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/Projects";
import Logo from "../../images/osccct-logo-transparent.png";
import { slugify } from "../../data/Projects";

type Socials = {
  github?: string;
  linkedin?: string;
  website?: string;
  email?: string;
};
type Project = { title: string; summary?: string; link?: string };
type TimelineItem = {
  title: string;
  org?: string;
  date?: string;
  details?: string;
};

interface ProfileData {
  title?: string;
  pronouns?: string;
  location?: string;
  bio?: string;
  skills?: string[];
  badges?: string[];
  socials?: Socials;
  projects?: Project[];
  timeline?: TimelineItem[];
}

export default function Project() {
  const { slug } = useParams<{ slug?: string }>();
  const project = projects.find((m) => slugify(m.name) === slug);

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch per-member JSON from /public/profiles/<slug>.json
  useEffect(() => {
    if (!slug) return;
    const url = `${import.meta.env.BASE_URL}profiles/${slug}.json`;
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          // Handle 404 or other bad responses gracefully
          return null;
        }
        return res.json();
      })
      .then((data) => setProfile(data))
      .catch(() => setProfile(null)) // prevent error spam
      .finally(() => setLoading(false));
  }, [slug]);

  // Set page title
  useEffect(() => {
    document.title = project
      ? `${project.name} — OSCCCT`
      : "Project not found — OSCCCT";
  }, [project]);

  if (!slug || !project) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Project not found</h2>
        <p>The project you’re looking for doesn’t exist.</p>
        <Link to="/projects">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div
      className="member-profile"
      style={{ maxWidth: "75%", margin: "0 auto", padding: "2rem" }}
    >
      <Link
        to="/projects"
        style={{
          display: "inline-block",
          marginBottom: "1rem",
          textDecoration: "none",
        }}
      >
        ← Back to Projects
      </Link>

      {/* Hero */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <img
            src={Logo}
            alt={project.name}
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src !== Logo) img.src = Logo;
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        <div>
          <h1 style={{ margin: 0 }}>{project.name}</h1>
          <p style={{ color: "#6b7280", marginTop: 4 }}>{project.category}</p>
        </div>
      </div>

      {/* About */}
      <div style={{ marginTop: "1.5rem", lineHeight: 1.7 }}>
        <h3>Description</h3>
        {loading ? (
          <p>Loading profile…</p>
        ) : (
          <p>
            {project?.description ||
              "This project does not have a description yet!"}
          </p>
        )}
      </div>
    </div>
  );
}
