import React from "react";

const Contact = () => {
  return (
    <section className="section bg-primary pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-1 mb-8 text-center">Contact</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-none bg-secondary text-text-primary border border-gray-800 focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-none bg-secondary text-text-primary border border-gray-800 focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-3 rounded-none bg-secondary text-text-primary border border-gray-800 focus:outline-none focus:border-accent transition-colors duration-300"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
