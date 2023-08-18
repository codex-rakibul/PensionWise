import React from "react";
import Styles from "./style.module.css";
import { CopyrightOutlined } from "@ant-design/icons";

const renderData = (
  <div className={`bg-gray-600`}>
    <div className={`md:mx-32 mx-5 md:pl-12 pt-24 border-none`}>
      <div className="bg-gray-600 items-center">
        <div className="space-y-9 grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4  ">
          <div className="text-[#6d6d6d] font-[650] text-[16px] leading-7">
            <div className="flex justify-start md:mt-10">
              <h1
                className={`text-gray-200  font-sans uppercase font-normal tracking-wider `}
              >
                Inform{" "}
              </h1>{" "}
              <span className="text-gray-200 font-sans uppercase font-normal tracking-wider">
                ation
              </span>
            </div>
            <div className={`text-gray-200`} />
            <p>Registration Start Date</p>
            <p>Registration End Date</p>
            <p>Exam Last Date </p>
          </div>
          <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
            <div>
              <pre className="text-gray-200 font-sans uppercase font-normal tracking-wider ">
                {" "}
                dates &nbsp;
              </pre>
            </div>
            <div className={`text-gray-200`} />
            <p>23 Dec 2021</p>
            <p>30 May 2022</p>
            <p>23 Dec 2021 to 31 May 2022</p>
          </div>

          <div className="md:flex flex-col justify-between">
            <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
              <div className="flex justify-start">
                <h1 className="text-gray-200 font-sans uppercase font-normal tracking-wider ">
                  About{" "}
                </h1>{" "}
                <span className="text-gray-200 font-sans uppercase font-normal tracking-wider">
                  exam
                </span>
              </div>
              <div className={`text-gray-200`} />
              <p className="">
                {" "}
                <a className="hover:text-[#cacaca]" href="#">
                  Apply
                </a>{" "}
              </p>
              <p className="">
                {" "}
                <a className="hover:text-[#cacaca]" href="#">
                  Eligibility
                </a>{" "}
              </p>
              <p className="">
                {" "}
                <a className="hover:text-[#cacaca]" href="#">
                  Application Process
                </a>{" "}
              </p>
              <p className="">
                {" "}
                <a className="hover:text-[#cacaca]" href="#">
                  Syllabus
                </a>{" "}
              </p>
            </div>
            <div className="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
              <div className="flex justify-start md:-mt-32">
                <h1 className="text-gray-200  font-sans uppercase font-normal ">
                  suppor{" "}
                </h1>{" "}
                <span className="text-gray-200 font-sans uppercase font-normal tracking-wider">
                  t
                </span>
              </div>
              <div className={`text-gray-200`} />
              <p className="">
                {" "}
                <a href="#" className="hover:text-[#cacaca]">
                  FAQ's
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
            <div className="flex justify-start">
              <h1 className="text-gray-200 font-sans uppercase font-normal">
                get in t{" "}
              </h1>{" "}
              <span className="text-gray-200 font-sans uppercase font-normal tracking-wider">
                ouch
              </span>
            </div>
            <div className={`text-gray-200`} />
            <p className="space-x-3">
              {" "}
              <i className="fa fa-home text-[17px]" />
            </p>
            <div className="leading-7">
              <p className="">
                {" "}
                NH-70 Chandigarh-Ludhiana Highway, <br /> Mohali, Punjab (INDIA){" "}
                <br /> General Helpline No:+91 987-6543-210{" "}
              </p>
            </div>
            <div className="leading-7 mt-4 text-[15px] font-[500]">
            
              <p className="space-x-3 hover:text-[#cacaca]">
                {" "}
                <i className="fa fa-envelope text-[16px]" />{" "}
                <a href="#">admin@Company.in</a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24 pt-6">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="text-gray-200  py-4 uppercase flex justify-center items-center">
          <div className="grid md:grid-cols-2">
          <div className="flex text-gray-200 md:justify-end md:mr-2 justify-center items-center">
            <CopyrightOutlined />2023 Pension Wise. 
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default function FooterComponent() {
  return <>{renderData}</>;
}
