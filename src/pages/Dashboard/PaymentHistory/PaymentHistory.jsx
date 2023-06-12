import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [asc, setAsc] = useState(true);
  console.log(payments);
  // sorting system

  const url = `http://localhost:5000/payments?email=${user?.email}&sort=${asc ? "asc" : "dsc"}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPayments(data)
        console.log(data)
      });
  }, [asc]);

  return (
    <div>
      <button className="btn btn-primary mt-5 ms-22 mb-8" onClick={() => setAsc(!asc)}>
        {asc ? "Sort By New Date" : "Sort By Old Date"}
      </button>
      <div className="overflow-x-auto text-xl">
        <table className="table  w-[800px]">
          {/* head */}
          <thead>
            <tr className="bg-blue-600">
              <th className="text-center">#</th>
              <th className="text-center">Course Name</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Price</th>
              <th className="text-center w-40">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((item, index) => (
              <tr key={item._id}>
                    <th className="text-center">{index + 1}</th>
                    <td className="text-center">{item.itemName}</td>
                    <td className="text-center">{item.customer}</td>
                    <td className="text-center">{item.email}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center"><span>{item.date.slice(0, 10)}</span><span className="ms-3">{item.date.slice(11, 16)}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
