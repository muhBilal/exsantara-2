"use client";
import React, { useState } from "react";

const ModalLocation = ({ data, label }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="btn-primary-lite"
            >
                {label}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white w-[50rem] p-6 rounded-lg shadow-lg">
                        <iframe src={data.map} width="750" height="450" allowFullScreen="true" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="flex items-center justify-end space-x-2 rounded-b mt-5">
                            <button
                                data-modal-hide={data.id}
                                type="button"
                                className={`btn-danger-lite`}
                                onClick={closeModal}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalLocation;
