import { useState } from "react";
import { X } from "lucide-react";

function AddClientModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    frequent_order: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = { ...form, visits: 1 };
    onSubmit(newClient);
    onClose();
    setForm({ name: "", phone: "", frequent_order: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New Client</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full name"
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Phone number"
            className="w-full border rounded px-3 py-2"
          />

          <input
            type="text"
            name="frequent_order"
            value={form.frequent_order}
            onChange={handleChange}
            required
            placeholder="Frequent order"
            className="w-full border rounded px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-[#FA9564] text-white rounded px-4 py-2 "
          >
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddClientModal;
