import React from "react";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  function showFeatured() {
    window.scrollTo({
      top: props.refFeatured.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  function showContact() {
    window.scrollTo({
      top: props.refContact.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <header class="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Simpul
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className={`nav-item`}>
                <a className="nav-link" onClick={showFeatured}>
                  Featured
                </a>
              </li>
              <li className={`nav-item`}>
                <a className="nav-link" onClick={showContact}>
                  Setting
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
