import React from 'react';

const PaymentSuccessModal = ({ isOpen, onClose, total = 2449.96 }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                <div className="p-6 text-center">
                    <div className="mb-4">
                        <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Payment Successfully</h2>
                    <p className="text-gray-600 mb-1">Thanks for purchasing.</p>
                    <p className="font-medium mb-4">Total: ${total.toFixed(2)}</p>
                    <button
                        onClick={onClose}
                        className="w-full max-w-[200px] bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessModal;