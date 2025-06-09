"use client";
import { HeroSection } from "@/components/Layouts";
import Side from "@/components/Layouts/Side";
import { investorCreate } from "@/libs/data";
import { motion } from "framer-motion";

import Image from "next/image";

const AboutPage = () => {
  const cardVariant = {
    hover: {
      scale: 1.05,
      backgroundColor: "#ffffff",
      boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const imageHoverEffect = {
    hover: {
      rotate: [0, 10, -10, 10, -10, 0],
      scale: 1.2,
      y: -10,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <main className=" text-[#1a1a1a] mt-10  mb-4">
      <HeroSection title="Về chúng tôi - MyGPT" description="Về chúng tôi" />
      <section className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold  text-[#148bbd] mb-5">
          Tầm nhìn
        </h2>
        <Side />
        <h3 className="text-2xl font-semibold  text-[#008000] my-10  ">
          Nhận biết chúng tôi qua
        </h3>
        <ul className="text-2xl font-bold text-amber-900 ml-20">
          <li className="mt-2">
            ⇾ Chất lượng phản hồi dựa trên ngữ nghĩa chính xác 100%
          </li>
          <li className="mt-2">⇾ Tốc độ triển khai nhanh nhất</li>
          <li className="mt-2">⇾ Giá thành phát triển hợp lý nhất</li>
        </ul>
        <div className="my-10 text-blue-400 text-xl">
          <p className="my-5">
            Công ty cổ phần phần mềm MyGPT là một trong những đơn vị hàng đầu
            tại Việt Nam trong lĩnh vực trí tuệ nhân tạo (AI) tập trung cung cấp
            dịch vụ xử lý dữ liệu vào phát triển phần mềm trên nền tảng công
            nghệ tạo sinh và mô hình ngôn ngữ lớn (Generative AI).
          </p>
          <p className="my-5">
            MyGPT được thành lập với sứ mệnh trợ giúp các tổ chức và doanh
            nghiệp nâng cao chất lượng hoạt động và hiệu suất làm việc thông qua
            các giải pháp công nghệ tiên tiến, MyGPT không ngừng đổi mới và phát
            triển để đáp ứng nhu cầu ngày càng cao của thị trường.
          </p>
          <p className="my-5">
            Với đội ngũ chuyên gia giàu kinh nghiệm và đam mê trong lĩnh vực AI,
            MyGPT đã và đang phát triển nhiều sản phẩm và dịch vụ đột phá, từ
            trợ lý ảo, hệ thống tự động hóa, đến các giải pháp phân tích dữ liệu
            thông minh. Công ty cam kết mang đến cho khách hàng những trải
            nghiệm tốt nhất, góp phần thúc đẩy sự phát triển bền vững của nền
            kinh tế số tại Việt Nam.
          </p>
          <p className="my-5">
            Sự tín nhiệm và hài lòng của khách hàng chính là động lực để MyGPT
            tiếp tục phấn đấu và khẳng định vị thế của mình trên thị trường
            trong và ngoài nước. MyGPT luôn sẵn sàng hợp tác và đồng hành cùng
            các doanh nghiệp, tổ chức trong hành trình chinh phục những thành
            tựu mới trong kỷ nguyên trí tuệ nhân tạo.
          </p>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-3">
          {(investorCreate || []).map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover="hover"
              className="flex flex-col items-center rounded-2xl px-8 py-10 bg-gray-100 gap-5 transition-all"
            >
              <div className="group relative  rounded-xl shadow-md cursor-pointer">
                <motion.div
                  variants={imageHoverEffect}
                  className="bg-white p-5 rounded-2xl"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    width={55}
                    height={55}
                  />
                </motion.div>
              </div>
              <div>
                <h3 className="text-center text-[#2b729a] text-2xl mb-3 font-bold">
                  {item.label}
                </h3>
                <p className="text-center text-[#893232] text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="w-full h-0.5 bg-gray-700 mt-10"></div>
        <div className="mt-10">
          <span className="text-lg text[#036] ">
            MyGPT cung cấp giải pháp huấn luyện AI với dữ liệu riêng trên nền
            tảng các mô hình ngôn ngữ lớn nhằm tạo ra các sản phẩm ứng dụng
            riêng cho các Tổ chức và Doanh nghiệp trong hoạt động hàng ngày.
          </span>
          <p className="text-end text-lg text-gray-600 font-bold">
            MyGPT team!
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
