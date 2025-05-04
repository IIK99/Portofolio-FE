"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ChartComponent } from "@/components/chart";

type Transaction = {
  date: string;
  eventName: string;
  ticketQty: number;
  totalPrice: number;
};

const transactions: Transaction[] = [
  {
    date: "2024",
    eventName: "Sumatra",
    ticketQty: 4845,
    totalPrice: 3658330000,
  },
  {
    date: "2024",
    eventName: "Kalimantan",
    ticketQty: 6279,
    totalPrice: 7846510000,
  },
  {
    date: "2024",
    eventName: "NTT",
    ticketQty: 2431,
    totalPrice: 1867830000,
  },
];

export default function TransactionHistory() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-l from-[#6f0000] to-[#200122] p-10">
        <div className="container mx-auto">
          <div className="bg-white p-5 rounded shadow-lg mb-5">
            <h2 className="text-2xl font-bold mb-5 underline">Total Visits</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="w-full h-16 border-gray-300 border-b py-8">
                    <th className="text-left pl-14">Time</th>
                    <th className="text-left">City</th>
                    <th className="text-center">Ticket Qty</th>
                    <th className="text-right pr-14">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(
                    ({ date, eventName, ticketQty, totalPrice }, index) => (
                      <tr key={index} className="h-14 border-gray-300 border-b">
                        <td className="text-left pl-14">{`${date}`}</td>
                        <td className="text-left">{eventName}</td>
                        <td className="text-center">{ticketQty}</td>
                        <td className="text-right pr-14">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(totalPrice)}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <ChartComponent />
        </div>
      </div>
      <Footer />
    </>
  );
}
