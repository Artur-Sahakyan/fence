import React from "react";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-lg">
        <h2 className="text-xl text-black font-semibold mb-4">Thank you!</h2>
        <p className="mb-3 text-black">Your message has been sent successfully.</p>
        <p className="mb-6 text-gray-600">
          We’ve received your request and will call you back shortly.
        </p>
        <button
          onClick={onClose}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
