"use client";

import React, { useState } from "react";
import { IconChevronDown } from "@/components/icons/Icons";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: "Tôi có cần phải đặt lịch hẹn trước khi đến nhà may không?",
    answer:
      "Để quý khách có trải nghiệm tốt nhất và không phải chờ đợi, MB VEST khuyến khích quý khách nên đặt hẹn trước qua form liên hệ, gọi điện hoặc nhắn tin Zalo (0904 989 326). Nhờ đó, thợ may chính Mr. Bình sẽ dành riêng thời gian để trực tiếp tư vấn vóc dáng và chuẩn bị sẵn các dòng vải phù hợp với nhu cầu của quý khách.",
  },
  {
    question: "Dịch vụ may đo tận nơi của MB VEST được triển khai như thế nào?",
    answer:
      "Đối với quý khách bận rộn hoặc không thuận tiện di chuyển, Mr. Bình sẽ trực tiếp mang theo thước đo chuyên dụng, bảng swatch vải mẫu (Linen, Wool Ý, Cotton Ai Cập...) đến tận tư gia hoặc văn phòng làm việc của quý khách tại Hà Nội. Quy trình lấy số đo và tư vấn diễn ra hoàn toàn tương tự như tại nhà may.",
  },
  {
    question: "Thời gian hoàn thiện một bộ suit may đo mất bao lâu? Có nhận may gấp không?",
    answer:
      "Thời gian hoàn thiện tiêu chuẩn thường từ 5 đến 10 ngày (bao gồm 1 lần thử phom trung gian - Basting fitting). Trong trường hợp quý khách cần gấp cho ngày cưới hoặc chuyến công tác quan trọng, MB VEST có dịch vụ may ưu tiên hoàn thiện trong vòng 3 đến 5 ngày nhưng vẫn đảm bảo độ tinh xảo tối đa của từng đường kim mũi chỉ.",
  },
  {
    question: "Chính sách bảo hành và chỉnh sửa phom dáng sau khi nhận đồ ra sao?",
    answer:
      "MB VEST cam kết đồng hành cùng trang phục của quý khách trọn đời. Bất cứ khi nào thể trạng của quý khách có sự thay đổi (tăng hoặc giảm cân), quý khách đều có thể mang bộ suit đến xưởng may để được hỗ trợ bóp/nới vòng eo, chỉnh độ dài tay áo hoặc gấu quần hoàn toàn MIỄN PHÍ.",
  },
  {
    question: "Mức giá may đo tại MB VEST đã bao gồm tiền vải hay chưa?",
    answer:
      "Các mức giá được công bố (từ 1.800.000đ cho áo lẻ Jacket, từ 2.500.000đ cho bộ suit 2 mảnh) là mức giá trọn gói đã bao gồm vải tiêu chuẩn cao cấp, toàn bộ phụ liệu dựng phom (lót, mex, khuy sừng...) và công may thủ công. Ngoài ra, quý khách hoàn toàn có thể mang vải riêng đến để MB VEST đo may gia công theo yêu cầu.",
  },
];

export const ContactFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {FAQ_LIST.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border rounded-lg transition-colors overflow-hidden ${
              isOpen ? "border-stone-400 bg-white shadow-xs" : "border-stone-200 bg-stone-50/50 hover:border-stone-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-xs sm:text-sm font-semibold text-stone-900 leading-snug">
                {item.question}
              </span>
              <IconChevronDown
                className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-stone-900" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
