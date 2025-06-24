const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-orange-400 mb-4">
              <span className="text-orange-400">MY</span>
              <span className="text-yellow-400">GPT</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Chuyên gia hàng đầu về ứng dụng AI trong doanh nghiệp, mang đến
              giải pháp tối ưu cho mọi lĩnh vực kinh doanh.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Huấn luyện AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tư vấn chiến lược
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Phát triển ứng dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hỗ trợ kỹ thuật
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Công ty</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Về chúng tôi
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tin tức
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Liên hệ</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Email: info@xugpt.vn</p>
              <p>Điện thoại: +84 123 456 789</p>
              <p>Địa chỉ: Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 MYGPT. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
