"use client";
import React, { useState } from "react";

export default function Profile() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        image: null,
    });
    const [preview, setPreview] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, image: file }));
            setPreview(URL.createObjectURL(file));
        }
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted successfully!");
    };

    return (
        <div className=" flex items-center justify-center  p-6">
            <div className="bg-white w-full shadow-lg rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-center  mb-6">
                    User Profile
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className=" flex gap-x-5  " >
                        {/* Name */}
                        <div className=" w-full " >
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className=" w-full " >
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                                required
                            />
                        </div>
                    </div>

                    <div className=" flex gap-x-5 " >
                        {/* Phone Number */}
                        <div className=" w-full " >
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                                required
                            />
                        </div>

                        {/* Location */}
                        <div className=" w-full  " >
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter your location"
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                                required
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none py-2 "
                        />

                        {/* Image Preview */}
                        {preview && (
                            <div className="mt-4 flex justify-center">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-32 h-32 object-cover rounded-lg shadow-md border"
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
