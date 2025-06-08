import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BorderArrowProps = {
  icon?: React.ReactNode;
};

const BorderArrow = ({ icon }: BorderArrowProps) => {
  return (
    <div className="relative w-full flex items-center justify-center my-6">
      {/* Đường gạch bên trái */}
      <div className="border-t border-dotted border-blue-200 w-full absolute left-0 top-1/2 z-0" />

      {/* Icon mũi tên nằm giữa, nổi lên trên */}
      <div className="bg-white px-4 z-10">
        {icon ?? (
          <FontAwesomeIcon icon={faAnglesDown} color="#a4c4fc" size="sm" />
        )}
      </div>
    </div>
  );
};

export default BorderArrow;
