import { Link } from "react-router";
import Header from "../components/Header";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <title>404 - Page Not Found | Ecommerce Project</title>

      <Header />

      <div className="not-found-page">
        <div className="not-found-container">
          <div className="not-found-decoration">
            <div className="empty-box">
              <div className="box-lid"></div>
              <div className="box-body">
                <div className="box-question">?</div>
              </div>
            </div>
          </div>

          <div className="not-found-code">404</div>

          <h1 className="not-found-title">Oops! Page not found</h1>

          <div className="not-found-divider"></div>

          <p className="not-found-description">
            Looks like this page got lost in the warehouse. Let's get you back
            to shopping!
          </p>

          <div className="not-found-actions">
            <Link to="/" className="button-primary not-found-button-home">
              Go to Homepage
            </Link>
            <Link to="/" className="not-found-link link-primary">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
