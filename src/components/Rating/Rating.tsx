"use client";
import { useEffect } from "react";

const Rating = () => {
  useEffect(() => {
    const handleRating = (btn: Element) => {
      const activeBtn = document.querySelector(".rating button.active");
      activeBtn?.classList.remove("active");
      btn.classList.add("active");
    };
    const btns = document.querySelectorAll(".rating button");
    btns.forEach((btn) =>
      btn.addEventListener("click", () => handleRating(btn))
    );
    return () => {
      btns.forEach((btn) =>
        btn.removeEventListener("click", () => handleRating(btn))
      );
    };
  }, []);

  return (
    <div className="my-12 py-6 flex flex-col bg-white rounded-3xl shadow-[0px 1px 3px 0px rgba(18, 18, 23, 0.10), 0px 1px 2px 0px rgba(18, 18, 23, 0.06)]">
      <p className="w-full text-xl font-extrabold text-center">
        Bạn thấy bài viết như thế nào?
      </p>
      <p className="mb-6 text-center font-medium">4 phản hồi</p>
      <div className="rating flex gap-8 justify-center items-center">
        <button className="active">
          <img src="/thumbs-up.png" />
          <div>1</div>
          <span>Hữu ích</span>
        </button>
        <button>
          <img src="/green-heart.png" />
          <div>2</div>
          <span>Yêu thích</span>
        </button>
        <button>
          <img src="/star-struck.png" />
          <div>0</div>
          <span>Thú vị</span>
        </button>
        <button>
          <img src="/hushed-face.png" />
          <div>1</div>
          <span>Bất ngờ</span>
        </button>
        <button>
          <img src="/yawning-face.png" />
          <div>0</div>
          <span>Nhàm chán</span>
        </button>
        <button>
          <img src="/pouting-face.png" />
          <div>0</div>
          <span>Tức giận</span>
        </button>
      </div>
    </div>
  );
};

export default Rating;
