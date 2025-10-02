import React, { useEffect, useState } from "react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/contacts");
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

  if (loading) {
    return <p className="text-white text-center">Loading contacts...</p>;
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">📋 Contact Submissions</h1>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <table className="w-full border border-gray-600 rounded-lg overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700">ID</th>
              <th className="p-3 border border-gray-700">Name</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="odd:bg-gray-900 even:bg-gray-800">
                <td className="p-3 border border-gray-700">{contact.id}</td>
                <td className="p-3 border border-gray-700">{contact.name}</td>
                <td className="p-3 border border-gray-700">{contact.email}</td>
                <td className="p-3 border border-gray-700">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
