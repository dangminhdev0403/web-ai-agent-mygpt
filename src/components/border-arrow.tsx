import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BorderArrow = () => {
  return (
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
  );
};

export default BorderArrow;
