import React from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Clow",
  description:
    "How Clow collects, uses, discloses, and safeguards your information when you visit clow.work and use our consultation services.",
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPage
      slug="privacy-policy"
      title="Privacy Policy"
      subtitle="Clow ('we,' 'our,' 'us') respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website clow.work, use our consultation interfaces, and interact with our digital products and services."
      effectiveDate="January 12, 2026"
      lastUpdated="June 13, 2026"
      sections={[
        {
          title: "Overview",
          body: [
            "By accessing or using our Site or services, you consent to the collection and use of information in accordance with this Privacy Policy.",
            "If you have any questions, contact our data administration team at admin@clow.work.",
          ],
        },
        {
          title: "Information We Collect",
          body: "We collect information that you voluntarily provide when you express an interest in obtaining information about us or our services, sign up for newsletters, fill out contact forms, purchase digital products, or request custom software consulting services. We collect both Personal Information and Non-Personal Information.",
        },
        {
          title: "Personal Information",
          body: [
            "Get in Touch form: When submitting an exploration lead, we process your full name, active email address, and the entire text context of your input message to accurately assess your business requirements.",
            "Book a Call calendar: When using our embedded calendar interface, we collect your identity details, scheduling parameters, phone number, and any attached project briefs or context files to prepare our engineering analysts for the session.",
            "Transactional & billing: We collect full billing name, address, and transaction records when you purchase digital products (such as Notion templates) or process a 10% project security deposit. Full payment card information is securely processed directly by our third-party payment gateways and is not stored on our infrastructure.",
          ],
        },
        {
          title: "Non-Personal Information & Technical Footprint",
          body: "Automatically collected when you visit, use, or navigate the Site:",
          list: [
            "IP address and routing strings",
            "Browser and device rendering types",
            "Operating system profiles and device characteristics",
            "Pages visited and interaction durations",
            "Traffic and analytics data",
          ],
        },
        {
          title: "Cookies & Tracking",
          body: "We use cookies, web beacons, and similar tracking technologies to facilitate this collection. You can manage or disable cookie settings through your personal browser preferences — disabling certain cookies may impact the performance and functionality of our consultation booking forms.",
        },
        {
          title: "How We Use Your Information",
          body: "We process your data strictly to support our consulting, digital product delivery, and software assembly pipelines:",
          list: [
            "Strategic analysis — audit your operational targets and decide whether a Low-Code/No-Code framework or a Custom Code architecture is the right fit.",
            "Financial drafting — generate, validate, and email personalized project proposals, scope timelines, and 10% commitment deposit invoices.",
            "Communication management — schedule, modify, confirm, or follow up on live consultation calls.",
            "Product delivery — fulfill and deliver off-the-shelf digital products, Notion templates, or downloadable files.",
            "Customer support — provide customer care, resolve issues, and process approved refund applications.",
            "Security & compliance — prevent fraudulent transactions, protect infrastructure against vulnerabilities, and comply with legal obligations.",
          ],
          callout: {
            label: "Our commitment",
            text: "We fundamentally stand against selling, renting, or trading corporate lead profiles or personal data to ad brokers or third-party advertisers.",
          },
        },
        {
          title: "Third-Party Service Providers",
          body: "We use trusted third-party services to support our core business operations. These entities may collect, store, or process data on our behalf. They maintain their own independent privacy policies and are solely responsible for safeguarding data according to their terms.",
          table: {
            headers: ["Category", "Providers"],
            rows: [
              ["Payment Processors", "Razorpay, Stripe"],
              ["Calendar & Scheduling", "Calendly, SavvyCal, Google Calendar"],
              ["Email & Marketing", "ConvertKit, Buttondown, Mailchimp"],
              ["Analytics", "Google Analytics"],
              ["Hosting & Infrastructure", "Vercel, AWS, Cloudflare"],
            ],
          },
        },
        {
          title: "Data Retention & Security",
          body: [
            "Retention timelines: Lead metadata, calendar records, and personal parameters are safely preserved for the duration of your active business relationship with us, to satisfy legal obligations, or until you issue a formal extraction/deletion directive.",
            "Security safeguards: We wrap incoming parameters in enterprise-tier technical and organizational encryption layers designed to limit illegal exposure, theft, or data leakage. However, please recognize that no system transmitting details over global networks is completely invulnerable.",
          ],
        },
        {
          title: "How We Share Information",
          body: "We may disclose your data only under the following limited conditions:",
          list: [
            "With service providers necessary to operate our business infrastructure.",
            "To comply with legal obligations, court orders, or government requests.",
            "In connection with business transfers, mergers, or acquisitions.",
            "If we believe disclosure is necessary to protect our operational rights, property, or safety.",
          ],
        },
        {
          title: "Your Data Rights",
          body: "Regardless of global geolocation, Clow guarantees complete rights regarding your data. You have the right to:",
          list: [
            "Access and review the personal data we hold about you.",
            "Correct or update inaccurate or outdated information.",
            "Request the complete erasure and deletion of your personal data from our active databases.",
            "Opt out of marketing or promotional communications.",
          ],
          callout: {
            label: "Exercise your rights",
            text: "Contact our data administration team at admin@clow.work. Your request will be processed and executed within 72 hours.",
          },
        },
        {
          title: "Children's Privacy",
          body: "Our services, digital products, and consultations are not directed to children under the age of 13. We do not knowingly collect personal information from children.",
        },
        {
          title: "Changes to This Policy",
          body: 'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted directly on this page with a revised "Last Updated" effective date at the top. We encourage you to review this policy periodically.',
        },
        {
          title: "Contact",
          body: "For any clarifying questions, data modification requests, or immediate legal queries regarding this Privacy Policy, please communicate directly with us:",
          list: [
            "Email: admin@clow.work",
            "Contact form: clow.work/contact",
            "Registered Location: Delhi, New Delhi, India",
          ],
        },
      ]}
      cta={{
        title: "Have questions about your data?",
        description:
          "Our data administration team responds to all privacy and data-rights requests within 72 hours.",
        buttonText: "Contact Us",
        buttonHref: "/contact",
      }}
    />
  );
};

export default PrivacyPolicyPage;
