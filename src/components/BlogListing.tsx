"use client";
import { useState } from "react";
import { FaCalendarAlt, FaArrowRight, FaClock } from "react-icons/fa";

const blogs = [
  {
    title: "Complete Umrah Guide for First-Time Pilgrims from USA",
    excerpt:
      "Everything you need to know before your first Umrah — from visa requirements and packing essentials to step-by-step rituals at Masjid al-Haram. A comprehensive guide for American Muslim families.",
    category: "Umrah Guide",
    date: "March 20, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&q=70&fm=webp",
    imageAlt: "Masjid al-Haram in Makkah — Complete Umrah guide for USA pilgrims",
    featured: true,
  },
  {
    title: "How to Choose the Best Umrah Package from USA in 2026",
    excerpt:
      "Comparing luxury vs affordable Umrah packages, what to look for in hotel ratings, flight options from major US cities, and how to avoid scams when booking your pilgrimage.",
    category: "Travel Tips",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=70&fm=webp",
    imageAlt: "Masjid an-Nabawi in Madinah — Choosing the best Umrah package",
    featured: false,
  },
  {
    title: "Umrah Packing List: What to Bring from America",
    excerpt:
      "A detailed packing checklist for Umrah travelers from the USA. Includes Ihram essentials, medications, electronics, documents, and items you should leave at home.",
    category: "Preparation",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=600&q=70&fm=webp",
    imageAlt: "Umrah packing essentials for travelers from USA",
    featured: false,
  },
  {
    title: "Performing Umrah During Ramadan: Benefits & Tips",
    excerpt:
      "Discover why performing Umrah during Ramadan is spiritually rewarding and practically unique. Tips on managing crowds, heat, fasting during travel, and making the most of your blessed journey.",
    category: "Spiritual",
    date: "March 5, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=70&fm=webp",
    imageAlt: "Holy Kaaba during Ramadan — Umrah spiritual guide",
    featured: false,
  },
  {
    title: "Top 5 Hotels Near Haram in Makkah for Umrah Pilgrims",
    excerpt:
      "Our expert picks for the best 4-star and 5-star hotels within walking distance of Masjid al-Haram. Includes pricing tips, room types, and what to expect from each hotel tier.",
    category: "Hotels & Stay",
    date: "February 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=70&fm=webp",
    imageAlt: "Luxury hotels near Haram for Umrah pilgrims from USA",
    featured: false,
  },
  {
    title: "Umrah Visa Process for US Citizens: Step-by-Step 2026",
    excerpt:
      "A complete walkthrough of the Umrah visa application process for American passport holders. Required documents, processing times, common mistakes to avoid, and how Qibla Gateway handles it for you.",
    category: "Visa & Documents",
    date: "February 20, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&q=70&fm=webp",
    imageAlt: "Umrah visa guide for US citizens",
    featured: false,
  },
];

const categories = [
  "All",
  "Umrah Guide",
  "Travel Tips",
  "Preparation",
  "Spiritual",
  "Hotels & Stay",
  "Visa & Documents",
];

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  const featuredBlog =
    activeCategory === "All" ? blogs.find((b) => b.featured) : null;

  const gridBlogs = featuredBlog
    ? filteredBlogs.filter((b) => !b.featured)
    : filteredBlogs;

  return (
    <>
      {/* Categories */}
      <section className="py-5 sm:py-8 bg-white border-b border-gray-100 sticky top-[60px] sm:top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto sm:flex-wrap items-center gap-2 sm:gap-3 sm:justify-center pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-brand-dark text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-brand-gold hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog — only on "All" */}
      {featuredBlog && (
        <section className="py-10 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <p className="gold-text uppercase tracking-widest text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
              Featured Article
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.imageAlt}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={320}
                />
              </div>
              <div>
                <span className="inline-block bg-brand-gold/10 text-brand-gold px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  {featuredBlog.category}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                  {featuredBlog.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {featuredBlog.excerpt}
                </p>
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt size={12} /> {featuredBlog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock size={12} /> {featuredBlog.readTime}
                  </span>
                </div>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 btn-brown text-sm"
                >
                  Read Full Article <FaArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold">
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </h2>
            <span className="text-sm text-gray-400">
              {gridBlogs.length} {gridBlogs.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {gridBlogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gridBlogs.map((blog) => (
                <article
                  key={blog.title}
                  className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-40 sm:h-48 md:h-52 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.imageAlt}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={208}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="inline-block bg-brand-gold/10 text-brand-gold px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                        {blog.category}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-1">
                        <FaClock size={10} /> {blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-snug group-hover:text-brand-gold transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-1">
                        <FaCalendarAlt size={10} /> {blog.date}
                      </span>
                      <a
                        href="/#contact"
                        className="text-brand-gold text-xs sm:text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read More <FaArrowRight size={10} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-4">
                No articles found in this category yet.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="btn-brown text-sm"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
