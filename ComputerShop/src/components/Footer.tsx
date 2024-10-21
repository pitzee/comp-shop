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
        <div className="flex justify-between p-2">
          <div>
            <h1 className="font-bold">Contact us</h1>
            <p>phone 09090909009</p>
          </div>
        </div>
      </div>
      <div className="bg-cyan-950 w-full h-80 mb-1">
        <div className="text-white pl-2">
          <h1>products</h1>
        </div>
      </div>
      <div className="">
        <p className="pl-4">
          &copy; {new Date().getFullYear()} computers compnay. All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
