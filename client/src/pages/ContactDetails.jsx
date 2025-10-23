import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div class="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden">
        <div class="layout-container flex h-full grow flex-col">
          <div class="px-40 flex flex-1 justify-center py-5">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
              <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f1f0f4] px-10 py-3">
                <div class="flex items-center gap-4 text-[#131118]">
                  <div class="size-6 text-[#4913ec]">
                    <span class="material-symbols-outlined">contacts</span>
                  </div>
                  <h2 class="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em]">
                    Contact Details
                  </h2>
                </div>
                <div class="flex gap-2">
                  <button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f1f0f4] text-[#131118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span class="material-symbols-outlined text-base">
                      edit
                    </span>
                  </button>
                  <button class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f1f0f4] text-[#131118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                    <span class="material-symbols-outlined text-base">
                      delete
                    </span>
                  </button>
                </div>
              </header>
              <main class="flex-1 p-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div class="md:col-span-1 flex flex-col items-center text-center">
                    <div class="flex p-4 @container">
                      <div class="flex w-full flex-col gap-4 items-center">
                        <div class="flex gap-4 flex-col items-center">
                          <div
                            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                            data-alt="Profile picture of Sarah Lane"
                          ></div>
                          <div class="flex flex-col items-center justify-center">
                            <p class="text-[#131118] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                              Sarah Lane
                            </p>
                            <p class="text-[#6b6189] text-base font-normal leading-normal text-center mt-1">
                              UX Designer at TechCorp
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full px-4">
                      <p class="text-[#6b6189] text-sm font-normal leading-normal text-center">
                        Passionate about creating intuitive and beautiful user
                        experiences. Coffee enthusiast and dog lover.
                      </p>
                    </div>
                    <div class="flex px-4 py-3 w-full mt-4">
                      <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#4913ec] text-white gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]">
                        <span class="material-symbols-outlined">chat</span>
                        <span class="truncate">Chat</span>
                      </button>
                    </div>
                  </div>
                  <div class="md:col-span-2">
                    <div class="p-4 grid grid-cols-[30%_1fr] gap-x-6">
                      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dedbe6] py-5">
                        <p class="text-[#6b6189] text-sm font-normal leading-normal">
                          Phone Number
                        </p>
                        <p class="text-[#131118] text-sm font-normal leading-normal">
                          +1 (555) 123-4567
                        </p>
                      </div>
                      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dedbe6] py-5">
                        <p class="text-[#6b6189] text-sm font-normal leading-normal">
                          Email
                        </p>
                        <a
                          class="text-[#4913ec] text-sm font-normal leading-normal hover:underline"
                          href="mailto:sarah.lane@example.com"
                        >
                          sarah.lane@example.com
                        </a>
                      </div>
                      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dedbe6] py-5">
                        <p class="text-[#6b6189] text-sm font-normal leading-normal">
                          Social Media
                        </p>
                        <a
                          class="text-[#4913ec] text-sm font-normal leading-normal hover:underline"
                          href="#"
                        >
                          @sarahlane_designs
                        </a>
                      </div>
                      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dedbe6] py-5">
                        <p class="text-[#6b6189] text-sm font-normal leading-normal">
                          Location
                        </p>
                        <a
                          class="text-[#4913ec] text-sm font-normal leading-normal hover:underline"
                          data-location="San Francisco, CA"
                          href="#"
                        >
                          San Francisco, CA
                        </a>
                      </div>
                      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dedbe6] py-5">
                        <p class="text-[#6b6189] text-sm font-normal leading-normal">
                          Address
                        </p>
                        <a
                          class="text-[#4913ec] text-sm font-normal leading-normal hover:underline"
                          href="#"
                        >
                          456 Oak Avenue, San Francisco, CA 94102
                        </a>
                      </div>
                      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dedbe6] py-5">
                        <p class="text-[#6b6189] text-sm font-normal leading-normal">
                          Nickname
                        </p>
                        <p class="text-[#131118] text-sm font-normal leading-normal">
                          Sari
                        </p>
                      </div>
                      <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dedbe6] py-5">
                        <p class="text-[#6b6189] text-sm font-normal leading-normal">
                          Notes
                        </p>
                        <p class="text-[#131118] text-sm font-normal leading-normal">
                          Met at the Design Forward conference. Great insights
                          on user research.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
