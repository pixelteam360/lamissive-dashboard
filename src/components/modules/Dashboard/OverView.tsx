"use client";
// import { useOverViewQuery } from "@/redux/features/user/user.api";
import { ClipboardMinus, Contact, Pickaxe, Users } from "lucide-react";
import React from "react";

const OverView = () => {
  // const { data } = useOverViewQuery(undefined);

  const overView = {
    totalUser: 120,
    totalProfile: 80,
    totalReviewReport: 20,
    totalProfileReport: 30
  };

  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-2  gap-7">
        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Users />
            <p className="text-grayText">Total User</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalUser}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Contact />
            <p className="text-grayText">Total Profile</p>
          </div>
          <h1 className="text-[32px] font-bold">{overView?.totalProfile}</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <ClipboardMinus />
            <p className="text-grayText">Total Jobs</p>
          </div>
          <h1 className="text-[32px] font-bold">
            {overView?.totalReviewReport}
          </h1>
        </div>

        <div className="bg-white p-6 rounded-2xl flex justify-between gap-2">
          <div className="space-y-1">
            <Pickaxe />
            <p className="text-grayText">Total Worker</p>
          </div>
          <h1 className="text-[32px] font-bold">
            {overView?.totalProfileReport}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OverView;
