// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const CreditSimulator = () => {
//   const loanTypes = [
//     { name: "Crédito de Consumo Ordinario", rates: [11, 13] },
//     { name: "Crédito de Consumo Dinámico", rates: [11, 13] },
//     { name: "Crédito de Consumo Dinámico con Garante", rates: [11, 13] },
//     { name: "Crédito de Consumo Especial", rates: [11, 13] },
//     { name: "Préstamo Especial con garantía Hipotecaria", rates: [11, 13] },
//     { name: "Préstamo Especial Prendario", rates: [11, 13] },
//     { name: "Préstamos Especiales", rates: [11, 13] },
//   ];

//   const [selectedLoanType, setSelectedLoanType] = useState(loanTypes[0]);
//   const [amount, setAmount] = useState(10000);
//   const [term, setTerm] = useState(12);
//   const [selectedRate, setSelectedRate] = useState(loanTypes[0].rates[0]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [calculatedResult, setCalculatedResult] = useState(null);

//   const calculateLoan = () => {
//     const monthlyInterestRate = selectedRate / 100 / 12;
//     const numberOfPayments = term;
//     const monthlyPayment =
//       (amount * monthlyInterestRate) /
//       (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
//     const totalPayment = monthlyPayment * numberOfPayments;
//     const totalInterest = totalPayment - amount;

//     setCalculatedResult({
//       monthlyPayment: monthlyPayment.toFixed(2),
//       totalPayment: totalPayment.toFixed(2),
//       totalInterest: totalInterest.toFixed(2),
//       selectedRate: selectedRate.toFixed(2),
//     });

//     setIsModalOpen(true);
//   };

//   const copyToClipboard = () => {
//     const resultText = `
//       Tipo de Préstamo: ${selectedLoanType.name}
//       Monto: $${amount}
//       Plazo: ${term} meses
//       Tasa de Interés: ${selectedRate}%
//       Cuota Mensual: $${calculatedResult.monthlyPayment}
//       Total a Pagar: $${calculatedResult.totalPayment}
//       Costo Total del Préstamo: $${calculatedResult.totalInterest}
//     `;
//     navigator.clipboard.writeText(resultText);
//     alert("Resultados copiados al portapapeles");
//   };

//   return (
//     <section className="relative py-12 bg-light text-dark text-center overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-4xl font-bold text-primary mb-8">
//           Simulador de Crédito COAC SUP LTDA.
//         </h1>
//         <p className="mb-8 text-lg font-primary">
//           Utiliza nuestro simulador de crédito para calcular tus cuotas mensuales y el monto total a pagar. Selecciona el tipo de préstamo, ingresa el monto y el plazo, y elige la tasa de interés que mejor se ajuste a tus necesidades.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           <div>
//             <label className="block mb-2 text-left text-lg font-primary">
//               Tipo de Préstamo:
//             </label>
//             <select
//               className="select select-bordered w-full bg-primary text-light font-primary"
//               value={selectedLoanType.name}
//               onChange={(e) => {
//                 const selectedType = loanTypes.find(
//                   (loan) => loan.name === e.target.value
//                 );
//                 setSelectedLoanType(selectedType);
//                 setSelectedRate(selectedType.rates[0]);
//               }}
//             >
//               {loanTypes.map((loan) => (
//                 <option key={loan.name} value={loan.name}>
//                   {loan.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block mb-2 text-left text-lg font-primary">Monto:</label>
//             <input
//               type="number"
//               className="input input-bordered w-full bg-primary text-light font-primary"
//               value={amount}
//               onChange={(e) => setAmount(Number(e.target.value))}
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-left text-lg font-primary">Plazo (meses):</label>
//             <input
//               type="number"
//               className="input input-bordered w-full bg-primary text-light font-primary"
//               value={term}
//               onChange={(e) => setTerm(Number(e.target.value))}
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-left text-lg font-primary">
//               Tasa de Interés:
//             </label>
//             <select
//               className="select select-bordered w-full bg-primary text-light font-primary"
//               value={selectedRate}
//               onChange={(e) => setSelectedRate(Number(e.target.value))}
//             >
//               {selectedLoanType.rates.map((rate, index) => (
//                 <option key={index} value={rate}>
//                   {rate}%
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <button
//           className="btn main-button w-full sm:w-auto"
//           onClick={calculateLoan}
//         >
//           Calcular
//         </button>

//         {/* Modal usando DaisyUI */}
//         <input
//           type="checkbox"
//           id="credit-modal"
//           className="modal-toggle"
//           checked={isModalOpen}
//           onChange={() => setIsModalOpen(false)}
//         />
//         <div className="modal">
//           <div className="modal-box relative bg-primary">
//             <label
//               htmlFor="credit-modal"
//               className="btn btn-sm btn-circle absolute right-2 top-2 "
//               onClick={() => setIsModalOpen(false)}
//             >
//               ✕
//             </label>
//             <h2 className="text-2xl font-bold text-light font-primary mb-4">
//               Resultados del Simulador de Crédito
//             </h2>
//             {calculatedResult && (
//               <div className="text-left text-lg mb-4 bg-light">
//                 <p className="font-primary"><strong>Tipo de Préstamo:</strong> {selectedLoanType.name}</p>
//                 <p className="font-primary"><strong>Monto:</strong> ${amount}</p>
//                 <p className="font-primary"><strong>Plazo:</strong> {term} meses</p>
//                 <p className="font-primary"><strong>Tasa de Interés:</strong> {selectedRate}%</p>
//                 <p className="font-primary"><strong>Cuota Mensual:</strong> ${calculatedResult.monthlyPayment}</p>
//                 <p className="font-primary"><strong>Total a Pagar:</strong> ${calculatedResult.totalPayment}</p>
//                 <p className="font-primary"><strong>Costo Total del Préstamo:</strong> ${calculatedResult.totalInterest}</p>
//               </div>
//             )}
//             <div className="modal-action">
//               <button
//                 className="btn main-button btn-outline"
//                 onClick={copyToClipboard}
//               >
//                 Copiar
//               </button>
//               <button
//                 className="btn main-button"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Cerrar
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CreditSimulator;


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const CreditSimulator = () => {
  const loanTypes = [
    { name: "Crédito de Consumo Ordinario", rates: [11, 13] },
    { name: "Crédito de Consumo Dinámico", rates: [11, 13] },
    { name: "Crédito de Consumo Dinámico con Garante", rates: [11, 13] },
    { name: "Crédito de Consumo Especial", rates: [11, 13] },
    { name: "Préstamo Especial con garantía Hipotecaria", rates: [11, 13] },
    { name: "Préstamo Especial Prendario", rates: [11, 13] },
    { name: "Préstamos Especiales con 2 garantes", rates: [11, 13] },
  ];

  const [selectedLoanType, setSelectedLoanType] = useState(loanTypes[0]);
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState(12);
  const [selectedRate, setSelectedRate] = useState(loanTypes[0].rates[0]);
  const [insuranceRate, setInsuranceRate] = useState(0.000650); // Seguro de desgravamen por defecto
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [calculatedResult, setCalculatedResult] = useState(null);

  const calculateLoan = () => {
    const monthlyInterestRate = selectedRate / 100 / 12;
    const numberOfPayments = term;
    const monthlyPayment =
      (amount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - amount;
    const monthlyInsurance = (amount * insuranceRate) / 100; // Cálculo del seguro de desgravamen mensual

    setCalculatedResult({
      monthlyPayment: (monthlyPayment + monthlyInsurance).toFixed(2), // Incluye el seguro en la cuota mensual
      totalPayment: (totalPayment + monthlyInsurance * term).toFixed(2), // Incluye el seguro en el total a pagar
      totalInterest: totalInterest.toFixed(2),
      selectedRate: selectedRate.toFixed(2),
      monthlyInsurance: monthlyInsurance.toFixed(2), // Añade seguro al resultado
    });

    setIsModalOpen(true);
  };

  const copyToClipboard = () => {
    const resultText = `
      Tipo de Préstamo: ${selectedLoanType.name}
      Monto: $${amount}
      Plazo: ${term} meses
      Tasa de Interés: ${selectedRate}%
      Seguro de Desgravamen: ${insuranceRate}%
      Cuota Mensual (con Seguro): $${calculatedResult.monthlyPayment}
      Total a Pagar (con Seguro): $${calculatedResult.totalPayment}
      Costo Total del Préstamo (sin Seguro): $${calculatedResult.totalInterest}
    `;
    navigator.clipboard.writeText(resultText);
    alert("Resultados copiados al portapapeles");
  };

  return (
    <section className="relative py-12 bg-light text-dark text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Simulador de Crédito COAC SUP LTDA.
        </h1>
        <p className="mb-8 text-lg font-primary">
          Utiliza nuestro simulador de crédito para calcular tus cuotas mensuales y el monto total a pagar. Selecciona el tipo de préstamo, ingresa el monto y el plazo, y elige la tasa de interés que mejor se ajuste a tus necesidades.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Tipo de Préstamo */}
          <div>
            <label className="block mb-2 text-left text-lg font-primary">
              Tipo de Préstamo:
            </label>
            <select
              className="select select-bordered w-full bg-primary text-light font-primary"
              value={selectedLoanType.name}
              onChange={(e) => {
                const selectedType = loanTypes.find(
                  (loan) => loan.name === e.target.value
                );
                setSelectedLoanType(selectedType);
                setSelectedRate(selectedType.rates[0]);
              }}
            >
              {loanTypes.map((loan) => (
                <option key={loan.name} value={loan.name}>
                  {loan.name}
                </option>
              ))}
            </select>
          </div>

          {/* Monto */}
          <div>
            <label className="block mb-2 text-left text-lg font-primary">Monto:</label>
            <input
              type="number"
              className="input input-bordered w-full bg-primary text-light font-primary"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>

          {/* Plazo */}
          <div>
            <label className="block mb-2 text-left text-lg font-primary">Plazo (meses):</label>
            <input
              type="number"
              className="input input-bordered w-full bg-primary text-light font-primary"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
            />
          </div>

          {/* Tasa de Interés */}
          <div>
            <label className="block mb-2 text-left text-lg font-primary">
              Tasa de Interés:
            </label>
            <select
              className="select select-bordered w-full bg-primary text-light font-primary"
              value={selectedRate}
              onChange={(e) => setSelectedRate(Number(e.target.value))}
            >
              {selectedLoanType.rates.map((rate, index) => (
                <option key={index} value={rate}>
                  {rate}%
                </option>
              ))}
            </select>
          </div>

          {/* Seguro de Desgravamen */}
          <div>
            <label className="block mb-2 text-left text-lg font-primary">
              Seguro de Desgravamen (%):
            </label>
            <input
              type="number"
              className="input input-bordered w-full bg-primary text-light font-primary"
              value={insuranceRate}
              onChange={(e) => setInsuranceRate(Number(e.target.value))}
              step="0.01"
            />
          </div>
        </div>

        <button
          className="btn main-button w-full sm:w-auto"
          onClick={calculateLoan}
        >
          Calcular
        </button>

        {/* Modal usando DaisyUI */}
        <input
          type="checkbox"
          id="credit-modal"
          className="modal-toggle"
          checked={isModalOpen}
          onChange={() => setIsModalOpen(false)}
        />
        <div className="modal">
          <div className="modal-box relative bg-primary">
            <label
              htmlFor="credit-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </label>
            <h2 className="text-2xl font-bold text-light font-primary mb-4">
              Resultados del Simulador de Crédito
            </h2>
            {calculatedResult && (
              <div className="text-left text-lg mb-4 bg-light p-4 rounded-lg shadow-md">
                <p className="font-primary"><strong>Tipo de Préstamo:</strong> {selectedLoanType.name}</p>
                <p className="font-primary"><strong>Monto:</strong> ${amount}</p>
                <p className="font-primary"><strong>Plazo:</strong> {term} meses</p>
                <p className="font-primary"><strong>Tasa de Interés:</strong> {selectedRate}%</p>
                <p className="font-primary"><strong>Seguro de Desgravamen Mensual:</strong> ${calculatedResult.monthlyInsurance}</p>
                <p className="font-primary"><strong>Cuota Mensual (con Seguro):</strong> ${calculatedResult.monthlyPayment}</p>
                <p className="font-primary"><strong>Total a Pagar (con Seguro):</strong> ${calculatedResult.totalPayment}</p>
                <p className="font-primary"><strong>Costo Total del Préstamo (sin Seguro):</strong> ${calculatedResult.totalInterest}</p>
              </div>
            )}
            <div className="modal-action">
              <button
                className="btn main-button btn-outline"
                onClick={copyToClipboard}
              >
                Copiar
              </button>
              <button
                className="btn main-button"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditSimulator;
