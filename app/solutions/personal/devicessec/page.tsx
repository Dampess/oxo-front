import "../../../styles/solutions-sub.scss";
import Link from "next/link";

export default function DeviceSecurityPage() {
  return (
    <main className="solutions-sub">
      <div className="container">
        <h1 className="title">Device Security</h1>
        <p className="subtitle">
          Check your device for security issues and improve your digital safety.
        </p>

        <div className="card">
          <h3>Quick Device Scan</h3>
          <p>
            Oxo helps identify common security risks on your device and provides
            clear recommendations to improve protection.
          </p>
        </div>

        <div className="card">
          <h3>What We Review</h3>
          <ul>
            <li>Outdated software and vulnerabilities</li>
            <li>Basic configuration weaknesses</li>
            <li>Suspicious activity indicators</li>
            <li>General security hygiene</li>
          </ul>
        </div>

        <div className="card">
          <h3>Why Use It</h3>
          <ul>
            <li>Improve your device security in minutes</li>
            <li>Reduce exposure to malware</li>
            <li>Get easy-to-understand recommendations</li>
          </ul>
        </div>

        <div className="cta">
          <Link href="/downloads" className="primary">
            Download Oxo
          </Link>
          <Link href="/solutions/personal" className="secondary">
            Back to Personal Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
