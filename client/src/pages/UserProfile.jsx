import React from "react";
import UserHeader from "../components/user/UserHeader";
import UserMain from "../components/user/UserMain";

const UserProfile = () => {
  return (
    <div class="bg-background-light dark:bg-background-dark  text-gray-900 dark:text-gray-100">
      <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
          <div class="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
              <UserHeader />
              <UserMain />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
