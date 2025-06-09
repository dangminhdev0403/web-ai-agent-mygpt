import { HeroSection } from "@/components/Layouts";
import { PackageCard } from "@/components/ui/package-card";

const CostPricePage = () => {
  return (
    <main className=" text-[#1a1a1a] mt-10 ">
      <HeroSection
        title="Giá thành thuê Hệ thống AI & Dịch vụ xử lý dữ liệu - MyGPT"
        description="Giá thành thuê Hệ thống AI & Dịch vụ xử lý dữ liệu
"
      />
      <div className="py-20">
        <section className="max-w-6xl mx-auto text-xl ">
          <h2 className="text-3xl text-center font-semibold mb-4 text-shadow-blue-600 ">
            Hệ thống AI
          </h2>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#1b528b] underline">
              Theo nhiệm vụ
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <PackageCard
                title="Chatbot trực page chốt đơn"
                subtitle="Gói tiêu chuẩn 1 sản phẩm"
                price="20.500.000đ/năm"
                tasks={[
                  "Trả lời thông tin về 1 sản phẩm",
                  "Ghi nhận yêu cầu đặt hàng của người dùng sang GoogleSheet",
                ]}
                features={[
                  "Trả lời Inbox Fanpage FB",
                  "GPT4o mini",
                  "Chat không giới hạn token",
                  "Hỗ trợ kỹ thuật trong giờ hành chính",
                ]}
                notes={["→ Trọn gói"]}
                bgColor="bg-gradient-to-br from-green-50 to-green-100"
                borderColor="border-orange-300"
                description="* Phù hợp với các cá nhân, công ty nhỏ kinh doanh 1 sản phẩm qua hình thức chạy quảng cáo Facebook và nhận đơn hàng."
              />

              <PackageCard
                title="Chatbot trực page chốt đơn"
                subtitle="Gói 20 sản phẩm"
                price="25.500.000đ/năm"
                tasks={[
                  "Trả lời thông tin đến 20 sản phẩm",
                  "Ghi nhận yêu cầu đặt hàng của người dùng sang GoogleSheet",
                ]}
                features={[
                  "Trả lời Inbox Fanpage FB",
                  "GPT4o mini",
                  "Chat không giới hạn token",
                  "Hỗ trợ kỹ thuật trong giờ hành chính",
                ]}
                notes={["→ Trọn gói"]}
                bgColor="bg-gradient-to-br from-cyan-50 to-cyan-100"
                borderColor="border-cyan-300"
                description="* Phù hợp với các cá nhân, công ty nhỏ kinh doanh 1 sản phẩm qua hình thức chạy quảng cáo Facebook và nhận đơn hàng."
              />

              <PackageCard
                title="Chatbot Giải đáp tuyển sinh"
                subtitle="Gói tiêu chuẩn"
                setupFee="300.000.000đ/lần"
                maintenanceFee="5.600.000đ/tháng"
                tasks={[]}
                features={[
                  "1 tài liệu giới thiệu nhà trường",
                  "1 bộ giới thiệu, ban ngành, khoa và các chương trình đào tạo",
                  "1 bộ đề án tuyển sinh",
                  "1 tài liệu chỉ dẫn hồ sơ và dự tuyển",
                  "GPT4o mini",
                  "Chat không giới hạn token",
                  "Client: Website, Fanpage, Zalo OA",
                  "Hỗ trợ kỹ thuật trong giờ hành chính",
                ]}
                notes={[
                  "→ Năm đầu tiên: Miễn phí",
                  "→ Năm tiếp theo: 10% giá trị hợp đồng",
                ]}
                bgColor="bg-gradient-to-br from-teal-50 to-teal-100"
                borderColor="border-teal-300"
                description="* Phù hợp với các trường Đại học, Cao đẳng có quy mô tuyển sinh từ 3.000-15.000 sinh viên/năm"
              />
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-[#1b528b] underline">
              Theo công nghệ
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <PackageCard
                title="Q&A Chat"
                subtitle="Gói tiêu chuẩn"
                setupFee="65.000.000đ/lần"
                maintenanceFee="1.600.000đ/tháng"
                tasks={[]}
                features={[
                  "1 tài liệu giới thiệu nhà trường",
                  "1 bộ giới thiệu, ban ngành, khoa và các chương trình đào tạo",
                  "1 bộ đề án tuyển sinh",
                  "1 tài liệu chỉ dẫn hồ sơ và dự tuyển",
                  "GPT4o mini",
                  "Chat không giới hạn token",
                  "Client: Website, Fanpage, Zalo OA",
                  "Hỗ trợ kỹ thuật trong giờ hành chính",
                ]}
                notes={["⇾ Đã bao gồm"]}
                bgColor="bg-gradient-to-br from-cyan-50 to-cyan-100"
                borderColor="border-teal-300"
                description="* Phù hợp với tổ chức, doanh nghiệp triển khai Chatbot hỏi đáp thông tin về tổ chức, sản phẩm, dịch vụ"
              />
              <PackageCard
                title="KB Chat"
                subtitle="Gói tiêu chuẩn"
                setupFee="65.000.000đ/lần"
                maintenanceFee="1.600.000đ/tháng"
                tasks={[]}
                features={[
                  "1 tài liệu giới thiệu nhà trường",
                  "1 bộ giới thiệu, ban ngành, khoa và các chương trình đào tạo",
                  "1 bộ đề án tuyển sinh",
                  "1 tài liệu chỉ dẫn hồ sơ và dự tuyển",
                  "GPT4o mini",
                  "Chat không giới hạn token",
                  "Client: Website, Fanpage, Zalo OA",
                  "Hỗ trợ kỹ thuật trong giờ hành chính",
                ]}
                notes={["⇾ Đã bao gồm"]}
                bgColor="bg-gradient-to-br from-teal-50 to-teal-100"
                borderColor="border-teal-300"
                description="* Phù hợp với tổ chức, doanh nghiệp triển khai Chatbot hỏi đáp thông tin về tổ chức, sản phẩm, dịch vụ"
              />
              <PackageCard
                title="Multi Agent Chat"
                subtitle="Gói tiêu chuẩn"
                setupFee="65.000.000đ/lần"
                maintenanceFee="1.600.000đ/tháng"
                tasks={[]}
                features={[
                  "1 tài liệu giới thiệu nhà trường",
                  "1 bộ giới thiệu, ban ngành, khoa và các chương trình đào tạo",
                  "1 bộ đề án tuyển sinh",
                  "1 tài liệu chỉ dẫn hồ sơ và dự tuyển",
                  "GPT4o mini",
                  "Chat không giới hạn token",
                  "Client: Website, Fanpage, Zalo OA",
                  "Hỗ trợ kỹ thuật trong giờ hành chính",
                ]}
                notes={["⇾ Đã bao gồm"]}
                bgColor="bg-gradient-to-bl from-cyan-50 to-yellow-100"
                borderColor="border-yellow-200"
                description="* Phù hợp với tổ chức, doanh nghiệp triển khai Chatbot hỏi đáp thông tin về tổ chức, sản phẩm, dịch vụ"
              />
            </div>
          </div>
          <div className="my-4">
            <p className="text-sm">
              {" "}
              <span className="font-bold text-[#036]"> ➠ Phí khởi tạo</span>:
              Bao gồm thiết lập hệ thống, hiệu chỉnh theo nhiệm vụ, triển khai
              lên hệ thống đích và chi phí dịch vụ Xử lý dữ liệu huấn luyện AI
              trọn gói
            </p>
            <p className="text-sm">
              <span className="font-bold text-[#036]">➠ Knowledge Base</span>:
              Tài liệu về một lĩnh vực nào đó trong tổ chức, ví dụ như Quy định
              về Nhân sự; Tài liệu về Tài chính; Tài liệu nghiệp vụ….
            </p>
            <p className="text-sm">
              <span className="font-bold text-[#036]">➠ Agent</span>: Tương tự
              như một tác nhân thực hiện nhiệm vụ nào đó trước khi đưa kết quả
              đến người dùng.
            </p>
            <p className="text-sm">
              <span className="font-bold text-[#036]"> ➠ Zalo OA</span>: Yêu cầu
              các tài khoản OA nâng cao có đóng phí sử dụng để gửi tin nhắn trả
              lời qua API.
            </p>
          </div>
        </section>
        <section className="max-w-6xl mx-auto text-xl mt-10">
          <h2 className="text-3xl text-center font-semibold mb-4 text-shadow-blue-600 ">
            Dịch vụ Xử lý dữ liệu huấn luyện AI
          </h2>
          <div>
            <p className="text-sm">
              {" "}
              <span className="font-bold text-[#036]"> ➠ </span>Xử lý dữ liệu
              huấn luyện AI là quá trình chuyển hoá từ nguồn{" "}
              <span className="font-bold text-[#036]">“Dữ liệu đầu vào”</span>{" "}
              do tổ chức cung cấp thành{" "}
              <span className="font-bold text-[#036]">
                “Dữ liệu huấn luyện”
              </span>{" "}
              nhằm đảm bảo tính chính xác, rõ ràng, dễ hiểu, đầy đủ và có cấu
              trúc phù hợp với nhiệm vụ của AI.
            </p>
            <p className="text-sm">
              {" "}
              <span className="font-bold text-[#036]"> ➠ </span> Dữ liệu thô nếu
              không qua xử lý khi đưa vào ứng dụng có thể gây lú, lẫn và tạo ra
              kết quả sai không như mong muốn.
            </p>
          </div>
          <div className="grid md:grid-cols-2  gap-6 max-w-7xl mx-auto my-10">
            <PackageCard
              title="Xử lý dữ liệu phẳng"
              unitFree="450.000đ/đơn vị tri thức"
              features={[
                "Tư vấn thu thập & làm sạch",
                "Trích xuất thông tin",
                "Giảm chiều dữ liệu",
                "Phân tích làm giầu thông tinh",
                "Cân bằng dữ liệu giữa các đơn vị tri thức",
                "Biểu diễn dữ liệu theo logic xử lý của phần mềm",
                "Đánh nhãn dữ liệu",
                "Hiệu chỉnh từ phản hồi",
              ]}
              bgColor="bg-gradient-to-br from-green-50 to-green-100"
              borderColor="border-green-300"
              description="* Phù hợp với tổ chức, doanh nghiệp có dữ liệu đầu vào phẳng, có sự độc lập tương đối giữa các đơn vị thông tin với nhau"
            />
            <PackageCard
              title="Xử lý dữ liệu có cấu trúc"
              unitFree="850.000đ/đơn vị tri thức"
              features={[
                "Tư vấn thu thập & làm sạch",
                "Trích xuất thông tin",
                "Giảm chiều dữ liệu",
                "Phân tích làm giầu thông tinh",
                "Cân bằng dữ liệu giữa các đơn vị tri thức",
                "Biểu diễn dữ liệu theo logic xử lý của phần mềm",
                "Đánh nhãn dữ liệu",
                "Hiệu chỉnh từ phản hồi",
              ]}
              bgColor="bg-gradient-to-br from-blue-50 to-yellow-100"
              borderColor="border-green-300"
              description="* Phù hợp với tổ chức, doanh nghiệp có dữ liệu đầu vào phức tạp, dữ liệu có tính liên kết và yêu cầu có cấu trúc đặc biệt phục vụ cho xử lý của AI."
            />
          </div>
          <div>
            <p className="text-sm">
              {" "}
              <span className="font-bold text-[#036]">
                {" "}
                ➠ Đơn vị tri thức:{" "}
              </span>{" "}
              là 1 khối thông tin nhỏ, nhất độc lập đã được xử lý và biểu diễn
              hoàn chỉnh để sẵn sàng đưa vào huấn luyện AI; 1 đơn vị tri thức có
              thể có độ dài từ vài trăm đến vài/chục nghìn ký tự tuỳ thuộc mục
              đích và nhiệm vụ mà AI thực hiện; Với một nguồn dữ liệu đầu vào có
              thể có nhiều đơn vị tri thức đầu ra khác nhau được trích xuất.
            </p>
            <p className=" text-gray-400 mt-20 text-sm">
              Ghi chú: Giá thành trên mang tính tham khảo, giá thực tế có thể
              thay đổi tuỳ theo tính chất của ứng dụng được triển khai trong
              thực tế!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CostPricePage;
