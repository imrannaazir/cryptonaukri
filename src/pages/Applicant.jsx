import React from "react";

const Applicant = ({
  applicant: {
    last_name,
    first_name,
    email,
    phone,
    linkedin,
    subject,
    university,
    cover_letter,
  },
}) => {
  return (
    <div class="card bg-base-300 shadow-3xl">
      <div class="card-body">
        <p className="text-3xl">{first_name + " " + last_name}</p>
        <div className="divider"></div>
        <p className="text-xl text-secondary">Contact</p>
        <p className="">Email: {email}</p>
        <p className="">LinkedIn: {linkedin}</p>
        <p className="">Mobile: {phone}</p>

        <div className="divider"></div>
        <p className="text-xl text-secondary">Education</p>
        <p className="">{subject + " at " + university}</p>
        <div className="divider"></div>
        <p className="text-xl text-secondary">Cover letter</p>
        <p className=""> {cover_letter}</p>
      </div>
    </div>
  );
};

export default Applicant;
