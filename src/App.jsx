import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './style';

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from './components';

import CarLoanPage from './components/CarLoanPage';
import LoanInterestCalculator from './components/LoanInterestCalculator'; // Import the loan interest calculator component

// Disable right-click and inspect
import './disableRightClick'; // Import the script that disables right-click

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Routes Section */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>

              <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Stats />
                  <Business />
                  <Billing />
                  <CardDeal />
                  <Testimonials />
                  <Clients />
                  <CTA />
                </div>
              </div>
            </>
          }
        />

        {/* Car Loan Page */}
        <Route
          path="/car-loan"
          element={
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <CarLoanPage />
              </div>
            </div>
          }
        />

        {/* Loan Interest Calculator Page */}
        <Route
          path="/loan-calculator"
          element={
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <LoanInterestCalculator />
              </div>
            </div>
          }
        />
      </Routes>

      {/* Footer Section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
