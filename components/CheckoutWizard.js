import React from "react";

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap mt-10">
      {["User Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step, ind) => (
          <div
            className={`flex-1 border-b-2 text-center ${
              ind <= activeStep
                ? "border-indigo-500 text-indigo-500"
                : "border-gray-400 text-gray-400"
            }`}
            key={step}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
