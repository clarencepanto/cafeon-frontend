import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";

function DeleteClientModal({ isOpen, onClose, onConfirm, customer }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all border border-gray-300">
          <Dialog.Title className="text-lg font-bold mb-4">
            Confirm Deletion
          </Dialog.Title>
          <p className="mb-6 text-sm text-gray-700">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-red-500">{customer?.name}</span>
            ? This action cannot be undone.
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm(customer.id);
                toast.success("Customer deleted!");
                onClose();
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default DeleteClientModal;
