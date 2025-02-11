import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const programs = [
  { title: "Ekosistem Data Jabar", description: "Portal terintegrasi untuk pengelolaan data.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Portal Jabar", description: "Portal informasi layanan Jawa Barat.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Sapawarga", description: "Aplikasi layanan publik digital di Jawa Barat.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Jabar Super Apps", description: "Aplikasi layanan publik dan administrasi terintegrasi.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Open Data Jabar", description: "Portal keterbukaan data di Jawa Barat.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Smart Province", description: "Transformasi digital untuk pembangunan Jawa Barat.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Digital Jabar", description: "Solusi digital untuk pelayanan publik.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Jabar Command Center", description: "Pusat komando digital Jawa Barat.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Desa Digital", description: "Transformasi digital untuk desa.", link: "#", icon: "https://via.placeholder.com/50" },
  { title: "Jabar Quick Response", description: "Layanan darurat dan bantuan cepat.", link: "#", icon: "https://via.placeholder.com/50" }
];

export default function FeaturedPrograms() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Program Unggulan</h2>
      <div className="border-t border-gray-300 mb-6"></div>

      {/* Swiper untuk semua layar */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Default: 1 per slide
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
          1280: { slidesPerView: 4 } // Layar besar (4 item)
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
      >
        {programs.map((program, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col h-full">
              <img src={program.icon} alt={program.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-blue-900">{program.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow">{program.description}</p>
              <a href={program.link} className="mt-4 text-blue-600 font-semibold flex items-center">Selengkapnya →</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol Navigasi Swiper */}
      <div className="flex justify-between items-center mt-4">
        <button className="swiper-button-prev bg-gray-200 p-3 rounded-full shadow-md">
          <IoIosArrowBack className="text-blue-900 text-2xl" />
        </button>
        <button className="swiper-button-next bg-gray-200 p-3 rounded-full shadow-md">
          <IoIosArrowForward className="text-blue-900 text-2xl" />
        </button>
      </div>
    </div>
  );
}
