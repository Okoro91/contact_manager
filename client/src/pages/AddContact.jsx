import React from "react";

const AddContact = () => {
  return (
    <>
      <div class="bg-[#F7F7F7]">
        <div class="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#F7F7F7] p-4 sm:p-6 lg:p-8">
          <div class="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
            <div class="mb-8">
              <h1 class="text-3xl font-bold text-[#333333] tracking-tight">
                Add a New Contact
              </h1>
            </div>
            <div class="mb-8">
              <div class="flex items-center gap-6">
                <div class="group relative">
                  <div
                    class="h-24 w-24 cursor-pointer rounded-full bg-[#E0E0E0] bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover:brightness-90"
                    data-alt="Placeholder for profile picture"
                  ></div>
                  <div class="absolute inset-0 flex flex-col items-center justify-center rounded-full bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span class="material-symbols-outlined text-3xl">
                      upload
                    </span>
                    <p class="text-xs font-medium text-center">
                      Click to upload or
                      <br />
                      drag &amp; drop
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <label class="flex flex-col">
                <p class="mb-2 text-sm font-medium text-[#333333]">Full Name</p>
                <input
                  class="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg border border-[#E0E0E0] bg-white p-3 text-base text-[#333333] placeholder:text-gray-400 focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50"
                  placeholder="Enter full name"
                  value=""
                />
              </label>
              <label class="flex flex-col">
                <p class="mb-2 text-sm font-medium text-[#333333]">
                  Email Address
                </p>
                <input
                  class="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg border border-[#E0E0E0] bg-white p-3 text-base text-[#333333] placeholder:text-gray-400 focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50"
                  placeholder="Enter email address"
                  value=""
                />
              </label>
            </div>
            <div class="mt-6">
              <label class="flex flex-col">
                <p class="mb-2 text-sm font-medium text-[#333333]">Location</p>
                <div class="relative flex w-full items-stretch">
                  <input
                    class="form-input flex w-full flex-1 resize-none overflow-hidden rounded-l-lg border border-r-0 border-[#E0E0E0] bg-white p-3 pr-2 text-base text-[#333333] placeholder:text-gray-400 focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50"
                    placeholder="Search for a location"
                    value=""
                  />
                  <div class="flex items-center justify-center rounded-r-lg border border-l-0 border-[#E0E0E0] bg-white pr-3 text-gray-500">
                    <span class="material-symbols-outlined">search</span>
                  </div>
                </div>
              </label>
            </div>
            <div class="mt-6">
              <label class="flex flex-col">
                <p class="mb-2 text-sm font-medium text-[#333333]">
                  Full Address
                </p>
                <input
                  class="form-input flex w-full flex-1 resize-none overflow-hidden rounded-lg border border-[#E0E0E0] bg-white p-3 text-base text-[#333333] placeholder:text-gray-400 focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50"
                  placeholder="Enter full address"
                  value=""
                />
              </label>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-[#333333]">Social Media</h3>
              <div class="mt-4 space-y-4">
                <div class="flex items-center gap-4">
                  <div class="flex-shrink-0">
                    <select class="form-select w-40 rounded-lg border border-[#E0E0E0] bg-white p-3 text-base text-[#333333] focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50">
                      <option>Twitter</option>
                      <option>LinkedIn</option>
                      <option>Facebook</option>
                      <option>Instagram</option>
                    </select>
                  </div>
                  <input
                    class="form-input flex-1 rounded-lg border border-[#E0E0E0] bg-white p-3 text-base text-[#333333] placeholder:text-gray-400 focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50"
                    placeholder="Enter handle"
                    value=""
                  />
                  <button class="text-gray-400 hover:text-[#D0021B]">
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div class="flex items-center gap-4">
                  <div class="flex-shrink-0">
                    <select class="form-select w-40 rounded-lg border border-[#E0E0E0] bg-white p-3 text-base text-[#333333] focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50">
                      <option>Twitter</option>
                      <option selected="">LinkedIn</option>
                      <option>Facebook</option>
                      <option>Instagram</option>
                    </select>
                  </div>
                  <input
                    class="form-input flex-1 rounded-lg border border-[#E0E0E0] bg-white p-3 text-base text-[#333333] placeholder:text-gray-400 focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50"
                    placeholder="Enter handle"
                    value=""
                  />
                  <button class="text-gray-400 hover:text-[#D0021B]">
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
              <button class="mt-4 flex items-center gap-2 text-sm font-medium text-[#4A90E2] hover:text-blue-700">
                <span class="material-symbols-outlined">add_circle</span>
                Add More
              </button>
            </div>
            <div class="mt-8">
              <label class="flex flex-col">
                <p class="mb-2 text-sm font-medium text-[#333333]">
                  Short Details
                </p>
                <textarea
                  class="form-textarea w-full resize-y rounded-lg border border-[#E0E0E0] bg-white p-3 text-base text-[#333333] placeholder:text-gray-400 focus:border-[#4A90E2] focus:outline-none focus:ring-2 focus:ring-[#4A90E2]/50"
                  placeholder="Add any additional notes here..."
                  rows="4"
                ></textarea>
              </label>
            </div>
            <div class="mt-10 flex flex-col items-center justify-end gap-4 sm:flex-row">
              <button class="w-full rounded-lg px-6 py-3 text-base font-semibold text-gray-600 hover:bg-gray-100 sm:w-auto">
                Cancel
              </button>
              <button class="w-full rounded-lg bg-[#4A90E2] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2 sm:w-auto">
                Save Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
