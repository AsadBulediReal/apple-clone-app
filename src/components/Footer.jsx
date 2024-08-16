import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue">Find an Apple Store </span> or{" "}
            <span className="underline text-blue">other retailer</span> near
            you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call: 000763-486-153
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-center">
          <p className="font-semibold text-gray text-xs">
            &copy; 2024 Apple Inc. All rights reserved.{" "}
            <span className="underline text-blue">Terms & Conditions</span> |{" "}
            <span className="underline text-blue">Privacy Policy</span> |{" "}
            <span className="underline text-blue">Sales & Refunds</span> |{" "}
            <span className="underline text-blue">Legal</span> |{" "}
            <span className="underline text-blue">Site Map</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
