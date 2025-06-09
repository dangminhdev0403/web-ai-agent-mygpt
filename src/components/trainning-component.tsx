"use client";
import BorderArrow from "@/components/border-arrow";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as DOMPurify from "dompurify";

import Image from "next/image";

interface TrainningComponentProps {
  id: string;
  title: string;
  imgageUrl: string;
  isArrow?: boolean;
  content: string;
  smallTitle: string;
  reverse?: boolean;
}
const TrainningComponent = ({ ...props }: TrainningComponentProps) => {
  return (
    <>
      <div
        className={`flex items-center mt-12 mb-20 flex-col md:flex-row  ${
          props.reverse && "md:flex-row-reverse"
        }`}
      >
        <div className="md:w-1/2 md:self-auto">
          <Image
            height={363}
            width={570}
            src={props.imgageUrl}
            alt={props.title}
          />
        </div>
        <div className="md:self-start md:w-1/2 pl-5">
          <div className=" flex items-center gap-20">
            <span className="text-sm text-green-500">{props.smallTitle}</span>
            <div className="w-28 h-0.5 bg-red-500"></div>
          </div>
          <h2 className="text-4xl text-[#652610] font-bold mt-3">
            {props.title}
          </h2>
          <div
            className="max-w-[550px]"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.default.sanitize(props.content),
            }}
          />
        </div>
      </div>
      {props?.isArrow && (
        <BorderArrow
          icon={
            <FontAwesomeIcon icon={faArrowDown} color="#6c8493" size="2xl" />
          }
        />
      )}
    </>
  );
};

export default TrainningComponent;
