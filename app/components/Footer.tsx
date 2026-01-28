import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="copyright">
          © {new Date().getFullYear()} <span className="brand">Oxo</span>. All
          rights reserved.
        </p>

        <p className="links">
          <a href="mailto:support@oxo.com" className="link">
            support@oxo.com
          </a>
          {" · "}
          <a href="/privacy" className="link">
            Privacy Policy
          </a>
          {" · "}
          <a href="/terms" className="link">
            Terms of Service
          </a>
          {" · "}
          <a href="/cgu" className="link">
            CGU
          </a>
          {" · "}
          <a href="/cgv" className="link">
            CGV
          </a>
        </p>
      </div>
    </footer>
  );
}
