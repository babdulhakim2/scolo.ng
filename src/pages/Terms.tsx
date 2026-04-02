import LegalLayout from "./LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">
      <section className="space-y-6 text-sm text-on-surface-variant leading-relaxed">
        <p className="text-white/90">
          These Terms of Service govern your access to and use of the SCOLO AI website. By using the site, you agree to these terms.
        </p>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-white">Use of the site</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Do not misuse the site or attempt to disrupt its operation.</li>
            <li>Do not attempt unauthorized access to systems or data.</li>
            <li>Content is provided for informational purposes and may change without notice.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-white">Intellectual property</h2>
          <p>
            SCOLO AI and associated marks, text, and design elements are owned by their respective rights holders and may not be used without permission.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-white">Disclaimer</h2>
          <p>
            The site is provided “as is” without warranties of any kind. To the maximum extent permitted by law, SCOLO AI disclaims all warranties and is not
            liable for damages arising from your use of the site.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-white">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
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

