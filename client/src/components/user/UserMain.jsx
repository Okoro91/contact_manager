import React from "react";
import user from "../../assets/user.jpg";

const UserMain = () => {
  return (
    <main class="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 md:p-0">
      <div class="lg:col-span-1 flex flex-col gap-8">
        <div class="bg-white dark:bg-background-dark rounded-xl shadow-sm p-6">
          <div class="flex w-full flex-col gap-4 items-center">
            <div class="relative">
              <div
                class="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                data-alt="Profile picture of Alex Johnson"
                style={{ backgroundImage: `url(${user})` }}
              ></div>
              <button class="absolute bottom-0 right-0 flex items-center justify-center size-8 bg-primary text-white rounded-full hover:bg-primary/90 transition-transform transform hover:scale-110">
                <span class="material-symbols-outlined text-base">
                  photo_camera
                </span>
              </button>
            </div>
            <div class="flex flex-col items-center justify-center text-center">
              <p class="text-2xl font-bold leading-tight tracking-[-0.015em]">
                Alex Johnson
              </p>
              <p class="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal mt-1">
                Product Manager at TechCorp. Passionate about user-centric
                design and building great products.
              </p>
            </div>
            <button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-xs hover:bg-primary/90 transition-colors">
              <span class="truncate">Edit Profile</span>
            </button>
          </div>
        </div>
        <div class="bg-white dark:bg-background-dark rounded-xl shadow-sm p-6">
          <h3 class="text-lg font-bold mb-4">Social Media</h3>
          <div class="grid grid-cols-4 gap-4">
            <a
              class="flex items-center justify-center size-12 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-all transform hover:scale-105"
              data-alt="LinkedIn Profile"
              href="#"
            >
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              class="flex items-center justify-center size-12 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-all transform hover:scale-105"
              data-alt="Twitter Profile"
              href="#"
            >
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.848-.764-.024-1.482-.234-2.11-.583v.06c0 2.256 1.606 4.135 3.737 4.568-.39.106-.803.163-1.227.163-.3 0-.593-.028-.877-.082.593 1.85 2.303 3.2 4.33 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z"></path>
              </svg>
            </a>
            <a
              class="flex items-center justify-center size-12 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-all transform hover:scale-105"
              data-alt="GitHub Profile"
              href="#"
            >
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            <a
              class="flex items-center justify-center size-12 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/30 transition-all transform hover:scale-105"
              data-alt="Dribbble Profile"
              href="#"
            >
              <svg
                aria-hidden="true"
                class="h-6 w-6 text-gray-600 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.663 14.22c-1.33 1.488-3.084 2.72-5.04 3.585-2.029.895-4.224 1.205-6.38.894.24-3.41.879-6.845 1.868-10.155 3.218 1.696 6.166 3.666 8.552 5.676zm-3.003-10.334c2.585 2.878 4.227 6.438 4.545 10.264-1.748.749-3.646 1.12-5.592 1.12-1.92 0-3.793-.36-5.549-1.077 1.055-3.518 2.684-6.839 4.809-9.754 1.767-.091 3.423.473 4.787 1.447z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="lg:col-span-2 bg-white dark:bg-background-dark rounded-xl shadow-sm p-6">
        <h3 class="text-xl font-bold mb-6">Contact Information</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-4 bg-white dark:bg-background-dark px-4 min-h-14 justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
            <div class="flex items-center gap-4">
              <div class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                <span class="material-symbols-outlined">call</span>
              </div>
              <p class="text-base font-normal leading-normal flex-1 truncate">
                +1 (123) 456-7890
              </p>
            </div>
            <div class="shrink-0">
              <button class="text-base font-medium leading-normal text-primary hover:underline">
                Edit
              </button>
            </div>
          </div>
          <div class="flex items-center gap-4 bg-white dark:bg-background-dark px-4 min-h-14 justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
            <div class="flex items-center gap-4">
              <div class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                <span class="material-symbols-outlined">email</span>
              </div>
              <p class="text-base font-normal leading-normal flex-1 truncate">
                alex.johnson@example.com
              </p>
            </div>
            <div class="shrink-0">
              <button class="text-base font-medium leading-normal text-primary hover:underline">
                Edit
              </button>
            </div>
          </div>
          <div class="flex items-center gap-4 bg-white dark:bg-background-dark px-4 min-h-14 justify-between">
            <div class="flex items-center gap-4">
              <div class="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-10">
                <span class="material-symbols-outlined">location_on</span>
              </div>
              <p class="text-base font-normal leading-normal flex-1 truncate">
                San Francisco, CA
              </p>
            </div>
            <div class="shrink-0">
              <button class="text-base font-medium leading-normal text-primary hover:underline">
                Edit
              </button>
            </div>
          </div>
        </div>
        <h3 class="text-xl font-bold mt-12 mb-6">Mutual Contacts</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div class="flex flex-col items-center gap-2 text-center">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Mutual contact 1"
              style={{ backgroundImage: `url(${user})` }}
            ></div>
            <p class="text-sm font-medium">Jane Doe</p>
          </div>
          <div class="flex flex-col items-center gap-2 text-center">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Mutual contact 2"
              style={{ backgroundImage: `url(${user})` }}
            ></div>
            <p class="text-sm font-medium">Emily Smith</p>
          </div>
          <div class="flex flex-col items-center gap-2 text-center">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Mutual contact 3"
              style={{ backgroundImage: `url(${user})` }}
            ></div>
            <p class="text-sm font-medium">Michael B.</p>
          </div>
          <div class="flex flex-col items-center gap-2 text-center">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Mutual contact 4"
              style={{ backgroundImage: `url(${user})` }}
            ></div>
            <p class="text-sm font-medium">Sarah Chen</p>
          </div>
          <div class="flex flex-col items-center gap-2 text-center">
            <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
              data-alt="Mutual contact 5"
              style={{ backgroundImage: `url(${user})` }}
            ></div>
            <p class="text-sm font-medium">David Lee</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserMain;
