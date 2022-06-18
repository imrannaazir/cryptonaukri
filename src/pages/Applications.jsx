import React from "react";

const Applications = () => {
  return (
    <div className="mt-24 lg:mx-[10%]">
      <p>Applications</p>
      <div class="card bg-base-300 shadow-3xl">
        <div class="card-body">
          <div class="card-actions justify-end">
            <button class="btn btn-square btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p>We are using cookies for no reason.</p>
        </div>
      </div>
    </div>
  );
};

export default Applications;
