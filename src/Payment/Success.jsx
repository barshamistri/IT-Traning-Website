import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Success() {
  const params = useParams();
  const [order, setOrder] = useState({});
  const orderId = params.id;
  const getOrder = async () => {
    let response = await fetch(
      `http://localhost:9000/api/order/order/${orderId}`
    );
    response = await response.json();
    console.log(response.data);
    setOrder(response.data);
  };

  useEffect(() => {
    getOrder();
  }, [orderId]);
  return (
    <div>
      <div className="w-[400px] shadow-2xl shadow-gray-500 p-10 m-auto mt-10">
        <h1> Payment Success </h1>
        <h1> Payment Status:{order?.paymentStatus}</h1>
        <h1> Transaction id: {order?._id}</h1>
      </div>
    </div>
  );
}

export default Success;
