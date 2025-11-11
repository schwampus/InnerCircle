export default function Terms() {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-kanit">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Terms of Service
                    </h1>
                    <p className="text-gray-600">Last updated: November 11, 2025</p>
                </div>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Introduction
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to InnerCircle. By using our service, you agree to these terms. 
                        Please read them carefully.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Your Account
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>You must be at least 16 years old to use InnerCircle</li>
                        <li>Keep your password in a secure place and remember it</li>
                        <li>One person or legal entity may maintain no more than one account</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Acceptable Use
                    </h2>
                    <p className="text-gray-700 mb-3">You agree not to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>Use InnerCircle for any illegal purpose</li>
                        <li>Harass, abuse, or harm other users</li>
                        <li>Post spam or unsolicited content</li>
                        <li>Impersonate others or misrepresent your identity</li>
                        <li>Upload viruses or malicious code</li>
                        <li>Scrape or collect data from the service</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Membership and Content
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>You retain ownership of content you upload</li>
                        <li>By uploading content, you grant us license to display it on InnerCircle</li>
                        <li>You are responsible for the content you post</li>
                        <li>We may remove content that violates these terms</li>
                        <li>Circle memberships are managed by circle administrators</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Termination
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>You may delete your account at any time</li>
                        <li>We may suspend or terminate accounts that violate these terms</li>
                        <li>We may terminate accounts for any reason with notice</li>
                        <li>Upon termination, your data will be permanently deleted</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Disclaimers
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                        <li>InnerCircle is provided "as is" without warranties</li>
                        <li>We do not guarantee uninterrupted or error-free service</li>
                        <li>We are not responsible for user-generated content</li>
                        <li>We are not liable for any loss of data</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Limitation of Liability
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        To the maximum extent permitted by law, InnerCircle shall not be liable for any 
                        indirect, incidental, special, or consequential damages arising from your use of 
                        the service.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Changes to Terms
                    </h2>
                    <p className="text-gray-700 mb-3">
                        We may update these terms from time to time. When we do:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>We will update the date at the top of this page</li>
                        <li>We will notify you via the site</li>
                        <li>Continued use of InnerCircle means you accept the new terms</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Governing Law
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        These terms are governed by Swedish law. Any disputes will be resolved in 
                        Swedish courts.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Contact
                    </h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Questions about these terms:</strong> legal@innercircle.se
                    </p>
                    <p className="text-gray-700">
                        <strong>General support:</strong> support@innercircle.se
                    </p>
                </section>

                <div className="mt-12 pt-8 border-t border-gray-300">
                    <p className="text-gray-600 text-center">
                        By using InnerCircle, you agree to these terms of service.
                    </p>
                </div>
            </div>
        </div>
    );
}