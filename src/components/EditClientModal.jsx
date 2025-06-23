import { useForm } from "react-hook-form";
import { Dialog } from "@headlessui/react";
import toast from "react-hot-toast";
import { useEffect } from "react";

function EditClientModal({ isOpen, onClose, onSubmit, customer }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (customer) {
      reset({
        name: customer.name,
        phone: customer.phone,
        frequent_order: customer.frequent_order,
      });
    }
  }, [customer, reset]);

  const handleUpdate = (data) => {
    onSubmit({ ...data, id: customer.id });
    toast.success("Customer updated!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all border border-gray-300">
          <Dialog.Title className="text-lg font-bold mb-4">
            Edit Client
          </Dialog.Title>
          <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">
            <input
              {...register("name")}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FA9564]"
            />
            <input
              {...register("phone")}
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FA9564]"
            />
            <input
              {...register("frequent_order")}
              placeholder="Frequent Order"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FA9564]"
            />
            <button
              type="submit"
              className="w-full bg-[#FA9564] text-white rounded-md p-2"
            >
              Update
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default EditClientModal;
