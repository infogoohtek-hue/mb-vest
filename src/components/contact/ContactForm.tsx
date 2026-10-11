"use client";

import React, { useState } from "react";
import { IconCheck, IconPhone, IconScissors, IconMapPin, IconChat } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  fittingType: "atelier" | "doorstep";
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

const SERVICE_OPTIONS = [
  { id: "suit-2", label: "Bộ Suit 2 Mảnh", hint: "Từ 2.500.000đ" },
  { id: "suit-3", label: "Bộ Suit 3 Mảnh", hint: "Từ 3.300.000đ" },
  { id: "jacket", label: "Áo Lẻ (Jacket / Blazer)", hint: "Từ 1.800.000đ" },
  { id: "wedding", label: "Vest Cưới & Tuxedo", hint: "May đo chú rể" },
  { id: "consult", label: "Tư Vấn Chọn Vải Linen / Len", hint: "Xem mẫu vải" },
];

const TIME_SLOTS = [
  { id: "morning", label: "Buổi Sáng", time: "08:30 – 12:00" },
  { id: "afternoon", label: "Buổi Chiều", time: "13:30 – 17:30" },
  { id: "evening", label: "Buổi Tối", time: "18:00 – 21:00" },
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "suit-2",
    fittingType: "atelier",
    preferredDate: "",
    preferredTime: "afternoon",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim()) {
      setErrorMsg("Vui lòng nhập họ và tên của quý khách.");
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg("Vui lòng cung cấp số điện thoại hoặc Zalo hợp lệ để Mr. Bình liên hệ.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury appointment booking handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      serviceType: "suit-2",
      fittingType: "atelier",
      preferredDate: "",
      preferredTime: "afternoon",
      notes: "",
    });
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-stone-200 rounded-lg p-8 sm:p-12 text-center shadow-sm animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 flex items-center justify-center mx-auto mb-6">
          <IconCheck className="w-8 h-8" />
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-bold">
          ĐÃ TIẾP NHẬN YÊU CẦU
        </p>
        <h3 className="font-heading text-2xl sm:text-3xl text-stone-900 mt-2 mb-4 font-normal">
          Cảm ơn quý khách, {formData.fullName}!
        </h3>

        <p className="max-w-lg mx-auto text-sm text-stone-600 leading-relaxed mb-6">
          Mr. Bình (Thợ may chính tại MB VEST) đã nhận được thông tin hẹn lịch của quý khách. 
          Chúng tôi sẽ chủ động gọi điện hoặc nhắn tin Zalo qua số{" "}
          <strong className="text-stone-900 font-semibold">{formData.phone}</strong> trong thời gian sớm nhất 
          để xác nhận lịch và chuẩn bị sẵn mẫu vải phù hợp.
        </p>

        <div className="bg-[#f7f5f0] border border-stone-200 rounded-md p-5 max-w-md mx-auto text-left mb-8 space-y-2 text-xs text-stone-700">
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-[10px] font-semibold">Dịch vụ may đo:</span>
            <span className="font-bold text-stone-900">
              {SERVICE_OPTIONS.find((s) => s.id === formData.serviceType)?.label || formData.serviceType}
            </span>
          </div>
          <div className="flex justify-between border-b border-stone-200 py-2">
            <span className="text-stone-500 uppercase tracking-wider text-[10px] font-semibold">Hình thức:</span>
            <span className="font-bold text-stone-900">
              {formData.fittingType === "atelier" ? "Ghé xưởng may MB VEST" : "Thợ đến đo tận nơi"}
            </span>
          </div>
          {formData.preferredDate && (
            <div className="flex justify-between pt-1">
              <span className="text-stone-500 uppercase tracking-wider text-[10px] font-semibold">Thời gian dự kiến:</span>
              <span className="font-bold text-stone-900">
                {formData.preferredDate} ({TIME_SLOTS.find((t) => t.id === formData.preferredTime)?.label})
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://zalo.me/0904989326?text=${encodeURIComponent(
              `Xin chào Mr. Bình, tôi là ${formData.fullName} vừa đăng ký hẹn lịch may đo ${
                SERVICE_OPTIONS.find((s) => s.id === formData.serviceType)?.label
              }. SĐT của tôi: ${formData.phone}`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0068FF] hover:bg-[#0052cc] text-white px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <IconChat className="w-4 h-4" />
            <span>Xác nhận nhanh qua Zalo</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center text-xs font-semibold text-stone-600 hover:text-stone-900 px-6 py-3.5 border border-stone-300 rounded hover:bg-stone-50 transition-colors uppercase tracking-wider"
          >
            Đặt lịch hẹn khác
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-stone-200/90 rounded-lg p-6 sm:p-10 shadow-sm space-y-8"
      noValidate
    >
      <div className="border-b border-stone-100 pb-5">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5a880]">
          ĐẶT HẸN TƯ VẤN 1-1 CÙNG MR. BÌNH
        </span>
        <h3 className="font-heading text-2xl sm:text-3xl text-stone-900 font-normal mt-1">
          Phiếu Đăng Ký May Đo & Chọn Vải
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 mt-2 leading-relaxed">
          Quý khách vui lòng cung cấp thông tin bên dưới để MB VEST chuẩn bị catalogue vải và dành riêng khung giờ tiếp đón chu đáo nhất.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded font-medium flex items-center gap-2 animate-shake">
          <span>⚠️</span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* 1. Personal Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-fullname" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
            Họ và tên quý khách <span className="text-amber-800">*</span>
          </label>
          <input
            id="contact-fullname"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Ví dụ: Nguyễn Văn An"
            className="w-full text-xs sm:text-sm p-3.5 border border-stone-300 rounded focus:border-stone-900 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
            Số điện thoại / Zalo <span className="text-amber-800">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Ví dụ: 0904 989 326"
            className="w-full text-xs sm:text-sm p-3.5 border border-stone-300 rounded focus:border-stone-900 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* 2. Tailoring Service Options */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2.5">
          Gói may đo quý khách quan tâm
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICE_OPTIONS.map((opt) => {
            const isSelected = formData.serviceType === opt.id;
            return (
              <button
                type="button"
                key={opt.id}
                onClick={() => setFormData({ ...formData, serviceType: opt.id })}
                className={`p-3.5 text-left rounded border transition-all text-xs flex flex-col justify-between ${
                  isSelected
                    ? "border-stone-900 bg-stone-900 text-white shadow-xs"
                    : "border-stone-200 hover:border-stone-400 bg-stone-50/50 text-stone-800"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-semibold text-xs">{opt.label}</span>
                  {isSelected && <IconCheck className="w-3.5 h-3.5 text-amber-300" />}
                </div>
                <span className={`text-[10px] ${isSelected ? "text-amber-300" : "text-stone-500"}`}>
                  {opt.hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Meeting Format / Fitting Location */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2.5">
          Hình thức tư vấn & lấy số đo
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, fittingType: "atelier" })}
            className={`p-4 rounded border text-left flex items-start gap-3 transition-all ${
              formData.fittingType === "atelier"
                ? "border-amber-700 bg-amber-50/40 text-stone-900 ring-1 ring-amber-700"
                : "border-stone-200 hover:border-stone-300 bg-white text-stone-700"
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              formData.fittingType === "atelier" ? "bg-amber-900 text-white" : "bg-stone-100 text-stone-600"
            }`}>
              <IconScissors className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide">Ghé thăm xưởng may MB VEST</p>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                Trực tiếp xem hàng trăm mẫu vải Linen, Wool Ý & không gian thử đồ riêng tư tại Hà Nội.
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setFormData({ ...formData, fittingType: "doorstep" })}
            className={`p-4 rounded border text-left flex items-start gap-3 transition-all ${
              formData.fittingType === "doorstep"
                ? "border-amber-700 bg-amber-50/40 text-stone-900 ring-1 ring-amber-700"
                : "border-stone-200 hover:border-stone-300 bg-white text-stone-700"
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              formData.fittingType === "doorstep" ? "bg-amber-900 text-white" : "bg-stone-100 text-stone-600"
            }`}>
              <IconMapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide">Dịch vụ may đo tận nơi</p>
              <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                Mr. Bình mang catalogue vải đến tận tư gia hoặc cơ quan của quý khách tại Hà Nội.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* 4. Date and Time Slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-date" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
            Ngày hẹn dự kiến (Tùy chọn)
          </label>
          <input
            id="contact-date"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full text-xs sm:text-sm p-3.5 border border-stone-300 rounded focus:border-stone-900 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
            Khung giờ thuận tiện
          </label>
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => {
              const isSelected = formData.preferredTime === slot.id;
              return (
                <button
                  type="button"
                  key={slot.id}
                  onClick={() => setFormData({ ...formData, preferredTime: slot.id })}
                  className={`p-2.5 text-center rounded border text-xs transition-colors ${
                    isSelected
                      ? "border-stone-900 bg-stone-900 text-white font-bold"
                      : "border-stone-200 hover:border-stone-300 bg-white text-stone-700"
                  }`}
                >
                  <span className="block text-[11px]">{slot.label}</span>
                  <span className={`block text-[9px] mt-0.5 ${isSelected ? "text-stone-300" : "text-stone-400"}`}>
                    {slot.time}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. Notes / Style preferences */}
      <div>
        <label htmlFor="contact-notes" className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
          Ghi chú thêm về dịp mặc, phom dáng hoặc yêu cầu đặc biệt
        </label>
        <textarea
          id="contact-notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Ví dụ: Tôi cần may suit cưới cho ngày 25 tháng sau, vóc dáng hơi đậm người, muốn loại vải thoáng mát ít nhăn..."
          className="w-full text-xs sm:text-sm p-3.5 border border-stone-300 rounded focus:border-stone-900 focus:outline-none transition-colors placeholder:text-stone-400 resize-none"
        />
      </div>

      {/* 6. Submit Button & Fast Action */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <IconPhone className="w-4 h-4 text-amber-800 shrink-0" />
          <span>Cần hỗ trợ gấp? Gọi ngay <a href="tel:0904989326" className="font-bold text-stone-900 hover:underline">0904 989 326</a></span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full sm:w-auto bg-stone-950 hover:bg-black text-white px-8"
        >
          GỬI YÊU CẦU ĐẶT HẸN
        </Button>
      </div>
    </form>
  );
};
