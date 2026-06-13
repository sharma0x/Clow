import React from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Clow",
  description:
    "Refund and cancellation terms for Clow digital products, custom consulting services, and project deposits.",
};

const RefundPolicyPage: React.FC = () => {
  return (
    <LegalPage
      slug="refund-policy"
      title="Refund & Cancellation Policy"
      subtitle="Thank you for partnering with Clow. We build and engineer reliable, high-tier digital frameworks, including premium productivity assets (Notion templates) and enterprise-level engineering consulting solutions. This policy outlines our refund architecture across all operational workflows."
      lastUpdated="June 13, 2026"
      sections={[
        {
          title: "At a Glance",
          body: "A quick reference for the full refund matrix. The detailed terms follow below.",
          table: {
            headers: ["What", "Refundable?", "Conditions"],
            rows: [
              ["Digital products (Notion templates, downloads)", "❌ No", "All sales final once delivered"],
              ["Duplicate digital product purchase", "✅ Yes", "Within 7 days"],
              ["Custom project — 10% deposit, days 1–7", "✅ 100%", "Before environment/wireframing starts"],
              ["Custom project — 10% deposit, days 8–15", "✅ 50%", "Partial; covers scoping & opportunity cost"],
              ["Custom project — 10% deposit, day 16+", "❌ 0%", "Non-refundable"],
              ["Completed work / milestones", "❌ No", "Already delivered"],
              ["Service already started (discovery, wireframing)", "❌ No", "—"],
              ["Satisfaction exception", "⚠️ Discretionary", "Within 2 business days, at Clow's sole discretion"],
              ["Technical error on our end", "✅ Full refund", "If unresolved within 2 business days"],
              ["Chargeback without contact", "🚫 Breach", "Account deactivation + license revocation"],
            ],
          },
        },
        {
          title: "Digital Products",
          badge: "Notion Templates & Downloads",
          body: "Digital templates, downloadable files, and software assets provide instant access and complete intellectual property distribution upon payment.",
          list: [
            "All sales final — purchases of Notion templates, pre-built components, or downloadable systems are entirely non-refundable, non-exchangeable, and non-cancellable.",
            "No exchanges — once a digital product has been delivered to your email or accessed via a download link, we cannot provide refunds, exchanges, or cancellations.",
            "Exception — duplicate purchase: If you accidentally purchased the same digital product twice, contact us within 7 days for a refund of the duplicate transaction.",
          ],
        },
        {
          title: "Consulting & Custom Services",
          body: "For custom engagements (Low-Code / No-Code implementation or Custom Code solutions):",
          list: [
            "Work in progress — payments made for work already completed or milestones already achieved are non-refundable.",
            "Service commencement — no refunds are issued once service delivery (including the initial discovery phase or wireframing) has started.",
          ],
        },
        {
          title: "Project Payment Structure",
          body: "For tailored digital infrastructure contracts, clow.work uses a 10% Upfront Commitment Deposit + 90% Completion Settlement structure to protect production schedules:",
          list: [
            "10% Project Security & Commitment Deposit — required upon formal acceptance of a custom engineering quote. Secures dedicated engineering calendar slots, locks down specialized infrastructure developers, and reserves commercial capacity.",
            "90% Completion Settlement — due immediately upon structural milestone delivery and testing, prior to administrative hosting handover.",
          ],
        },
        {
          title: "Deposit Cancellation Timelines",
          badge: "Time-Decay Refund Layout",
          body: "Because blocking project windows prevents Clow from accepting alternative enterprise clients, the 10% Security Deposit follows a strict time-decay refund layout:",
          table: {
            headers: ["Window", "Days from deposit", "Refund", "Conditions"],
            rows: [
              [
                "Window 1",
                "Day 1 – 7",
                "100%",
                "Must notify before active environment configuration or wireframing starts.",
              ],
              [
                "Window 2",
                "Day 8 – 15",
                "50%",
                "Remaining 50% retained to cover data analysis, scoping, architecture planning, and blocked opportunity costs.",
              ],
              [
                "Window 3",
                "Day 16+",
                "0%",
                "Entire deposit becomes non-refundable; project blueprint and infrastructure already reserved.",
              ],
            ],
          },
        },
        {
          title: "Exceptional Circumstances & Satisfaction",
          body: "We value your partnership and want you to be satisfied with your experience.",
          list: [
            "Satisfaction window — if a digital product or service does not meet your expectations, you may submit a refund request within 2 business days of purchase. These requests are granted at the sole discretion of clow.work.",
            "Technical errors — if a technical error on our part results in the non-delivery of a product, and we cannot rectify it within 2 business days, a full refund will be issued.",
          ],
        },
        {
          title: "Chargebacks",
          body: "We believe in open communication. Initiating a chargeback or payment dispute without first contacting our support team is considered a breach of our Terms of Service and may result in:",
          list: [
            "Immediate, permanent deactivation of your user profiles and accounts across the clow.work network.",
            "Instant workspace freeze, data deletion, and revocation of license access to all previously delivered templates or files.",
            "Instant termination of any active dev pipelines without financial recourse.",
          ],
        },
        {
          title: "Refund Request Process",
          body: "To request a refund under the 'Exceptional Circumstances' clause, email admin@clow.work with the following:",
          table: {
            headers: ["Field", "What to include"],
            rows: [
              ["Subject Line", "Refund Request - [Your Name / Business Name]"],
              ["Proof of Purchase", "Your receipt or invoice"],
              ["Transaction ID", "Found in your confirmation email"],
              ["Reason for Request", "Detailed explanation of why the product or service did not meet your needs"],
            ],
          },
        },
        {
          title: "Processing Times",
          body: "Once approved, refunds are processed within 5–10 business days. The funds will be credited back to the original payment method used at checkout. Please note that your bank or credit card company may take additional time to post the transaction to your account.",
        },
        {
          title: "Contact",
          body: "For questions about this Refund Policy or to update your service status:",
          list: [
            "Email: admin@clow.work",
            "Contact form: clow.work/contact",
            "Registered Location: Delhi, India",
          ],
        },
      ]}
      cta={{
        title: "Need to request a refund?",
        description:
          "Email admin@clow.work with your receipt, transaction ID, and a brief explanation. Most requests are resolved within 2 business days.",
        buttonText: "Email Refund Team",
        buttonHref: "mailto:admin@clow.work?subject=Refund%20Request",
      }}
    />
  );
};

export default RefundPolicyPage;
