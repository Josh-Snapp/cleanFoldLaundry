import Link from "next/link";
import CleanFoldLogo from "../Icons/CleanFoldLogo";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pb-8 pt-16 dark:bg-gray-dark sm:pb-4 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo and Description */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[200px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <CleanFoldLogo />
              </Link>
              <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Your laundry DELIVERED FRESH &amp; NEATLY FOLDED within 1 to 2
                business days! OR Same Day Service Available!
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full px-4 md:w-1/2 lg:w-2/12">
            <h4 className="mb-6 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Quick Links
            </h4>
            <ul>
              <li className="mb-4">
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Additional Information
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <h4 className="mb-6 text-sm font-semibold text-gray-800 dark:text-gray-200">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1ETkEYKKn6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/cleanfoldlaundry?igsh=MW9yeHQ4OXhjeDF3bg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    fill="currentColor"
                    d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5c2.07 0 3.75-1.68 3.75-3.75v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Clean Fold Laundry. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
