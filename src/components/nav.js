import React from "react";
import MirrorLogo from "../components/logo";
const links = [
  { href: "https://zeit.co/now", label: "Features" },
  { href: "https://github.com/zeit/next.js", label: "Pricing" },
  { href: "https://github.com/zeit/next.js", label: "Login" },
  {
    href: "https://github.com/zeit/next.js",
    label: "Book a demo",
    className: "button"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}-${link.className}`;
  return link;
});

const Nav = () => (
  <nav style={{ background: "#FFF", zIndex: 2 }}>
    <a href="/">
      <MirrorLogo width="15em"></MirrorLogo>
    </a>

    <ul style={{ padding: 0, margin: 0 }}>
      {links.map(({ key, href, label, className }) => (
        <li key={key}>
          <a href={href} className={className}>
            {label}
          </a>
        </li>
      ))}
    </ul>

    <style>{`
      nav {
        text-align: center;
        display: flex;
        width: 100%;
        padding: 2em 3em;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: stretch;
        align-content: stretch;
        box-sizing: border-box;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
      }
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        align-content: stretch;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 0 2em;
      }
      a {
        color: #000;
        text-decoration: none;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
      }
      a:hover {
        color: #4050ff;
      }
    `}</style>
  </nav>
);

export default Nav;
