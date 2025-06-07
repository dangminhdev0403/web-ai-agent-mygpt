"use client";

import {
  faAnglesDown,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen bg-white overflow-hidden ">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-[url('https://mygpt.vn/wp-content/uploads/2023/09/b-bg.png')] bg-cover bg-center bg-no-repeat" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-20 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 max-w-xl my-auto">
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-shadow">
                  Huấn luyện AI dành cho Tổ chức & Doanh nghiệp
                </p>
                <h1 className=" text-5xl lg:text-7xl font-bold leading-tight text-shadow">
                  Huấn luyện AI
                  <br />
                  với Dữ liệu
                  <br />
                  Doanh nghiệp
                </h1>
              </div>

              {/* Form (Hiện mọi thiết bị) */}
              <div className="space-y-4 w-full hidden sm:block">
                <div className="relative w-full">
                  <div>
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Email của bạn"
                      className="bg-white text-black h-14 w-full rounded-full pl-14 pr-6 text-base shadow placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
                <button className="w-full sm:w-fit bg-[#0f09aa] hover:bg-[#40372c] text-white font-bold px-8 py-3.5 h-12 rounded-full text-lg cursor-pointer">
                  Tôi cần tư vấn
                </button>
              </div>
            </div>

            {/* Right Illustration Placeholder */}
            <div className="h-[300px] sm:h-[400px] lg:h-[500px] relative hidden lg:block">
              {/* Đặt hình ảnh hoặc mô hình minh hoạ ở đây nếu có */}
              <div className="w-full h-full " />
            </div>
          </div>
        </div>

        {/* Floating Circle (chỉ desktop) */}
        <div className="hidden lg:flex absolute bottom-10 left-10 w-12 h-12 bg-white/10 rounded-full items-center justify-center">
          <div className="w-6 h-6 bg-orange-400 rounded-full" />
        </div>
      </section>
      <section className="container mx-auto  mt-12">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 ">
          <div className="flex bg-[#112c6f] text-white p-8 rounded-3xl space-x-8">
            <div>
              <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ color: "#5e88d1" }}
                size="4x"
                className="mt-4"
              />
            </div>
            <div>
              <h3 className="text-xl text-[#a1c8e6] ">Huấn luyện AI là gì?</h3>
              <p className=" text-left text-lg mt-4   ">
                Huấn luyện AI, còn được gọi là học máy, là quá trình dạy cho máy
                tính cách tìm hiểu từ dữ liệu và kiến thức. Quá trình này bao
                gồm việc xử lý, cung cấp dữ liệu đầu vào cho máy tính phù hợp và
                cho phép nó tìm hiểu sau đó điều chỉnh mô hình để cải thiện hiệu
                suất đáp ứng yêu cầu thực tế.
              </p>
            </div>
          </div>
          <div className="flex bg-[#112c6f] text-white p-8 rounded-3xl space-x-8">
            <div>
              <Image
                src="/think-big.png"
                alt="Logo"
                width={80}
                height={56}
                className="object-cover w-sm h-sm"
              />
            </div>
            <div>
              <h3 className="text-xl text-[#a1c8e6] ">MYGPT cung cấp</h3>
              <div className="text-left text-lg mt-4 ">
                <p>Dịch vụ huấn luyện AI bao gồm:</p>
                <p>
                  ⇾{" "}
                  <span className="font-bold text-amber-300 ml-0.5">
                    XỬ LÝ DỮ LIỆU
                  </span>
                  sử dụng cho học máy
                </p>
                <p>
                  ⇾ và{" "}
                  <span className="font-bold text-amber-300 ml-0.5">
                    HỆ THỐNG AI (bao gồm cả PHÁT TRIỂN PHẦN MỀM)
                  </span>{" "}
                  để tạo nên một sản phẩm GenAI dành cho các Tổ chức & Doanh
                  nghiệp ứng dụng trong hoạt động sản xuất & kinh doanh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center my-6">
          {/* Đường gạch bên trái */}
          <div className="border-t border-dotted border-blue-200 w-full absolute left-0 top-1/2 z-0" />

          {/* Icon mũi tên nằm giữa, nổi lên trên */}
          <div className="bg-white px-4 z-10">
            <FontAwesomeIcon icon={faAnglesDown} color="#a4c4fc" size="sm" />{" "}
            {/* Hoặc dùng Heroicons nếu muốn: <ChevronDoubleDownIcon className="w-6 h-6 text-gray-400 animate-bounce" /> */}
          </div>

          {/* Đường gạch bên phải */}
          {/* Không cần thêm vì đường trái đã kéo full chiều rộng. Nếu bạn cần chia cụ thể trái/phải thì xem thêm dưới */}
        </div>
      </section>
      <section>
        <div className="text-center">
          <p className="text-base font-semibold">
            MyGPT có thể triển khai trong
          </p>
          <p className="font-bold text-4xl mt-6 mb-10"> Các lĩnh vực</p>
        </div>
      </section>
    </>
  );
}
