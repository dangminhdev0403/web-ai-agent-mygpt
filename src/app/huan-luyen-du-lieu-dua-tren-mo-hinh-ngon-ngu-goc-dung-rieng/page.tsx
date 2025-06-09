const LMMPage = () => {
  return (
    <main className=" text-[#1a1a1a] mt-10">
      <section className="relative z-40 text-white bg-transparent pt-20  bg-gradient-to-r from-blue-600 to-cyan-500 w-full pb-4 mb-10">
        <h2 className="text-2xl md:text-3xl  text-center ">
          Triển khai mô hình ngôn ngữ dùng riêng - MyGPT
        </h2>
        <p className="text-center text-white">
          Triển khai mô hình ngôn ngữ lớn riêng tư, an toàn và hiệu quả
        </p>
      </section>
      <div className="max-w-5xl mx-auto text-xl">
        <section className="mb-16 mx-auto ">
          <h3 className="text-4xl font-semibold mb-4">Thông tin</h3>
          <ul className="list-disc list-inside text-gray-700 leading-7 space-y-2">
            <li>
              <strong>Mô hình ngôn ngữ lớn:</strong> Llama, Phi, Mistral, Gemma,
              Qwen, DeepSeek và các mô hình nguồn mở khác.
            </li>
            <li>
              <strong>Bộ lọc mô hình khai thác công:</strong> Rút trích 17 tỉ
              token đến 405 tỉ token tuỳ thuộc vào bài toán cụ thể đầu tư.
            </li>
            <li>
              <strong>Sử dụng:</strong> Nhiều tác vụ như Chat nội bộ, Tạo
              pipeline AI, Tạo Embeddings, Nhận dạng ảnh, v.v.
            </li>
            <li>
              <strong>Phạm vi hoạt động:</strong> 100% nội bộ không ra Internet.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h3 className="text-4xl font-semibold mb-4">
            Ước tính yêu cầu phần cứng
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border px-4 py-2">Phần cứng</th>
                  <th className="border px-4 py-2">Cấu hình đề xuất</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">CPU</td>
                  <td className="border px-4 py-2">2-4x E-Cores</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">RAM</td>
                  <td className="border px-4 py-2">256GB</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">SSD</td>
                  <td className="border px-4 py-2">2 × 1.92TB</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">GPU</td>
                  <td className="border px-4 py-2">2 × NVIDIA A100 80GB</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Output token quantization
                  </td>
                  <td className="border px-4 py-2">~2-5x (tuỳ bài toán)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCU</td>
                  <td className="border px-4 py-2">
                    ~15-20 users dùng đồng thời
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Latency</td>
                  <td className="border px-4 py-2">
                    &lt;200ms ~400ms per token
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Giá dự kiến (chưa VAT)</td>
                  <td className="border px-4 py-2">
                    ~700 triệu – 2 tỷ đồng/server
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="mt-4  list-disc list-inside text-gray-700 leading-7">
            <li className="">
              Cấu hình trên được chúng tôi kiểm nghiệm ở chế độ production khi
              vận hành inference cho mô hình ngôn ngữ Llama 3.3 70B Instruct cho
              kết quả phản hồi tạm đủ cho việc triển khai ứng dụng Chat. Với
              những hệ thống có yêu cầu lượng người Chat đồng thời cao hoặc sử
              dụng mô hình nhiều tham số hơn thì cần phải cân nhắc nâng thêm số
              lượng GPU và RAM lên tối thiểu lớn hơn 30% so với tham số mô hình.
            </li>

            <li>
              Trong một số nhiệm vụ khác có thể sử dụng mô hình nhỏ hơn hoặc
              thực hiện quantization để giảm sử dụng VRAM của GPU tuy nhiên việc
              quantization sẽ phức tạp và mất nhiều thời gian vì có thể thay đổi
              chất lượng output của mô hình.
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h3 className="text-4xl font-semibold mb-4">Ưu điểm</h3>
          <ul className="list-disc list-inside text-gray-700 leading-7 space-y-2">
            <li>Triển khai mô hình phục vụ riêng tư trong hệ thống nội bộ.</li>
            <li>Không cần kết nối Internet khi sử dụng Chat nội bộ.</li>
            <li>Toàn quyền kiểm soát và bảo mật dữ liệu đầu vào/ra.</li>
            <li>
              Giảm chi phí sử dụng dài hạn khi mô hình được tinh chỉnh phù hợp.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default LMMPage;
