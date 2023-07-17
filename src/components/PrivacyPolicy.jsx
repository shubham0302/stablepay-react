import React from "react";

const PrivacyPolicy = () => {
  const mainHeadingStyle = {
    fontSize: "28px",
    marginBottom: "32px",
    fontWeight: "bold",
    color: "#fff",
  };

  const headingStyle = {
    fontSize: "18px",
    marginBottom: "12px",
    fontWeight: "bold",
    color: "#fff",
  };

  const paragraphStyle = {
    fontSize: "16px",
    marginBottom: "30px",
    color: "#e3e3e3",
  };

  const linkStyle = {
    color: "#1a1a33",
    textDecoration: "none",
  };

  return (
    <div className="bg-pri py-[8vh] px-[12vw]">
      <h1 style={mainHeadingStyle}>Privacy Policy for Stable Pay</h1>

      <p style={paragraphStyle}>
        At Stable Pay, we take the privacy of our users very seriously. This
        policy outlines how we collect, use, and protect personal information
        from users of our app store.
      </p>

      <h2 style={headingStyle}>Information Collection</h2>
      <p style={paragraphStyle}>
        We collect personal information from users who download or use our app
        store, including names, email addresses, and device information such as
        operating system and version. We may also collect other information
        voluntarily provided by users, such as feedback or reviews.
      </p>

      <h2 style={headingStyle}>Use of Information</h2>
      <p style={paragraphStyle}>
        We use personal information to provide a personalized user experience,
        improve our services, and provide customer support. We may also use
        personal information for marketing purposes, such as to send promotional
        emails or push notifications.
      </p>

      <h2 style={headingStyle}>Third-Party Sharing</h2>
      <p style={paragraphStyle}>
        We may share personal information with third-party service providers,
        such as analytics providers or advertisers, in order to improve our
        services or show more relevant ads. We do not sell personal information
        to third parties.
      </p>

      <h2 style={headingStyle}>Data Security</h2>
      <p style={paragraphStyle}>
        We take appropriate measures to protect user data, including encryption
        and secure servers. However, no data transmission over the internet or
        electronic storage can be guaranteed to be 100% secure, so we cannot
        guarantee absolute security.
      </p>

      <h2 style={headingStyle}>User Rights</h2>
      <p style={paragraphStyle}>
        Users have the right to access, correct, or delete their personal
        information, and to object to or restrict processing of such
        information. Users can exercise these rights by contacting us at{" "}
        <a style={linkStyle} href="mailto:help@stablepay.global">
          help@stablepay.global
        </a>
        .
      </p>

      <h2 style={headingStyle}>Changes to Policy</h2>
      <p style={paragraphStyle}>
        We may update this privacy policy from time to time, and will notify
        users of any material changes by posting the updated policy on our
        website or within the app store. Users are encouraged to review the
        policy periodically.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
