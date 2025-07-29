import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Payment() {
  const location = useLocation();

  // Get totalAmount from location.state (e.g. "Rs. 15,000" or "12000")
  const { totalAmount } = location.state || {};

  // Clean totalAmount string: remove anything except digits
  // So "Rs. 15,000" becomes "15000"
  const amountNumber = totalAmount
    ? Number(String(totalAmount).replace(/[^\d]/g, ""))
    : 0;

  // If amount is invalid, show error
  if (!amountNumber || isNaN(amountNumber)) {
    return <div>Please select a course first to proceed with payment.</div>;
  }

  // Generate unique transaction ID
  const transaction_uuid = uuidv4();

  // Prepare message for eSewa signature (adjust keys as needed)
  const message = `total_amount=${amountNumber},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q"); // Your secret key here
  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div>
      <form
        className="shadow-2xl drop-shadow-gray-700 h-48 w-96 m-auto flex flex-col justify-center items-center"
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
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

        <h1 className="text-2xl">
          Total Amount Rs. <span className="underline">{amountNumber}</span>
        </h1>

        <input
          type="submit"
          value="Payment With E-sewa"
          className="bg-orange-200 mt-4 text-red-500 font-bold p-4 rounded-2xl cursor-pointer"
        />
      </form>
    </div>
  );
}

export default Payment;
