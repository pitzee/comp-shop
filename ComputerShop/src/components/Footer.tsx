import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface props {
  onSubscribe: () => void;
  email: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const schema = z.object({
  email: z.string().email({ message: "Inavlid email address" }),
});

const Footer = ({ onSubscribe, email, onChange }: props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <footer>
      <div className="bg-slate-200 ">
        <div className="mt-4 p-3 flex justify-between border border-b-2 border-b-gray-300 ">
          <div>
            <h1 className="font-bold text-xl">Newsletter</h1>
            <p>subscribe to get information about products and coupons</p>
          </div>

          <div>
            <input
              type="text"
              className="p-2 border-2 rounded-l-md"
              placeholder="Email address"
              value={email}
              {...register("email")}
              onChange={onChange}
            />
            <button
              className=" pl-2 border  p-2 bg-green-600"
              onClick={handleSubmit(onSubscribe)}
            >
              Subscribe
            </button>
            {errors.email && (
              <p className="text-red-500">{errors.email.message as string}</p>
            )}
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="bg-cyan-950 w-full h-80 mb-1">
        <div className="text-white  pl-4  pr-4 pt-2 flex  flex-col md:flex-row  justify-between ">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">Products</h1>
            <a href="">Desktop</a>
            <a href="">Laptops</a>
            <a href="">Network Equipments</a>
            <a href="">Softwares</a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">Social</h1>
            <a href="">
              <svg
                className="w-4 h-4 mb-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="">
              <svg
                className="w-4 h-4 mb-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="">
              {
                <svg
                  className="h-4 w-4 mb-1"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="url(#paint0_linear_87_7225)"
                  />
                  <path
                    d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_87_7225"
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#37BBFE" />
                      <stop offset="1" stop-color="#007DBB" />
                    </linearGradient>
                  </defs>
                </svg>
              }
            </a>
            <a href="">
              {
                <svg
                  className="w-4 h-4"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <path
                    style={{ fill: "#D7143A" }}
                    d="M492.044,106.769c-18.482-21.97-52.604-30.931-117.77-30.931H137.721
	c-66.657,0-101.358,9.54-119.77,32.93C0,131.572,0,165.174,0,211.681v88.64c0,90.097,21.299,135.842,137.721,135.842h236.554
	c56.512,0,87.826-7.908,108.085-27.296C503.136,388.985,512,356.522,512,300.321v-88.64
	C512,162.636,510.611,128.836,492.044,106.769z M328.706,268.238l-107.418,56.14c-2.401,1.255-5.028,1.878-7.65,1.878
	c-2.97,0-5.933-0.799-8.557-2.388c-4.942-2.994-7.959-8.351-7.959-14.128V197.82c0-5.767,3.009-11.119,7.941-14.115
	c4.933-2.996,11.069-3.201,16.187-0.542l107.418,55.778c5.465,2.837,8.897,8.479,8.905,14.635
	C337.58,259.738,334.163,265.388,328.706,268.238z"
                  />
                </svg>
              }
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">support</h1>
            <a href="">Pricing</a>
            <a href="">Documentation</a>
            <a href="">Guides</a>
          </div>
        </div>

        <div className="pl-4 text-white mt-5">
          <h1 className="font-bold">Contact us</h1>
          <p>phone 09090909009</p>
        </div>

        <div className="text-white mt-5">
          <p className="pl-4">
            &copy; {new Date().getFullYear()} computers compnay. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
