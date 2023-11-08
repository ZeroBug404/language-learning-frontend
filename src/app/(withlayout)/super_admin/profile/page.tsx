"use client";

import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { userId } = getUserInfo() as any;

  const { data } = useGetSingleUserQuery(userId);

  return (
    <div className="h-full">
      <div className="border-b-2 block md:flex">
        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div className="flex justify-between">
            <span className="text-xl font-semibold block">Profile</span>
            <Link
              href="#"
              className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
            >
              Edit
            </Link>
          </div>

          <span className="text-gray-600">
            This information is secret so be careful
          </span>
          <div className="w-full p-8 mx-2 flex justify-center">
            <Image
              id="showImage"
              className="max-w-xs w-32 items-center border"
              width={300}
              height={300}
              src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
          <div className="rounded  shadow p-6">
            <div className="pb-6">
              <label
                htmlFor="name"
                className="font-semibold text-gray-700 block pb-1"
              >
                Name
              </label>
              <div className="flex">
                <input
                  disabled
                  id="username"
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  value={data?.data?.name}
                />
              </div>
            </div>
            <div className="pb-4">
              <label
                htmlFor="about"
                className="font-semibold text-gray-700 block pb-1"
              >
                Email
              </label>
              <input
                disabled
                id="email"
                className="border-1  rounded-r px-4 py-2 w-full"
                type="email"
                value={data?.data?.email}
              />
              <span className="text-gray-600 pt-4 block opacity-70">
                Personal login information of your account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
