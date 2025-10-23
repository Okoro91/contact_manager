import React from "react";

const CreateProfile = () => {
  return (
    <>
      <div class="bg-gradient-to-br from-[#6DD5FA] to-[#FF758C]">
        <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div class="layout-container flex h-full grow flex-col">
            <div class="px-4 md:px-10 lg:px-20 py-10 flex flex-1 justify-center items-center">
              <div class="layout-content-container flex flex-col w-full max-w-4xl bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8">
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-4">
                    <div class="flex flex-wrap justify-between gap-3 p-4">
                      <div class="flex min-w-72 flex-col gap-3">
                        <p class="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                          Create Your Profile
                        </p>
                        <p class="text-white/80 text-base font-normal leading-normal">
                          Welcome! Let's get you set up.
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-col gap-3 p-4">
                      <div class="flex gap-6 justify-between">
                        <p class="text-white text-base font-medium leading-normal">
                          Profile Completion
                        </p>
                      </div>
                      <div class="rounded-full bg-white/20">
                        <div class="h-2 rounded-full bg-[#F9D423]"></div>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col lg:flex-row gap-8">
                    <div class="flex p-4 @container lg:w-1/3">
                      <div class="flex w-full flex-col gap-4 items-center">
                        <div class="relative group">
                          <div
                            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                            data-alt="Abstract gradient placeholder for profile picture "
                          ></div>
                          <div class="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span class="material-symbols-outlined text-white text-4xl">
                              photo_camera
                            </span>
                          </div>
                        </div>
                        <p class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                          Upload a Photo
                        </p>
                        <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-white/90 hover:bg-white text-[#131118] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto transition-colors">
                          <span class="truncate">Upload</span>
                        </button>
                      </div>
                    </div>

                    <div class="flex-1 flex flex-col gap-4 p-4">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="flex flex-col min-w-40 flex-1">
                          <p class="text-white text-base font-medium leading-normal pb-2">
                            Full Name
                          </p>
                          <input
                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131118] focus:outline-0 focus:ring-2 focus:ring-[#F9D423] border-none bg-white/90 h-14 placeholder:text-[#6b6189] p-4 text-base font-normal leading-normal transition-shadow"
                            placeholder="Enter your full name"
                            value=""
                          />
                        </label>
                        <label class="flex flex-col min-w-40 flex-1">
                          <p class="text-white text-base font-medium leading-normal pb-2">
                            Phone Number
                          </p>
                          <input
                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131118] focus:outline-0 focus:ring-2 focus:ring-[#F9D423] border-none bg-white/90 h-14 placeholder:text-[#6b6189] p-4 text-base font-normal leading-normal transition-shadow"
                            placeholder="Enter your phone number"
                            value=""
                          />
                        </label>
                      </div>
                      <label class="flex flex-col min-w-40 flex-1">
                        <p class="text-white text-base font-medium leading-normal pb-2">
                          Email Address
                        </p>
                        <input
                          class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131118] focus:outline-0 focus:ring-2 focus:ring-[#F9D423] border-none bg-white/90 h-14 placeholder:text-[#6b6189] p-4 text-base font-normal leading-normal transition-shadow"
                          placeholder="Enter your email address"
                          type="email"
                          value=""
                        />
                      </label>
                      <label class="flex flex-col min-w-40 flex-1">
                        <p class="text-white text-base font-medium leading-normal pb-2">
                          Bio (tell us a little about yourself)
                        </p>
                        <textarea
                          class="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-xl text-[#131118] focus:outline-0 focus:ring-2 focus:ring-[#F9D423] border-none bg-white/90 h-28 placeholder:text-[#6b6189] p-4 text-base font-normal leading-normal transition-shadow"
                          placeholder="I'm a designer who loves..."
                        ></textarea>
                      </label>

                      <div class="flex flex-col gap-4 mt-4">
                        <p class="text-white text-lg font-bold leading-tight">
                          Connect Your Socials
                        </p>
                        <div class="flex items-center gap-4">
                          <div class="flex items-center gap-2 p-2 bg-white/90 rounded-xl flex-1">
                            <span class="material-symbols-outlined text-[#131118]">
                              public
                            </span>
                            <input
                              class="form-input flex-1 min-w-0 bg-transparent text-[#131118] focus:outline-none border-none placeholder:text-[#6b6189] text-base font-normal leading-normal"
                              placeholder="username"
                              value=""
                            />
                          </div>
                          <button class="text-white hover:text-[#F9D423] transition-colors">
                            <span class="material-symbols-outlined">
                              delete
                            </span>
                          </button>
                        </div>
                        <div class="flex items-center gap-4">
                          <div class="flex items-center gap-2 p-2 bg-white/90 rounded-xl flex-1">
                            <span class="material-symbols-outlined text-[#131118]">
                              group
                            </span>
                            <input
                              class="form-input flex-1 min-w-0 bg-transparent text-[#131118] focus:outline-none border-none placeholder:text-[#6b6189] text-base font-normal leading-normal"
                              placeholder="username"
                              value=""
                            />
                          </div>
                          <button class="text-white hover:text-[#F9D423] transition-colors">
                            <span class="material-symbols-outlined">
                              delete
                            </span>
                          </button>
                        </div>
                        <button class="flex items-center justify-center gap-2 self-start rounded-xl h-10 px-4 bg-white/20 hover:bg-white/40 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                          <span class="material-symbols-outlined">add</span>
                          <span class="truncate">Add More</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-end p-4">
                    <button class="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#F9D423] text-[#131118] text-base font-bold leading-normal tracking-[0.015em] shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
                      <span class="truncate">Save Profile</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
