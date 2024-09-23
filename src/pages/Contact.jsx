import { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields");
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_d2sop7s",
        "template_uu4nwlg",
        templateParams,
        "Ctq14g5QBfqmOQGCz"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          toast.success("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          setError("Failed to send message. Please try again later.");
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Contact Me
      </h2>
      <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <input
            type="email"
            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-gray-600 font-medium">Message</label>
          <textarea
            className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Your Message"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </form>

      {/* WhatsApp and Email links */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium text-gray-700">
          Other ways to contact me:
        </h3>
        <div className="flex justify-center space-x-6 mt-2">
          <a
            href="mailto:abdullahialabi234@gmail.com"
            className="flex items-center text-blue-600 hover:underline"
          >
            <FaEnvelope className="mr-2" /> Email
          </a>
          <a
            href="https://wa.me/+2347085478546"
            className="flex items-center text-green-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </div>
      </div>

      {formSubmitted && (
        <p className="mt-4 text-green-600 text-center">
          Your message has been sent!
        </p>
      )}
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
};

export default Contact;
