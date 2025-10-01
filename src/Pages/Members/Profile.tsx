import "./Profile.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { members } from "../../data/members";
import Logo from "../../images/osccct-logo-transparent.png";
import { slugify } from "../../data/members";

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

export default function MemberProfile() {
  const { slug } = useParams<{ slug?: string }>();
  const member = members.find((m) => slugify(m.name) === slug);

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
    document.title = member
      ? `${member.name} — OSCCCT`
      : "Member not found — OSCCCT";
  }, [member]);

  if (!slug || !member) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Member not found</h2>
        <p>The profile you’re looking for doesn’t exist.</p>
        <Link to="/members">← Back to Members</Link>
      </div>
    );
  }

  return (
    <div
      className="member-profile"
      style={{ maxWidth: "75%", margin: "0 auto", padding: "2rem" }}
    >
      <Link
        to="/members"
        style={{
          display: "inline-block",
          marginBottom: "1rem",
          textDecoration: "none",
        }}
      >
        ← Back to Members
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
            src={member.imageUrl || Logo}
            alt={member.name}
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
          <h1 style={{ margin: 0 }}>{member.name}</h1>
          <p style={{ color: "#6b7280", marginTop: 4 }}>
            {member.role}
            {profile?.pronouns?.trim() && (
              <span style={{ fontStyle: "italic" }}>
                {" "}
                | {profile?.pronouns}
              </span>
            )}
          </p>
          {profile?.title && <p style={{ marginTop: 4 }}>{profile.title}</p>}
          {profile?.location && (
            <p style={{ marginTop: 4 }}>📍 {profile.location}</p>
          )}
        </div>
      </div>

      {/* About */}
      <div style={{ marginTop: "1.5rem", lineHeight: 1.7 }}>
        <h3>About</h3>
        {loading ? (
          <p>Loading profile…</p>
        ) : (
          <p>{profile?.bio || "This member hasn’t added a bio yet."}</p>
        )}
      </div>

      {/* Skills */}
      {profile?.skills && profile.skills.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <h3>Skills</h3>
          <ul>
            {profile.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: "24px",
          flexWrap: "wrap",
          marginTop: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "1 1 30%",
            gap: "24px",
          }}
        >
          {/* Socials */}
          {profile?.socials && (
            <div>
              <h3>Connect</h3>
              {profile.socials.github && (
                <p>
                  <a href={profile.socials.github}>GitHub</a>
                </p>
              )}
              {profile.socials.linkedin && (
                <p>
                  <a href={profile.socials.linkedin}>LinkedIn</a>
                </p>
              )}
              {profile.socials.website && (
                <p>
                  <a href={profile.socials.website}>Website</a>
                </p>
              )}
              {profile.socials.email && (
                <p>
                  <a href={profile.socials.email}>Email</a>
                </p>
              )}
            </div>
          )}

          {/* Projects */}
          {profile?.projects && (
            <div>
              <h3>Projects</h3>
              {profile.projects.map((s) => (
                <div>
                  <p key={s.title}>
                    <a href={s.link}>{s.title}</a>
                  </p>
                  <ul>
                    <li>{s.summary}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Timeline */}
        {profile?.timeline && (
          <div className="profile-links-wrapper">
            <h3>Timeline</h3>
            {profile.timeline.map((s) => (
              <div style={{ padding: "0 0 8px 0" }}>
                <strong key={s.org} style={{ fontSize: "medium" }}>
                  {s.org}
                </strong>
                <p key={s.title} style={{ fontStyle: "italic", margin: "0px" }}>
                  {s.title} | {s.date}
                </p>
                <ul>
                  <li key={s.details}>{s.details}</li>
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Badges */}
        {profile?.badges && (
          <div className="profile-links-wrapper">
            <h3>Badges</h3>
            {profile.badges.map((b) => (
              <ul>
                <li>{b}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
