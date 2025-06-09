// client-components.tsx
"use client";
import { v4 as uuidv4 } from "uuid";

import { BookOpenCheck, MessageSquare, Users2 } from "lucide-react";

export const navHeaders = [
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "LLM Dùng Riêng",
    href: "/huan-luyen-du-lieu-dua-tren-mo-hinh-ngon-ngu-goc-dung-rieng",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "Giá Thành",
    href: "/gia-thanh-trien-khai-va-huan-luyen",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "Blog",
    href: "aa",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "Sức Khoẻ AI",
    href: "1221",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "About Us",
    href: "/ve-chung-toi",
  },
];
export const chatbotApplications = [
  {
    icon: <MessageSquare className="text-green-500 w-8 h-8" />,
    title: "GenAI Chatbot tư vấn",
    description:
      "Ứng dụng làm Chatbot trong tư vấn sản phẩm, dịch vụ, tuyển sinh hoặc hỏi đáp...",
  },
  {
    icon: <BookOpenCheck className="text-green-500 w-8 h-8" />,
    title: "GenAI Chatbot sửa chữa",
    description:
      "Ứng dụng hỏi đáp và tính toán giá thành sửa chữa và dịch vụ gia   đình , xã hội",
  },
  {
    icon: <Users2 className="text-green-500 w-8 h-8" />,
    title: "GenAI Chatbot Dịch vụ công",
    description:
      "Xây dựng hệ thống tư vấn thủ tục hành chính, hỏi đáp văn bản pháp quy...",
  },
];

export const chatbotButtons = [
  { label: "Chat với Rạng Đông", href: "#" },
  { label: "Chat với FUNiX", href: "#" },
  { label: "Tuyển sinh Đại học", href: "#" },
  { label: "Tư vấn SP Ngân hàng", href: "#" },
];

export const tabsVideo = [
  {
    label: "Tư vấn sản phẩm",
    videoId: "eXee5DUKZW0", // ← Thay bằng ID thật
  },
  {
    label: "Trợ lý sản xuất",
    videoId: "KEk8999e8Qg", // ← Thay bằng ID thật
  },
];

export const tabsVideo2 = [
  {
    label: "Chatbot AI và Kịch bản",
    videoId: "eXee5DUKZW0", // ← Thay bằng ID thật
  },
  {
    label: "Xây dựng dữ liệu",
    videoId: "KEk8999e8Qg", // ← Thay bằng ID thật
  },
  {
    label: "Cơ chế hoạt động",
    videoId: "aKBxEScQlH4", // ← Thay bằng ID thật
  },
];
export const groupsCreated = [
  {
    id: new Date().getTime() + Math.random(),
    title: "Funix",
    description: [
      {
        id: new Date().getTime() + Math.random(),
        content: "* Tư vấn lựa chọn khoá học trực tuyến",
      },
    ],
  },
  {
    id: new Date().getTime() + Math.random(),
    title: "Rạng Đông",
    description: [
      {
        id: new Date().getTime() + Math.random(),
        content: "* Tư vấn sản phẩm đèn",
      },
      {
        id: new Date().getTime() + Math.random(),
        content: "* Trợ lý sản xuất bình phích",
      },
      {
        id: new Date().getTime() + Math.random(),
        content: "* Trợ lý kế hoạch sản xuất",
      },
    ],
  },
  {
    id: new Date().getTime() + Math.random(),
    title: "Dauthau.INFO",
    description: [
      {
        id: new Date().getTime() + Math.random(),
        content: "* Tư vấn gói sản phẩm nhận thông tin thầu",
      },
    ],
  },
  {
    id: new Date().getTime() + Math.random(),
    title: "CSMO",
    description: [
      {
        id: new Date().getTime() + Math.random(),
        content: "* Hướng dẫn sự kiện CSMO Summit 2023; 2024",
      },
    ],
  },
  {
    id: new Date().getTime() + Math.random(),
    title: "Abaha \n Jsc,.",
    description: [
      {
        id: new Date().getTime() + Math.random(),
        content: "* Hướng dẫn sử dụng giải pháp Abaha",
      },
    ],
  },
  {
    id: new Date().getTime() + Math.random(),
    title: "Rada Jsc,.",
    description: [
      {
        id: new Date().getTime() + Math.random(),
        content: "* Tư vấn giá sửa chữa",
      },
    ],
  },
  {
    id: new Date().getTime() + Math.random(),
    title: "HomeID \n Jsc,.",
    description: [
      {
        id: new Date().getTime() + Math.random(),
        content: "* Tư vấn phần mềm Quản trị Chung cư",
      },
    ],
  },
  {
    id: new Date().getTime() + Math.random(),
    title: "Vijases \nJsc,.",
    description: [
      {
        id: new Date().getTime() + Math.random(),
        content: "* Tư vấn giải pháp thiết kế chip",
      },
    ],
  },
];

export const contentTrainning = [
  {
    id: (Date.now() + Math.random() + 1).toString(),
    smallTitle: "GenAI Chatbot tư vấn",
    title: "GenAI Chatbot tư vấn",
    imgageUrl: "https://mygpt.vn/wp-content/uploads/2020/11/ftp1.png",
    content: ` <ul className="list-disc list-inside  mt-3 font-bold text-[#0a3651] max-w-[550px] leading-9 ">
                <li>
                  Giải pháp chỉ sử dụng dữ liệu riêng của Tổ chức và Doanh
                  nghiệp phục vụ mục đích riêng và các ứng dụng trong các hoạt
                  động hàng ngày.
                </li>
                <li>
                  Dữ liệu AI đã được huấn luyện tăng cường nằm trên hệ thống cơ
                  sở dữ liệu riêng dành phục vụ trực tiếp cho các ứng dụng nội
                  bộ, các phần mềm tác nghiệp hoặc các phần mềm dịch vụ.
                </li>
                <li>
                  Kết hợp giữa dữ liệu riêng của tổ chức và kiến thức tổng hợp
                  của các mô mình ngôn ngữ lớn nhằm tạo nên một nhân viên toàn
                  năng phục vụ hoạt động sản xuất kinh doanh.
                </li>
              </ul>`,
    isArrow: true,
    reverse: false,
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    smallTitle: "GenAI Chatbot tư vấn",
    title: "GenAI Chatbot tư vấn",
    imgageUrl: "https://mygpt.vn/wp-content/uploads/2020/11/ftp1.png",
    content: ` <ul className="list-disc list-inside  mt-3 font-bold text-[#0a3651] max-w-[550px] leading-9 ">
                <li>
                  Giải pháp chỉ sử dụng dữ liệu riêng của Tổ chức và Doanh
                  nghiệp phục vụ mục đích riêng và các ứng dụng trong các hoạt
                  động hàng ngày.
                </li>
                <li>
                  Dữ liệu AI đã được huấn luyện tăng cường nằm trên hệ thống cơ
                  sở dữ liệu riêng dành phục vụ trực tiếp cho các ứng dụng nội
                  bộ, các phần mềm tác nghiệp hoặc các phần mềm dịch vụ.
                </li>
                <li>
                  Kết hợp giữa dữ liệu riêng của tổ chức và kiến thức tổng hợp
                  của các mô mình ngôn ngữ lớn nhằm tạo nên một nhân viên toàn
                  năng phục vụ hoạt động sản xuất kinh doanh.
                </li>
              </ul>`,
    isArrow: true,
    reverse: true,
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    smallTitle: "GenAI Chatbot tư vấn",
    title: "GenAI Chatbot tư vấn",
    imgageUrl: "https://mygpt.vn/wp-content/uploads/2020/11/ftp1.png",
    content: ` <ul className="list-disc list-inside  mt-3 font-bold text-[#0a3651] max-w-[550px] leading-9 ">
                <li>
                  Giải pháp chỉ sử dụng dữ liệu riêng của Tổ chức và Doanh
                  nghiệp phục vụ mục đích riêng và các ứng dụng trong các hoạt
                  động hàng ngày.
                </li>
                <li>
                  Dữ liệu AI đã được huấn luyện tăng cường nằm trên hệ thống cơ
                  sở dữ liệu riêng dành phục vụ trực tiếp cho các ứng dụng nội
                  bộ, các phần mềm tác nghiệp hoặc các phần mềm dịch vụ.
                </li>
                <li>
                  Kết hợp giữa dữ liệu riêng của tổ chức và kiến thức tổng hợp
                  của các mô mình ngôn ngữ lớn nhằm tạo nên một nhân viên toàn
                  năng phục vụ hoạt động sản xuất kinh doanh.
                </li>
              </ul>`,
    isArrow: false,
    reverse: false,
  },
];

export const contentWhyMe = [
  {
    id: (Date.now() + Math.random() + 1).toString(),
    imgageUrl: "https://mygpt.vn/wp-content/uploads/2023/09/sin1.png",
    title: "Hạ tầng tính toán",
    content:
      "Chúng tôi là một liên minh có thể cung cấp cho bạn một hạ tầng tính toán mạnh để có khai thác cơ sở tri thức riêng của bạn dựa trên dữ liệu lớn",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    imgageUrl: "https://mygpt.vn/wp-content/uploads/2023/09/sin2.png",

    title: "Giải pháp ứng dụng",
    content:
      "Với kinh nghiệm xây dựng hàng trăm ứng dụng nghiệp vụ khác nhau, chúng tôi sẽ cùng các bạn phân tích bài toán cụ thể và ứng dụng theo nhu cầu",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    imgageUrl: "https://mygpt.vn/wp-content/uploads/2023/09/sin3.png",

    title: "Hiểu về dữ liệu",
    content:
      "Chúng tôi đã thực hiện số hoá hàng trăm triệu tài liệu và hiểu cần phải làm gì tiếp theo chứ không đơn giản chỉ phục vụ việc lưu trữ và tra cứu theo metadata và các từ khoá!",
  },
];
export const investorCreate = [
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "Rạng Đông",
    imageUrl: "https://mygpt.vn/wp-content/uploads/2024/07/rdphick-logo-56.png",
    description:
      "Chatbot tư vấn sản xuất; Chatbot kế hoạch tại nhà máy bình phích thuỷ tinh",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "FUNiX",
    imageUrl: "https://mygpt.vn/wp-content/uploads/2024/07/funix-logo.png",
    description:
      "Chatbot tư vấn sản xuất; Chatbot kế hoạch tại nhà máy bình phích thuỷ tinh",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "Dauthau.INFO",
    imageUrl: "https://mygpt.vn/wp-content/uploads/2024/07/logo-chat-55.png",
    description:
      "Chatbot tư vấn sản xuất; Chatbot kế hoạch tại nhà máy bình phích thuỷ tinh",
  },
  {
    id: (Date.now() + Math.random() + 1).toString(),
    label: "HomeID",
    imageUrl: "https://mygpt.vn/wp-content/uploads/2024/07/homeid-logo.png",
    description:
      "Chatbot tư vấn sản xuất; Chatbot kế hoạch tại nhà máy bình phích thuỷ tinh",
  },
];
export const soldAI = [
  {
    id: uuidv4(),
    title: "Theo nhiệm vụ",
    list: [
      {
        id: uuidv4(),
        label: "Chatbot trực page chốt đơn",
        description:
          "Chatbot tư vấn sản xuất; Chatbot kế hoạch tại nhà máy bình phích thuỷ tinh",
      },
    ],
  },
];
