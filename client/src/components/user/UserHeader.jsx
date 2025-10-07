import React from "react";
import user from "../../assets/user.jpg";

const UserHeader = () => {
  return (
    <>
      <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-700 px-4 md:px-10 py-3 mb-8">
        <div class="flex items-center gap-4 text-gray-900 dark:text-white">
          <span class="material-symbols-outlined text-primary text-3xl">
            contacts
          </span>
          <h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">
            Contacts
          </h2>
        </div>
        <div class="flex flex-1 justify-end items-center gap-4 md:gap-8">
          <nav class="hidden md:flex items-center gap-6">
            <a
              class="text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Dashboard
            </a>
            <a
              class="text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Settings
            </a>
            <a
              class="text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Logout
            </a>
          </nav>
          <button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <span class="material-symbols-outlined">search</span>
          </button>
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            data-alt="User avatar placeholder"
            style={{ backgroundImage: `url(${user})` }}
          ></div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
