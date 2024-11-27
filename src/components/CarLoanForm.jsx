import React, { useState } from "react";
import styles from "../style";

const FormPage = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    loanAmount: "",
    loanTerm: "",
    employmentStatus: "",
    income: "",
    address: "",
    phone: "",
    maritalStatus: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    downPayment: "",
    creditScore: "",
    occupation: "",
    employerName: "",
    jobTitle: "",
    workExperience: "",
    monthlyRent: "",
    monthlyExpenses: "",
    existingLoans: "",
    coApplicantName: "",
    coApplicantIncome: "",
    collateral: "",
    bankName: "",
    bankAccountNumber: "",
    loanPurpose: "",
    preferredContactMethod: "",
    currentResidenceDuration: "",
    insuranceProvider: "",
    drivingLicenseNumber: "",
    vehicleRegistrationNumber: "",
    estimatedVehicleValue: "",
    debtToIncomeRatio: "",
    preferredRepaymentDay: "",
    guarantorName: "",
    guarantorPhone: "",
    guarantorRelation: "",
  });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Adjust the number of pages based on the fields

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., API call)
    console.log("Form Data Submitted:", formData);
  };

  // Function to navigate to the next or previous page
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Pagination: Fields for each page
  const renderFields = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <div>
              <label className="block text-white font-poppins mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-white font-poppins mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-white font-poppins mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-white font-poppins mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <label className="block text-white font-poppins mb-2" htmlFor="loanAmount">
                Loan Amount
              </label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="Enter loan amount"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-white font-poppins mb-2" htmlFor="loanTerm">
                Loan Term (in Years)
              </label>
              <input
                type="number"
                id="loanTerm"
                name="loanTerm"
                value={formData.loanTerm}
                onChange={handleChange}
                placeholder="Enter loan term"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-white font-poppins mb-2" htmlFor="employmentStatus">
                Employment Status
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Employment Status</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Student">Student</option>
                <option value="Retired">Retired</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-poppins mb-2" htmlFor="income">
                Monthly Income
              </label>
              <input
                type="number"
                id="income"
                name="income"
                value={formData.income}
                onChange={handleChange}
                placeholder="Enter your monthly income"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            {/* Add fields for Page 3 */}
            {/* Vehicle, Marital Status, Address, Phone, etc. */}
          </>
        );
      case 4:
        return (
          <>
            {/* Add fields for Page 4 */}
            {/* Guarantor info, Bank details, Collateral, etc. */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="form" className={`flex justify-center items-center ${styles.paddingY} relative`}>
      {/* Centered Form Section */}
      <div className="w-full max-w-[800px] p-8 rounded-[20px] shadow-lg bg-discount-gradient relative z-[5]">
        <h2 className="text-white font-poppins font-semibold text-[36px] leading-[50px] mb-8 text-center">
          Car Loan Application
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Render Fields Based on Current Page */}
          {renderFields()}

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-6">
            {currentPage > 1 && (
              <button
                type="button"
                onClick={() => handlePageChange("prev")}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none hover:bg-gray-600"
              >
                Previous
              </button>
            )}
            {currentPage < totalPages && (
              <button
                type="button"
                onClick={() => handlePageChange("next")}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600"
              >
                Next
              </button>
            )}
            {currentPage === totalPages && (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-lg focus:outline-none hover:bg-green-600"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormPage;
