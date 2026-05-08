"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ConsultationForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const [captcha, setCaptcha] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});

  // Generate random math captcha on mount and when modal opens
  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
      setFormData({ name: "", email: "", phone: "", message: "", captcha: "" });
      setShowThankYou(false);
      setErrors({});
    }
  }, [isOpen]);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const answer = num1 + num2;
    setCaptcha({ num1, num2, answer });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.captcha) newErrors.captcha = "Please answer the security question";
    else if (parseInt(formData.captcha) !== captcha.answer)
      newErrors.captcha = "Incorrect answer. Please try again";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setShowThankYou(true);
        // Close after 3 seconds
        setTimeout(() => {
          onClose();
          setShowThankYou(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-surface border border-white/10 rounded-2xl p-8 w-full max-w-md shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-1 text-muted hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {showThankYou ? (
              // Thank You Message
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mb-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted">
                  We've received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              // Form
              <>
                <h2 className="text-2xl font-bold mb-2">Schedule a Consultation</h2>
                <p className="text-muted mb-6">
                  Let's discuss how we can help your business grow.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${
                        errors.email ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${
                        errors.phone ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none ${
                        errors.message ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Captcha */}
                  {captcha && (
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Security Question: What is {captcha.num1} + {captcha.num2}? *
                      </label>
                      <input
                        type="number"
                        name="captcha"
                        value={formData.captcha}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${
                          errors.captcha ? "border-red-500" : "border-white/10"
                        }`}
                        placeholder="Your answer"
                      />
                      {errors.captcha && (
                        <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>
                      )}
                    </div>
                  )}

                  {submitError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full mt-6 px-6 py-2.5 rounded-full bg-primary text-white font-semibold transition-all shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
                    }`}
                  >
                    {isSubmitting ? "Sending Message..." : "Schedule Consultation"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
