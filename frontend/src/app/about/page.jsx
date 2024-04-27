import React from "react";

const AboutPage = () => {
  return (
    <div>
      <section className="py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About</h1>
            <p className="text-lg mb-6">
              We are dedicated to simplifying your online experience. Our goal
              is to provide you with powerful tools that make managing and
              sharing your online content easier than ever before.
            </p>
            <p className="text-lg mb-6">
              Whether it's shortening URLs, creating branded links, or any other
              online management task, we've got you covered. Our team is
              constantly working to improve our services and deliver the best
              possible experience to our users.
            </p>
            <p className="text-lg mb-6">
              Thank you for choosing our platform. We look forward to serving
              you and helping you achieve your online goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
