"use client";
import React, {useState} from "react";

const ModalLocation = ({data, label}) => {
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
                    <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
                        <div className="mb-6 w-full">
                            <label
                                htmlhtmlFor="point"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Point
                            </label>
                            <input
                                type="text"
                                id="point"
                                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-50dark:-lig0 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue={data.point}
                            />
                        </div>
                        <div className="flex items-center justify-end space-x-2 rounded-b mt-5">
                            <button
                                data-modal-hide={data.id}
                                type="button"
                                className={`btn-primary-lite`}
                                onClick={closeModal}
                            >
                                Simpan
                            </button>
                            <button
                                data-modal-hide={data.id}
                                type="button"
                                className={`btn-danger-lite`}
                                onClick={closeModal}
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalLocation;
