import React, { useEffect, useState } from "react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 10; // how many contacts per page

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("/api/contacts");
        const data = await res.json();
        setContacts(data);
      } catch (error) {
        console.error("❌ Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // 🔍 Filter contacts by search term
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.message.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination logic
  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  if (loading) {
    return <p className="text-white text-center">Loading contacts...</p>;
  }

  return (
    <div className="p-6 text-white h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">📋 Contact Submissions</h1>

      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search by name, email, or message..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset to first page when searching
        }}
        className="mb-4 p-2 bg-white/10 rounded border border-gray-700 w-full text-white"
      />

      {currentContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <>
          <table className="w-full border border-gray-600 rounded-lg overflow-hidden">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700">ID</th>
                <th className="p-3 border border-gray-700">First Name</th>
                <th className="p-3 border border-gray-700">Last Name</th>
                <th className="p-3 border border-gray-700">Email</th>
                <th className="p-3 border border-gray-700">Phone #</th>
                <th className="p-3 border border-gray-700">Message</th>
              </tr>
            </thead>
            <tbody>
              {currentContacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="odd:bg-gradient-to-b from-[rgba(56,56,56,0.5)] to-[rgba(28,28,28,0.5)] even:bg-gray-800"
                >
                  <td className="p-3 border border-gray-700">{contact.id}</td>
                  <td className="p-3 border border-gray-700">{contact.name}</td>
                  <td className="p-3 border border-gray-700">{contact.lastname}</td>
                  <td className="p-3 border border-gray-700">{contact.email}</td>
                  <td className="p-3 border border-gray-700">{contact.phone}</td>
                  <td className="p-3 border border-gray-700">{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 📄 Pagination Controls */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            {/* Prev button */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-[#666666] rounded disabled:opacity-50"
            >
              ⬅ Prev
            </button>

            {/* Numbered pages */}
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
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

            {/* Next button */}
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-[#666666] rounded disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
}
