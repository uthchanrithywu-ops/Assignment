import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found-card">
        <span className="not-found-code" aria-hidden="true">404</span>
        <p className="not-found-eyebrow">Page not found</p>
        <h1 id="not-found-title">Looks like you took a wrong turn.</h1>
        <p className="not-found-copy">
          The page you’re looking for may have moved or doesn’t exist. Let’s get you back to learning.
        </p>
        <Link className="not-found-home" to="/">Back to home <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}

export default NotFound;
