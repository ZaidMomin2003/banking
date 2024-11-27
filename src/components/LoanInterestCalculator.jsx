import React, { useState } from 'react';
import styles from '../style';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(1);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfMonths = loanTerm * 12;
    const emiValue =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    setEmi(emiValue.toFixed(2));
  };

  return (
    <div className="bg-primary text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Loan Calculator</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Loan Amount</label>
        <input
          type="range"
          min="1000"
          max="1000000"
          step="1000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="w-full"
        />
        <p>₹{loanAmount}</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Interest Rate (in %)</label>
        <input
          type="range"
          min="1"
          max="20"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full"
        />
        <p>{interestRate}%</p>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Loan Term (in years)</label>
        <input
          type="range"
          min="1"
          max="30"
          step="1"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="w-full"
        />
        <p>{loanTerm} Year(s)</p>
      </div>
      <button
        onClick={calculateEMI}
        className="px-6 py-2 bg-blue-gradient rounded-lg font-semibold"
      >
        Calculate EMI
      </button>
      {emi > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Estimated Monthly EMI</h2>
          <p className="text-2xl font-bold">₹{emi}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
