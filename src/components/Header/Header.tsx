import "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header flex items-center w-[80rem] mx-auto pl-[9.375rem] pr-9 py-3 rounded-full z-10 fixed top-6 left-[50%] translate-x-[-50%]">
      <Link href="/">
        <img src="/logo.png" alt="Logo Foso" className="w-[134px]" />
      </Link>
      <ul className="flex-1 mx-16 flex items-center gap-2">
        <li>
          <Link href="/" className="nav-link">
            <span>Về chúng tôi</span>
          </Link>
        </li>
        <li>
          <div className="nav-link dropdown-menu">
            <span>Giải pháp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M13.854 7.05876L8.85403 12.0588C8.80759 12.1052 8.75245 12.1421 8.69175 12.1673C8.63105 12.1924 8.56599 12.2054 8.50028 12.2054C8.43457 12.2054 8.36951 12.1924 8.30881 12.1673C8.24811 12.1421 8.19296 12.1052 8.14653 12.0588L3.14653 7.05876C3.05271 6.96494 3 6.83769 3 6.70501C3 6.57232 3.05271 6.44508 3.14653 6.35125C3.24035 6.25743 3.3676 6.20473 3.50028 6.20473C3.63296 6.20473 3.76021 6.25743 3.85403 6.35125L8.50028 10.9981L13.1465 6.35125C13.193 6.3048 13.2481 6.26795 13.3088 6.24281C13.3695 6.21767 13.4346 6.20473 13.5003 6.20473C13.566 6.20473 13.631 6.21767 13.6917 6.24281C13.7524 6.26795 13.8076 6.3048 13.854 6.35125C13.9005 6.39771 13.9373 6.45286 13.9625 6.51356C13.9876 6.57425 14.0006 6.63931 14.0006 6.70501C14.0006 6.7707 13.9876 6.83576 13.9625 6.89645C13.9373 6.95715 13.9005 7.0123 13.854 7.05876Z"
                fill="#25272A"
              />
            </svg>
            <ul className="dropdown-list hidden">
              <li>
                <Link href={"/"}>Giải pháp 1</Link>
              </li>
              <li>
                <Link href={"/"}>Giải pháp 2</Link>
              </li>
              <li>
                <Link href={"/"}>Giải pháp 3</Link>
              </li>
              <li>
                <Link href={"/"}>Giải pháp 4</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="nav-link dropdown-menu">
            <span>Tài nguyên</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M13.854 7.05876L8.85403 12.0588C8.80759 12.1052 8.75245 12.1421 8.69175 12.1673C8.63105 12.1924 8.56599 12.2054 8.50028 12.2054C8.43457 12.2054 8.36951 12.1924 8.30881 12.1673C8.24811 12.1421 8.19296 12.1052 8.14653 12.0588L3.14653 7.05876C3.05271 6.96494 3 6.83769 3 6.70501C3 6.57232 3.05271 6.44508 3.14653 6.35125C3.24035 6.25743 3.3676 6.20473 3.50028 6.20473C3.63296 6.20473 3.76021 6.25743 3.85403 6.35125L8.50028 10.9981L13.1465 6.35125C13.193 6.3048 13.2481 6.26795 13.3088 6.24281C13.3695 6.21767 13.4346 6.20473 13.5003 6.20473C13.566 6.20473 13.631 6.21767 13.6917 6.24281C13.7524 6.26795 13.8076 6.3048 13.854 6.35125C13.9005 6.39771 13.9373 6.45286 13.9625 6.51356C13.9876 6.57425 14.0006 6.63931 14.0006 6.70501C14.0006 6.7707 13.9876 6.83576 13.9625 6.89645C13.9373 6.95715 13.9005 7.0123 13.854 7.05876Z"
                fill="#25272A"
              />
            </svg>
            <ul className="dropdown-list hidden">
              <li>
                <Link href={"/"}>Tài nguyên 1</Link>
              </li>
              <li>
                <Link href={"/"}>Tài nguyên 2</Link>
              </li>
              <li>
                <Link href={"/"}>Tài nguyên 3</Link>
              </li>
              <li>
                <Link href={"/"}>Tài nguyên 4</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/" className="nav-link">
            <span>Liên hệ</span>
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <div className="dropdown-menu flex items-center px-3 py-2 bg-linear-(--change-language-bg) rounded-full border border-[rgba(9,9,11,0.05)]">
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g clipPath="url(#clip0_37_353)">
              <path
                d="M12.5 24.705C19.1274 24.705 24.5 19.3324 24.5 12.705C24.5 6.07758 19.1274 0.705002 12.5 0.705002C5.87258 0.705002 0.5 6.07758 0.5 12.705C0.5 19.3324 5.87258 24.705 12.5 24.705Z"
                fill="#D80027"
              />
              <path
                d="M12.4995 6.96587L13.7946 10.9516H17.9855L14.595 13.4149L15.89 17.4007L12.4995 14.9373L9.10908 17.4007L10.4041 13.4149L7.01367 10.9516H11.2045L12.4995 6.96587Z"
                fill="#FFDA44"
              />
            </g>
            <defs>
              <clipPath id="clip0_37_353">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5 0.705002)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="mr-1 text-sm font-medium">VI</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M14.0306 7.23563L9.0306 12.2356C8.96092 12.3056 8.87813 12.361 8.78696 12.3989C8.6958 12.4367 8.59806 12.4562 8.49935 12.4562C8.40064 12.4562 8.3029 12.4367 8.21173 12.3989C8.12057 12.361 8.03778 12.3056 7.9681 12.2356L2.9681 7.23563C2.8272 7.09473 2.74805 6.90364 2.74805 6.70438C2.74805 6.50512 2.8272 6.31403 2.9681 6.17313C3.10899 6.03223 3.30009 5.95308 3.49935 5.95308C3.69861 5.95308 3.8897 6.03223 4.0306 6.17313L8.49997 10.6425L12.9693 6.1725C13.1102 6.03161 13.3013 5.95245 13.5006 5.95245C13.6999 5.95245 13.891 6.03161 14.0318 6.1725C14.1727 6.3134 14.2519 6.5045 14.2519 6.70375C14.2519 6.90301 14.1727 7.09411 14.0318 7.235L14.0306 7.23563Z"
              fill="#25272A"
            />
          </svg>
          <ul className="dropdown-list hidden">
            <li>
              <Link href={"/"}>
                <img src="/vietnam.png" alt="Vietnam Flag" />
                Tiếng Việt
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <img src="/united-kingdom.png" alt="United Kingdom Flag" />
                English
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <img src="/china.png" alt="China Flag" />
                Chinese
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <img src="/japan.png" alt="Japan Flag" />
                Japanese
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="be-customer flex px-3 py-2 gap-3 rounded-full border border-[#a3eed6]"
        >
          <span className="pt-0.25 text-[#052B1E] font-bold text-sm">
            Trở thành khách hàng
          </span>
          <div className="flex w-fit p-1 rounded-full bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.4377 4.205V9.8925C11.4377 10.0085 11.3916 10.1198 11.3096 10.2019C11.2276 10.2839 11.1163 10.33 11.0002 10.33C10.8842 10.33 10.7729 10.2839 10.6909 10.2019C10.6088 10.1198 10.5627 10.0085 10.5627 9.8925V5.26102L4.30977 11.5145C4.22768 11.5966 4.11634 11.6427 4.00024 11.6427C3.88415 11.6427 3.7728 11.5966 3.69071 11.5145C3.60862 11.4324 3.5625 11.3211 3.5625 11.205C3.5625 11.0889 3.60862 10.9776 3.69071 10.8955L9.94423 4.6425H5.31274C5.19671 4.6425 5.08543 4.59641 5.00338 4.51436C4.92134 4.43231 4.87524 4.32103 4.87524 4.205C4.87524 4.08897 4.92134 3.97769 5.00338 3.89564C5.08543 3.8136 5.19671 3.7675 5.31274 3.7675H11.0002C11.1163 3.7675 11.2276 3.8136 11.3096 3.89564C11.3916 3.97769 11.4377 4.08897 11.4377 4.205Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
