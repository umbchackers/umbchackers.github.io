import React from "react";
import "../css/Privacy.css";

export const Privacy = () => {
  return (
    <html>
      <div className="privacy-page">
        <a href="./">
          <img src={require("../assets/dog_logo.png")} alt="LOGO"></img>
        </a>
        <h1>Privacy Policy</h1>
        <p>This is the privacy policy for hackUMBC.</p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal Information: email adresses, numbers, etc..</li>
          <li>Non-Personal Information: IP addresses</li>
        </ul>

        <h2>How We Use Information</h2>
        <p>
          We may use the collected information for various purposes, including:
        </p>
        <ul>
          <li>Providing and maintaining our services.</li>
          <li>Improving our services and website.</li>
          <li>Communicating with users.</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services that collect information as well.
          Please review their privacy policies for details.
        </p>

        <h2>Security</h2>
        <p>
          We take security seriously and strive to protect your information.
          However, no method of transmission over the internet or electronic
          storage is 100% secure. We cannot guarantee absolute security.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will
          be posted on this page with the updated date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our privacy policy, please
          contact us at sponsor@hackumbc.tech.
        </p>
      </div>
    </html>
  );
};
