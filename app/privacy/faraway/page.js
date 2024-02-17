import React from "react";

const Privacy = () => {
  return (
    <section className="privacy-container">
      <h1 className="privacy-title">
        Privacy Policy for "Far Away: Running from the Future"
      </h1>
      <p className="pb-10">
        This Privacy Policy describes how "Far Away: Running from the Future"
        collects, uses, and shares user information.
      </p>
      <h2>1.Information Collection</h2>
      <p>
        The game does not collect any personally identifiable information from
        users. However, please note that the game uses Unity Ads to serve
        advertisements, and Unity Ads may collect certain information in
        accordance with its own privacy policy. This information may include
        advertising identifiers, device information, and user interaction data
        for advertising purposes. Please refer to Unity Ads' privacy policy for
        more information on data collection.
      </p>
      <h2>2.Use of Information</h2>
      <p>
        Information collected by Unity Ads may be used to deliver targeted
        advertisements to users based on their preferences and usage behavior.
      </p>
      <h2>3.Sharing of Information</h2>
      <p>
        Information collected by Unity Ads may be shared with third parties in
        accordance with Unity Ads' privacy policy.
      </p>
      <h2>4.Data Security</h2>
      <p>
        We take appropriate measures to protect the information collected by
        Unity Ads and to prevent unauthorized access, disclosure, alteration, or
        destruction of this information.
      </p>
      <h2>5.Modification of Privacy Policy</h2>
      <p>
        We reserve the right to modify this privacy policy at any time. Any
        changes to this privacy policy will be effective upon posting within the
        game.
      </p>
      <h2>6.Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this privacy policy,
        please contact us at{" "}
        <a
          href="mailto:yassinelatlassi@gmail.com"
          className="hoverable"
          target="_blank"
        >
          yassinelatlassi@gmail.com
        </a>
        .
      </p>
      <small className="pt-10 inline-block opacity-50 ">
        This privacy policy was last updated on 2024-02-16.
      </small>
    </section>
  );
};

export default Privacy;
