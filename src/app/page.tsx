"use client";

import BorderArrow from "@/components/border-arrow";
import { UI } from "@/components/client-components";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TabVideo from "@/components/tab-videos";
import TrainningComponent from "@/components/trainning-component";
import {
  chatbotApplications,
  chatbotButtons,
  contentTrainning,
  contentWhyMe,
  groupsCreated,
  tabsVideo,
  tabsVideo2,
} from "@/libs/data";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

const { Card, CardContent, FontAwesomeIcon, Icons } = UI;

const services = [
  {
    title: "Tài Chính",
    description:
      "Phân tích rủi ro tín dụng, dự báo thị trường, tự động hóa quy trình phê duyệt và phát hiện gian lận.",
    icon: Icons.FileText,
  },
  {
    title: "Bán lẻ",
    description:
      "Dự báo nhu cầu, tối ưu hóa giá cả, cá nhân hóa trải nghiệm khách hàng và quản lý kho hàng thông minh.",
    icon: Icons.Database,
  },
  {
    title: "Giáo Dục",
    description:
      "Học tập thích ứng, đánh giá tự động, phân tích hiệu suất học tập và hỗ trợ giảng dạy cá nhân hóa.",
    icon: Icons.BarChart3,
  },
  {
    title: "Thương Mại",
    description:
      "Tối ưu hóa chuỗi cung ứng, dự báo xu hướng thị trường, phân tích khách hàng và tự động hóa marketing.",
    icon: Icons.Users,
  },
  {
    title: "Du Lịch",
    description:
      "Gợi ý cá nhân hóa, tối ưu hóa giá phòng, dự báo nhu cầu du lịch và nâng cao trải nghiệm khách hàng.",
    icon: Icons.Brain,
  },
  {
    title: "Bất Động Sản",
    description:
      "Định giá tự động, phân tích thị trường, dự báo giá trị bất động sản và tối ưu hóa đầu tư.",
    icon: Icons.Building,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div
              variants={itemVariants}
              className="text-white space-y-8 max-w-xl my-auto"
            >
              <div className="space-y-4">
                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg text-shadow"
                >
                  Huấn luyện AI dành cho Tổ chức & Doanh nghiệp
                </motion.p>
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl lg:text-7xl font-bold leading-tight text-shadow"
                >
                  Huấn luyện AI
                  <br />
                  với Dữ liệu
                  <br />
                  Doanh nghiệp
                </motion.h1>
              </div>

              {/* Form (Hiện mọi thiết bị) */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 w-full hidden sm:block"
              >
                <div className="relative w-full">
                  <div>
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Email của bạn"
                      className="bg-white text-black h-14 w-[80%] rounded-full pl-14 pr-6 text-base shadow placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-fit bg-[#0f09aa] hover:bg-[#40372c] text-white font-bold px-8 py-3.5 h-12 rounded-full text-lg cursor-pointer"
                >
                  Tôi cần tư vấn
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Illustration Placeholder */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="h-[300px] sm:h-[400px] lg:h-[500px] relative hidden lg:block"
            >
              {/* Đặt hình ảnh hoặc mô hình minh hoạ ở đây nếu có */}
              <div className="w-full h-full" />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Circle (chỉ desktop) */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hidden lg:flex absolute bottom-10 left-10 w-12 h-12 bg-white/10 rounded-full items-center justify-center"
        >
          <div className="w-6 h-6 bg-orange-400 rounded-full" />
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        viewport={{ once: true }}
        className="container mx-auto mt-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            variants={itemVariants}
            className="flex bg-[#112c6f] text-white p-8 rounded-3xl space-x-8"
          >
            <div>
              <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ color: "#5e88d1" }}
                size="4x"
                className="mt-4"
              />
            </div>
            <div>
              <h3 className="text-xl text-[#a1c8e6]">Huấn luyện AI là gì?</h3>
              <p className="text-left text-lg mt-4">
                Huấn luyện AI, còn được gọi là học máy, là quá trình dạy cho máy
                tính cách tìm hiểu từ dữ liệu và kiến thức. Quá trình này bao
                gồm việc xử lý, cung cấp dữ liệu đầu vào cho máy tính phù hợp và
                cho phép nó tìm hiểu sau đó điều chỉnh mô hình để cải thiện hiệu
                suất đáp ứng yêu cầu thực tế.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex bg-[#112c6f] text-white p-8 rounded-3xl space-x-8"
          >
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
              <h3 className="text-xl text-[#a1c8e6]">MYGPT cung cấp</h3>
              <div className="text-left text-lg mt-4">
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
          </motion.div>
        </div>
        <BorderArrow />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.p variants={itemVariants} className="text-base font-semibold">
            MyGPT có thể triển khai trong
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="font-bold text-4xl mt-6 mb-10"
          >
            Các lĩnh vực
          </motion.p>
        </div>
        <div>
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow border-none w-[80%] mx-auto lg:w-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold mb-2 text-2xl">{service.title}</h3>
                    <p className="text-lg text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <BorderArrow />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="max-w-[1140px] mx-auto my-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-center text-green-700 text-3xl font-semibold mb-12"
        >
          Một số ứng dụng đã triển khai
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto"
        >
          {chatbotApplications.map((app, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-sky-300 rounded-lg p-4 shadow-md flex items-start gap-4 py-8"
            >
              <div className="bg-white rounded-full p-3 shadow">{app.icon}</div>
              <div>
                <h3 className="font-bold text-blue-900 text-lg">{app.title}</h3>
                <p className="text-red-800 text-lg mt-2 line-clamp-3">
                  {app.description}
                </p>
                <a
                  href="#"
                  className="mt-2 text-sm font-medium bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent hover:brightness-110 transition"
                >
                  Tìm hiểu
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex lg:flex-wrap lg:justify-around gap-4 mt-12 flex-col items-center lg:flex-row"
        >
          {chatbotButtons.map((btn, idx) => (
            <motion.a
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={btn.href}
              className="text-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-10 py-4 rounded-lg shadow hover:opacity-90 transition text-center w-[50%] lg:w-auto"
            >
              {btn.label} →
            </motion.a>
          ))}
        </motion.div>

        <div className=" flex flex-col md:flex-row mt-20 justify-center items-start gap-10 px-4">
          {/* Cột trái: Mô tả */}
          <div className="w-full md:w-1/3">
            <h3 className="font-bold text-2xl mb-4 text-[#b13e30]">
              Mẫu GenAI Chatbot tư vấn
            </h3>
            <div className="text-[#236c99] text-base leading-relaxed space-y-3">
              <p>
                Clip này được record từ màn hình hỏi đáp thực tế với Chatbot AI
                của công ty CP bóng đèn phích nước Rạng Đông được huấn luyện
                Giai đoạn 1 bao gồm:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Hơn 200 sản phẩm đèn led, đèn thông minh, thiết bị điều khiển
                  smart home;
                </li>
                <li>Cách sử dụng ứng dụng smart home;</li>
                <li>Thông tin doanh nghiệp;</li>
                <li>Chính sách bảo hành, sửa chữa; chính sách phân phối;</li>
              </ul>
            </div>
          </div>

          {/* Cột phải: Tabs + Video */}
          <div className="w-full md:w-2/3">
            <TabVideo tabs={tabsVideo} />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row mt-20 justify-center items-start gap-10 px-4">
          {/* Cột trái: Mô tả */}
          <div className="w-full md:w-1/3">
            <h3 className="font-bold text-2xl mb-4 text-[#b13e30]">
              Một số giải thích
            </h3>
            <div className="text-[#236c99] text-base leading-relaxed space-y-3">
              <p>
                Các video Clip ở đây sẽ giải thích nhanh giúp bạn một số câu hỏi
                liên quan đến quá trình huấn luyện AI mà chúng tôi cung cấp đến
                khách hàng bao gồm:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Phân biệt giữa Chatbot AI và Chatbot Kịch bản</li>
                <li>
                  Quá trình xây dựng và xử lý dữ liệu chất lượng cao dành cho
                  huấn luyện AI
                </li>
                <li>
                  {" "}
                  Cơ chế hoạt động của ChatbotAI với các hệ thống phần mềm khác.
                </li>
              </ul>
            </div>
          </div>

          {/* Cột phải: Tabs + Video */}
          <div className="w-full md:w-2/3">
            <TabVideo tabs={tabsVideo2} />
          </div>
        </div>
      </motion.section>
      <section className="bg-gradient-to-b from-[#1472da] to-[#a1c8e6] mx-auto pt-10 pb-24 ">
        <h3 className="font-bold text-3xl mb-4 text-white text-center ">
          Tổ chức đã và đang huấn luyện AI
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 px-4 container mx-auto ">
          {groupsCreated.map((group) => (
            <div
              key={group.id}
              className="bg-white p-4 rounded-2xl rounded-tr-none rounded-br-none hover:bg-[#244479] hover:text-white"
            >
              <h2 className="text-amber-600 font-bold">{group.title}</h2>
              <div className="">
                {group.description.map((item) => (
                  <p key={item.id} className="text-sm ">
                    {item.content}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <div className=" flex flex-col items-center">
          <h2 className="font-bold text-4xl mb-4 text-center text-[#102465] ">
            Quá trình huấn luyện
          </h2>
          <div className="">
            <Image
              src="https://mygpt.vn/wp-content/uploads/2024/06/mygpt-train-process-h.jpg"
              alt=""
              width={960}
              height={407}
              className="hidden md:block"
            />
            <Image
              src="https://mygpt.vn/wp-content/uploads/2024/06/mygpt-train-process-v.jpg"
              alt=""
              width={419}
              height={1007}
              className="md:hidden"
            />
          </div>
        </div>
        <div className="lg:container mx-auto ">
          {contentTrainning.map((item) => (
            <TrainningComponent key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section className="mt-12 ">
        <div className="bg-[#0357c8] pt-10">
          <h2 className="text-3xl font-bold text-white text-center">
            Tại sao chọn chúng tôi
          </h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-20">
            {contentWhyMe.map((item) => (
              <div
                className="relative group overflow-hidden rounded-lg h-[400px] "
                key={item.id}
              >
                {/* Ảnh nằm trên overlay */}
                <Image
                  src={item.imgageUrl}
                  height={220}
                  width={219}
                  alt={item.title}
                  className="mx-auto mt-4 relative z-10"
                />

                {/* Nền trắng đổ từ đáy lên nửa thẻ */}
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out opacity-90 z-0" />

                {/* Text nằm trên overlay */}
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-black text-center transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white mt-4 text-center group-hover:text-gray-700 transition-colors duration-300">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src="https://mygpt.vn/wp-content/uploads/2023/09/in-vector1.png"
              alt="Group-2"
              height={523}
              width={1681}
            />
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
}
