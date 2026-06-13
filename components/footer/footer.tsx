import Link from "next/link";
import { contactDetails } from "@/config/site";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-lg font-bold text-foreground hover:text-blue-600 transition-colors"
            >
              Clow
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Build Ideas, Not Code. We help startups and SaaS teams launch
              faster with low-code, no-code, and custom solutions.
            </p>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-blue-600 transition-colors"
                >
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/why-us"
                  className="hover:text-blue-600 transition-colors"
                >
                  Why Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {year} Clow. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            {contactDetails.address}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
