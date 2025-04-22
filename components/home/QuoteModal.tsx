"use client";

import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import {
  Fragment,
  useImperativeHandle,
  forwardRef,
  useState,
} from "react";
import ContactForm from "@/components/contact/ContactForm";

export interface QuoteModalRef {
  open: () => void;
}

const QuoteModal = forwardRef<QuoteModalRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
  }));

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={() => setIsOpen(false)}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Content wrapper */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
              >
                {/* Optional: Close Button */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-black text-xl font-bold"
                  >
                    &times;
                  </button>
                </div>

                {/* Contact Form */}
                <div className="px-6 pb-6 max-h-[80vh] overflow-y-auto">
                  <ContactForm />
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

QuoteModal.displayName = "QuoteModal";
export default QuoteModal;
