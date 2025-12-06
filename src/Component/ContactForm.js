import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [nextId, setNextId] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", formData);

      setSubmittedData({
        id: nextId,
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      setNextId(nextId + 1);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(" Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      {/* CONTACT FORM CARD */}
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-t-2xl">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        </div>

        {/* BODY */}
        <div className="p-8 bg-orange-300">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="font-semibold text-gray-700">Name:</label>
              <input type="text" name="name" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600" 
              value={formData.name} onChange={handleChange} required/>
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold text-gray-700">Email:</label>
              <input type="email" name="email" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600"
                value={formData.email} onChange={handleChange} required/>
            </div>

            {/* Message */}
            <div>
              <label className="font-semibold text-gray-700">Message:</label>
              <textarea name="message" className="w-full mt-2 p-3 border rounded-lg min-h-[100px] focus:ring-2 focus:ring-indigo-400 focus:border-indigo-600"
                value={formData.message} onChange={handleChange} required>
                </textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg w-full
                font-semibold hover:bg-indigo-700 transition shadow-md">Submit</button>
          </form>

          {/* SUBMITTED DATA */}
          {submittedData && (
            <div className="mt-10 p-5 bg-gray-50 rounded-xl shadow-inner border">
              <h3 className="text-xl font-bold mb-4 text-gray-700">
                ✅ Submitted Data
              </h3>

              <table className="w-full text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">ID:</td>
                    <td className="p-2">{submittedData.id}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-2 font-semibold">Name:</td>
                    <td className="p-2">{submittedData.name}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-2 font-semibold">Email:</td>
                    <td className="p-2">{submittedData.email}</td>
                  </tr>

                  <tr>
                    <td className="p-2 font-semibold">Message:</td>
                    <td className="p-2">{submittedData.message}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
