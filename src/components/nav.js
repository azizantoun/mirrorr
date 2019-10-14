import React from "react";
import MirrorLogo from "../components/logo";
const links = [
  { href: "", label: "Meet Mirrorr" },
  { href: "", label: "How Does it Work" },
  { href: "", label: "Features" },
  {
    href: "",
    label: "Book a demo",
    className: "button"
  },
  { href: "http://mirrorr.com/#/login", label: "Login", className:"login-button" }

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}-${link.className}`;
  return link;
});

const Nav = () => (
  <nav style={{ background: "#FFF", zIndex: 2 }}>
    <a href="/" className="logo-container">
      <MirrorLogo width="15em" style={{ marginTop: "0.8em" }}></MirrorLogo>
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
        padding: 1em 3em;
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
        border-bottom:1px solid #EEE;
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
      .logo-container{
        width:16em;
        transition:width 300ms ease;
      }
      @media (max-width: 900px) {
        .logo-container{
          width:2em;
          overflow:hidden;
        }
        li{
          padding:0 1em;
        }
        nav{
          padding:1em;
        }
      

      }
      
    `}</style>
  </nav>
);

export default Nav;
