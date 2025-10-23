import React from "react";
import user from "../assets/user2.png";
const MyContact = () => {
  return (
    <>
      <div class="bg-[#F7F9FC]">
        <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div class="layout-container flex h-full grow flex-col">
            <div class="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
              <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8edf5] px-10 py-3">
                  <div class="flex items-center gap-4 text-[#131118]">
                    <div class="text-3xl text-[#4A90E2]">
                      <span class="material-symbols-outlined">contacts</span>
                    </div>
                    <h2 class="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em]">
                      My Contacts
                    </h2>
                  </div>
                  <div class="flex gap-2">
                    <button class="hidden md:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#4A90E2] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
                      <span class="truncate">Add Contact</span>
                    </button>
                    <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f3f8] text-[#131118] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
                      <span class="truncate">Settings</span>
                    </button>
                  </div>
                </header>
                <div class="px-4 py-6">
                  <label class="flex flex-col min-w-40 h-14 w-full">
                    <div class="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                      <div class="text-[#6b6189] flex border-none bg-white items-center justify-center pl-4 rounded-l-xl border-r-0">
                        <span class="material-symbols-outlined">search</span>
                      </div>
                      <input
                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#131118] focus:outline-0 focus:ring-2 focus:ring-[#4A90E2] focus:ring-opacity-50 border-none bg-white h-full placeholder:text-[#6b6189] px-4 text-base font-normal leading-normal"
                        placeholder="Search by name, email, etc."
                        value=""
                      />
                    </div>
                  </label>
                </div>
                <div class="flex gap-3 px-4 py-3 overflow-x-auto">
                  <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#E8F0FE] pl-4 pr-3 text-[#4A90E2] hover:bg-opacity-80 transition-all">
                    <p class="text-sm font-medium leading-normal">Group</p>
                    <span class="material-symbols-outlined text-base">
                      expand_more
                    </span>
                  </button>
                  <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#E4F8F4] pl-4 pr-3 text-[#50E3C2] hover:bg-opacity-80 transition-all">
                    <p class="text-sm font-medium leading-normal">Tag</p>
                    <span class="material-symbols-outlined text-base">
                      expand_more
                    </span>
                  </button>
                  <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#FDF4E6] pl-4 pr-3 text-[#F5A623] hover:bg-opacity-80 transition-all">
                    <p class="text-sm font-medium leading-normal">
                      Recently Added
                    </p>
                    <span class="material-symbols-outlined text-base">
                      expand_more
                    </span>
                  </button>
                </div>
                <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
                  <div class="flex flex-col gap-3 text-center pb-3 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div class="px-4 pt-4">
                      <div
                        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        data-alt="Profile picture of John Doe"
                      >
                        <img src={user} alt="" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#131118] text-base font-medium leading-normal">
                        John Doe
                      </p>
                      <p class="text-[#6b6189] text-sm font-normal leading-normal">
                        john.doe@example.com
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 text-center pb-3 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div class="px-4 pt-4">
                      <div
                        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        data-alt="Profile picture of Jane Smith"
                      >
                        <img src={user} alt="" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#131118] text-base font-medium leading-normal">
                        Jane Smith
                      </p>
                      <p class="text-[#6b6189] text-sm font-normal leading-normal">
                        jane.smith@example.com
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 text-center pb-3 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div class="px-4 pt-4">
                      <div
                        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        data-alt="Profile picture of Alex Johnson"
                      >
                        <img src={user} alt="" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#131118] text-base font-medium leading-normal">
                        Alex Johnson
                      </p>
                      <p class="text-[#6b6189] text-sm font-normal leading-normal">
                        alex.johnson@example.com
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 text-center pb-3 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div class="px-4 pt-4">
                      <div
                        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        data-alt="Profile picture of Emily Brown"
                      >
                        <img src={user} alt="" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#131118] text-base font-medium leading-normal">
                        Emily Brown
                      </p>
                      <p class="text-[#6b6189] text-sm font-normal leading-normal">
                        emily.brown@example.com
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 text-center pb-3 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div class="px-4 pt-4">
                      <div
                        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        data-alt="Profile picture of Michael Davis"
                      >
                        <img src={user} alt="" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#131118] text-base font-medium leading-normal">
                        Michael Davis
                      </p>
                      <p class="text-[#6b6189] text-sm font-normal leading-normal">
                        michael.davis@example.com
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 text-center pb-3 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div class="px-4 pt-4">
                      <div
                        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        data-alt="Profile picture of Sarah Wilson"
                      >
                        <img src={user} alt="" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#131118] text-base font-medium leading-normal">
                        Sarah Wilson
                      </p>
                      <p class="text-[#6b6189] text-sm font-normal leading-normal">
                        sarah.wilson@example.com
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 text-center pb-3 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div class="px-4 pt-4">
                      <div
                        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        data-alt="Profile picture of David Martinez"
                      >
                        <img src={user} alt="" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#131118] text-base font-medium leading-normal">
                        David Martinez
                      </p>
                      <p class="text-[#6b6189] text-sm font-normal leading-normal">
                        david.martinez@example.com
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3 text-center pb-3 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div class="px-4 pt-4">
                      <div
                        class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        data-alt="Profile picture of Jennifer Garcia"
                      >
                        <img src={user} alt="" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#131118] text-base font-medium leading-normal">
                        Jennifer Garcia
                      </p>
                      <p class="text-[#6b6189] text-sm font-normal leading-normal">
                        jennifer.garcia@example.com
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col items-center justify-center text-center p-10 mt-10 border-2 border-dashed border-gray-300 rounded-2xl">
                  <div class="text-6xl text-gray-400 mb-4">
                    <span class="material-symbols-outlined">group</span>
                  </div>
                  <h3 class="text-xl font-bold text-gray-800 mb-2">
                    No contacts yet.
                  </h3>
                  <p class="text-gray-500 mb-6">
                    Add your first contact to get started!
                  </p>
                  <button class="flex items-center justify-center gap-2 max-w-[480px] cursor-pointer rounded-xl h-12 px-6 bg-[#4A90E2] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-all">
                    <span class="material-symbols-outlined">add</span>
                    <span>Add Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="fixed bottom-8 right-8 z-10">
            <button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 w-16 bg-[#4A90E2] text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:scale-105 transition-transform">
              <span class="material-symbols-outlined text-3xl">add</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyContact;
