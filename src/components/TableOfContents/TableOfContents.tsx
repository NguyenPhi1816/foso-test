"use client";
import { useEffect, useState } from "react";

type THeading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents() {
  const [headings, setHeadings] = useState<THeading[]>([]);

  useEffect(() => {
    const article = document.querySelector(".blog-content");
    if (!article) return;

    const headingElements = article.querySelectorAll("h1, h2, h3, h4, h5");
    const tocItems = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: Number(heading.tagName.charAt(1)),
    }));

    setHeadings(tocItems);
  }, []);

  const handleClick = (event: any, id: string) => {
    event.preventDefault();

    const element = document.getElementById(id);
    if (!element) return;

    const offset = 150;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries.find((entry) => entry.isIntersecting);
        if (visibleHeading) {
          setActiveId(visibleHeading.target.id);
        }
      },
      { rootMargin: "-100px 0px -50% 0px", threshold: 0.1 }
    );

    const headingElements = document.querySelectorAll(
      ".blog-content h2, .blog-content h3"
    );
    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="mb-6">
      <ul className="list-none">
        {headings.map((heading, index) => (
          <li
            key={index}
            className="mb-2"
            style={{ paddingLeft: `${(heading.level - 2) * 24}px` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`${
                activeId === heading.id ? "active-heading" : ""
              } text-lg font-medium text-[#33404A] hover:font-bold hover:text-[#15AA7A] transition-all duration-200 ease-in-out`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
