import LegalLayout from "./LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <section className="space-y-6 text-sm text-on-surface-variant leading-relaxed">
        <p className="text-white/90">
          This Privacy Policy explains how SCOLO AI collects, uses, and protects information when you visit our website.
        </p>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-white">Information we process</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="text-white">Contact information</span> you provide (for example, when emailing us).
            </li>
            <li>
              <span className="text-white">Basic usage data</span> (only if you opt into analytics consent).
            </li>
            <li>
              <span className="text-white">Technical logs</span> needed to operate and secure the site (e.g., IP address, user-agent) may be processed by hosting providers.
            </li>
          </ul>
        </div>

        <div id="cookies" className="space-y-3">
          <h2 className="font-serif text-2xl text-white">Cookies and local storage</h2>
          <p>
            We use essential storage required for the website to function. We may also use optional analytics storage if you consent.
          </p>
          <p>
            You can change your cookie preference at any time from the website footer under <span className="text-white">Cookie Consent</span>.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-white">Your choices</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Opt out of analytics storage via the cookie banner/settings.</li>
            <li>Use browser privacy controls (including “Do Not Track” where supported).</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-white">Contact</h2>
          <p>
            If you have questions about this policy, contact us at{" "}
            <a className="underline hover:text-primary transition-colors" href="mailto:hakim@scolo.ng">
              hakim@scolo.ng
            </a>
            .
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}

