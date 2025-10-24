import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("contacts");

  const [contacts, setContacts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // 🧠 Fetch both contacts and orders once
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contactsRes, ordersRes] = await Promise.all([
          fetch("/api/contacts"),
          fetch("/api/orders"),
        ]);
        const [contactsData, ordersData] = await Promise.all([
          contactsRes.json(),
          ordersRes.json(),
        ]);
        setContacts(contactsData);
        setOrders(ordersData);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🧮 Current dataset based on active tab
  const data = activeTab === "contacts" ? contacts : orders;

  // 🔍 Filtered search
  const filteredData = data.filter((item) => {
    if (activeTab === "contacts") {
      return (
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.email?.toLowerCase().includes(search.toLowerCase()) ||
        item.message?.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return (
        item.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
        item.status?.toLowerCase().includes(search.toLowerCase()) ||
        item.id?.toString().includes(search)
      );
    }
  });

  // 📄 Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) {
    return <p className="text-white text-center p-10">Loading...</p>;
  }

  return (
    <div className="p-6 text-white min-h-screen bg-[#111]">
      <h1 className="text-2xl font-bold mb-6">📋 Admin Dashboard</h1>

      {/* 🧭 Tabs */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => {
            setActiveTab("contacts");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded ${
            activeTab === "contacts" ? "bg-[#1EC27E]" : "bg-[#666666]"
          }`}
        >
          Contact Submissions
        </button>
        <button
          onClick={() => {
            setActiveTab("orders");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 rounded ${
            activeTab === "orders" ? "bg-[#1EC27E]" : "bg-[#666666]"
          }`}
        >
          Order Submissions
        </button>
      </div>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder={`Search ${activeTab}...`}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="mb-4 p-2 bg-white/10 rounded border border-gray-700 w-full text-white"
      />

      {/* 🧱 Table */}
      {currentData.length === 0 ? (
        <p>No {activeTab} found.</p>
      ) : activeTab === "contacts" ? (
        <table className="w-full border border-gray-600 rounded-lg overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700">ID</th>
              <th className="p-3 border border-gray-700">First  Name</th>
              <th className="p-3 border border-gray-700">Last Name</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Phone #</th>
              <th className="p-3 border border-gray-700">Message</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((c) => (
              <tr key={c.id} className="odd:bg-gray-700 even:bg-gray-800">
                <td className="p-3 border border-gray-700">{c.id}</td>
                <td className="p-3 border border-gray-700">{c.name}</td>
                 <td className="p-3 border border-gray-700">{c.lastname}</td>
                <td className="p-3 border border-gray-700">{c.email}</td>
                 <td className="p-3 border border-gray-700">{c.phone}</td>
                <td className="p-3 border border-gray-700">{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="w-full border border-gray-600 rounded-lg overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700">ID</th>
              <th className="p-3 border border-gray-700">First Name</th>
              <th className="p-3 border border-gray-700">Last Name</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Phone #</th>
              <th className="p-3 border border-gray-700">Timeframe</th>
              <th className="p-3 border border-gray-700">Car you are converting</th>
              <th className="p-3 border border-gray-700">Are you a</th>
              <th className="p-3 border border-gray-700">Location – City, State</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((o) => (
              <tr key={o.id} className="odd:bg-gray-700 even:bg-gray-800">
                <td className="p-3 border border-gray-700">{o.id}</td>
                <td className="p-3 border border-gray-700">{o.name}</td>
                 <td className="p-3 border border-gray-700">{o.last_name}</td>
                <td className="p-3 border border-gray-700">{o.email}</td>
                 <td className="p-3 border border-gray-700">{o.phone}</td>
                 <td className="p-3 border border-gray-700">{o.timeframe}</td>
                 <td className="p-3 border border-gray-700">{o.carconverting}</td>
                 <td className="p-3 border border-gray-700">{o.aya}</td>
                 <td className="p-3 border border-gray-700">{o.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* 📄 Pagination */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-[#666666] rounded disabled:opacity-50"
        >
          ⬅ Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-[#757575]/28 text-white"
                  : "bg-[#666666] hover:bg-[#666666]/28"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-[#666666] rounded disabled:opacity-50"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
