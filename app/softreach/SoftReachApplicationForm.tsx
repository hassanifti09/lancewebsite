'use client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '../components/Button';

const SoftReachApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessSize: '',
    yearsInOperation: '',
    annualRevenue: '',
    industry: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, send formData to your backend
    console.log('Form Data Submitted:', formData);
    toast.success('Application Submitted!');
    setStep(1); // Reset form after submission
    setFormData({
      businessSize: '',
      yearsInOperation: '',
      annualRevenue: '',
      industry: '',
      email: '',
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-medium text-white/95">SoftReach by Lance - Eligibility Form</h3>
            <p className="text-base md:text-lg text-stone-300">This will take you 2-5 minutes to fill out.</p>
            <p className="text-sm text-stone-400">
              Kindly contact us at <a href="mailto:softreach@lancesystems.com" className="text-blue-400 hover:underline">softreach@lancesystems.com</a> if you experience any problems while filling out or submitting this form.
            </p>
            <div className="mt-4">
              <Button text="Start Application" onClick={nextStep} variant="white" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-medium text-white/95">Business Details</h3>
            <div>
              <label htmlFor="businessSize" className="block text-lg font-medium text-white/95 mb-2">What is the size of your business?</label>
              <select
                id="businessSize"
                name="businessSize"
                value={formData.businessSize}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors bg-white text-black"
                required
              >
                <option value="">Select...</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div>
              <label htmlFor="yearsInOperation" className="block text-lg font-medium text-white/95 mb-2">How many years has your business been in operation?</label>
              <select
                id="yearsInOperation"
                name="yearsInOperation"
                value={formData.yearsInOperation}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors bg-white text-black"
                required
              >
                <option value="">Select...</option>
                <option value="6months-1year">6 months to 1 year</option>
                <option value="1year-5years">1 year to 5 years</option>
                <option value="5years-10years">5 years to 10 years</option>
                <option value="10years+">10 years +</option>
              </select>
            </div>
            <div className="flex justify-between mt-4">
              <Button text="Previous" onClick={prevStep} variant="frost" />
              <Button text="Next" onClick={nextStep} variant="white" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-medium text-white/95">Financial & Industry Details</h3>
            <div>
              <label htmlFor="annualRevenue" className="block text-lg font-medium text-white/95 mb-2">What&apos;s your business&apos;s estimated annual revenue (USD)?</label>
              <select
                id="annualRevenue"
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors bg-white text-black"
                required
              >
                <option value="">Select...</option>
                <option value="<100k">&lt;$100,000</option>
                <option value="100k-500k">$100,000 - $500,000</option>
                <option value="1M-10M">$1 million to $10 million</option>
                <option value="10M-100M">$10 million - $100 million</option>
                <option value="100M+">$100 million +</option>
                <option value="preferNotToSay">Prefer not to say</option>
              </select>
            </div>
            <div>
              <label htmlFor="industry" className="block text-lg font-medium text-white/95 mb-2">Which industry does your business primarily operate in?</label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="e.g., Healthcare, Manufacturing"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors bg-white text-black"
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button text="Previous" onClick={prevStep} variant="frost" />
              <Button text="Next" onClick={nextStep} variant="white" />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-medium text-white/95">Contact Information</h3>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white/95 mb-2">Please provide your email address for contact purposes.</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors bg-white text-black"
                required
              />
            </div>
            <div className="flex justify-between mt-4">
              <Button text="Previous" onClick={prevStep} variant="frost" />
              <Button text="Submit Application" type="submit" variant="white" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-stone-950 p-8 rounded-2xl shadow-lg w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
};

export default SoftReachApplicationForm;
