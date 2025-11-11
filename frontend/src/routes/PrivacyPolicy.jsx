export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-kanit">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: November 11, 2025</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We built InnerCircle to help you connect with your extreme sports
            idols. This privacy policy explains how we handle your information
            in clear and transparent terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What information do we collect?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                When you sign up
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Your email address</li>
                <li>Username you choose</li>
                <li>Password (hashed - we never see it in plain text)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                When you use InnerCircle
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Your memberships</li>
                <li>Pictures you upload</li>
                <li>Your profile information (if you add it)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why do we collect this information?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>To create and manage your account</li>
            <li>To keep track of your InnerCircle subscriptions</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Who can see my information?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                We never
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Sell your data to third parties</li>
                <li>Share your email with other users</li>
                <li>Send unsolicited marketing emails</li>
                <li>Track you on other websites</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                We only share with
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>
                  <strong>Hosting providers:</strong> To keep the site running
                </li>
                <li>
                  <strong>Legal authorities:</strong> If required by law
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How long do we keep your data?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <strong>Active account:</strong> Until you delete it
            </li>
            <li>
              <strong>Deleted account:</strong> Permanently
              removed from the moment you delete it
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Your rights
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>
              <strong>Edit your information:</strong> Update your profile
              anytime in Profile page
            </li>
            <li>
              <strong>Delete your account:</strong> Remove everything -
              permanently deleted directly
            </li>
            <li>
              <strong>Contact us:</strong> Email privacy@innercircle.se
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-3">We don't use any cookies</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Changes to this policy
          </h2>
          <p className="text-gray-700 mb-3">
            If we update this privacy policy, we will:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Update the date at the top of this page</li>
            <li>Display a notification on the site</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact us
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Privacy inquiries:</strong> privacy@innercircle.se
          </p>
          <p className="text-gray-700 mb-4">
            <strong>General support:</strong> support@innercircle.se
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>We collect only what's necessary to run InnerCircle</li>
            <li>We never sell your data or send spam</li>
            <li>You have full control over your data</li>
            <li>You can delete your account at any time</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-gray-600 text-center">
            By using InnerCircle, you agree to this privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
