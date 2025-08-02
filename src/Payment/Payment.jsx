import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Payment() {
  const location = useLocation();
  const { totalAmount } = location.state || {};
  const amountNumber = totalAmount
    ? Number(String(totalAmount).replace(/[^\d]/g, ""))
    : 0;

  if (!amountNumber || isNaN(amountNumber)) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50">
        <div className="text-xl font-semibold text-red-500">
          Please select a course first to proceed with payment.
        </div>
      </div>
    );
  }

  const transaction_uuid = uuidv4();
  const message = `total_amount=${amountNumber},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 p-4">
      <form
        className="bg-white shadow-2xl rounded-xl w-full max-w-md p-8 space-y-6"
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Secure E-Sewa Payment
        </h2>

        <p className="text-center text-gray-600 mb-6">
          You are paying:{" "}
          <span className="text-orange-600 font-semibold">
            Rs. {amountNumber}
          </span>
        </p>

        {/* Hidden payment inputs */}
        <input type="hidden" name="amount" value={amountNumber} required />
        <input type="hidden" name="tax_amount" value="0" required />
        <input type="hidden" name="total_amount" value={amountNumber} required />
        <input type="hidden" name="transaction_uuid" value={transaction_uuid} required />
        <input type="hidden" name="product_code" value="EPAYTEST" required />
        <input type="hidden" name="product_service_charge" value="0" required />
        <input type="hidden" name="product_delivery_charge" value="0" required />
        <input
          type="hidden"
          name="success_url"
          value="http://localhost:5173/success"
          required
        />
        <input
          type="hidden"
          name="failure_url"
          value="http://localhost:5173/failure"
          required
        />
        <input
          type="hidden"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />
        <input type="hidden" name="signature" value={signature} required />

        <input
          type="submit"
          value="Pay with E-Sewa"
          className="w-full bg-blue-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-300"
        />
      </form>
    </div>
  );
}

export default Payment;
