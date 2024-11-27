import React from 'react';
import CarLoanForm from './CarLoanForm';

const CarLoanPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <CarLoanForm />
      </div>
    </div>
  );
};

export default CarLoanPage;
