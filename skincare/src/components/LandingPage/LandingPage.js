// src/components/LandingPage/LandingPage.js

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../assets/NaasSkin11_Logo-01.svg";
import logo2 from "../../assets/NaasSkin11_Logo-02.svg";
import skincare1 from "../../assets/skincare1.jpg";
import skincare2 from "../../assets/skincare2.jpg";
import skincare3 from "../../assets/skincare3.jpg";

// Keep existing icons...
const UserIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    ></path>
  </svg>
);
const CartIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    ></path>
  </svg>
);
const WhatsAppIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.469 15.871C18.211 16.396 17.11 17.095 16.382 17.213C15.832 17.3 15.16 17.335 14.586 17.196C13.867 17.02 13.09 16.708 12.206 16.15C10.243 14.93 8.699 13.067 7.39 10.992C6.969 10.308 6.628 9.57 6.647 8.828C6.666 8.086 6.919 7.404 7.37 6.931C7.74 6.539 8.168 6.375 8.532 6.375C8.841 6.375 9.105 6.408 9.313 6.451C9.582 6.508 9.736 6.59 9.944 7.005C10.206 7.52 10.611 8.667 10.706 8.836C10.801 9.005 10.849 9.189 10.706 9.41C10.562 9.631 10.468 9.736 10.283 9.944C10.1 10.151 9.956 10.281 9.813 10.436C9.688 10.575 9.57 10.706 9.719 10.928C9.868 11.15 10.38 11.95 11.151 12.65C12.152 13.571 12.904 13.888 13.213 14.033C13.521 14.178 13.68 14.159 13.85 13.963C14.02 13.768 14.258 13.45 14.552 13.081C14.901 12.658 15.229 12.581 15.608 12.712C15.987 12.843 17.009 13.391 17.401 13.599C17.793 13.807 18.05 13.891 18.134 14.036C18.219 14.181 18.219 14.711 18.005 15.235L18.469 15.871Z"
      fill="#25D366"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.001 2.00176C6.478 2.00176 2 6.47976 2 12.0018C2 14.0318 2.571 15.9308 3.563 17.5418L2.158 21.8448L6.63 20.4848C8.179 21.3658 9.999 21.8818 11.937 21.9998H12.001C17.523 21.9998 22 17.5218 22 12.0008C22 6.47876 17.522 2.00176 12.001 2.00176ZM12.001 19.9998C10.399 19.9998 8.873 19.5958 7.562 18.8548L7.27 18.6918L4.437 19.5098L5.288 16.7958L5.109 16.4918C4.238 15.0318 3.763 13.3668 3.763 11.6248C3.763 7.42976 7.43 4.00176 12.001 4.00176C16.572 4.00176 20 7.43076 20 12.0008C20 16.5718 16.571 19.9998 12.001 19.9998Z"
      fill="#25D366"
    />
  </svg>
);
const IngredientIcon = () => (
  <svg
    className="w-4 h-4 mr-2 inline-block text-indigo-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-2 md:p-3 cursor-pointer transition-colors duration-300 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-2 md:p-3 cursor-pointer transition-colors duration-300 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

const Header = ({ onShopClick }) => {
  return (
    // Added className for Grid layout targeting
    <header className="row-start-1 sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-medium tracking-wide text-gray-800 cursor-pointer">
            NAASKINN
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#shop"
              onClick={onShopClick}
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Shop
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Our Story
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Journal
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/91XXXXXXXXXX" /* Replace XXXXXXXXXX */
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            <WhatsAppIcon />
          </a>
          <button
            aria-label="Account"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <UserIcon />
          </button>
          <button
            aria-label="Cart"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

const LandingPage = () => {
  const firstProductSectionRef = useRef(null);

  // Data for carousel slides using logos and background colors
  const carouselLogoData = [
    {
      id: "logo-slide-1",
      logoUrl: logo1,
      altText: "Naaskinn Logo 1",
      title: "Natural Ingredients", // Example title
      bgClass: "bg-gradient-to-br from-rose-50 via-white to-rose-100", // Example background
    },
    {
      id: "logo-slide-2",
      logoUrl: logo2,
      altText: "Naaskinn Logo 2",
      title: "Radiant Skin", // Example title
      bgClass: "bg-gradient-to-br from-lime-50 via-white to-lime-100", // Example background
    },
    {
      id: "logo-slide-3",
      logoUrl: logo1, // Repeating logo 1
      altText: "Naaskinn Logo 1",
      title: "Gentle & Effective", // Example title
      bgClass: "bg-gradient-to-br from-sky-50 via-white to-sky-100", // Example background
    },
  ];

  const productsData = [
    {
      id: "prod-a",
      name: "Gentle Aura Cleanser",
      detailedDescription:
        "Experience the refreshing embrace of our Gentle Aura Cleanser, designed to purify without stripping natural moisture. Perfect for sensitive skin.",
      productImageUrl: skincare2,
      logoUrl: logo1,
      keyIngredients: [
        { name: "Rosehip Extract", description: "Nourishes and brightens." },
        { name: "Chamomile", description: "Soothes and calms sensitivity." },
      ],
      howToUse:
        "Apply a small amount to damp skin, massage gently, and rinse thoroughly. Use morning and night.",
      price: "₹528.00",
      sectionBgClass: "bg-gradient-to-br from-rose-50 via-white to-rose-100",
      gridImageUrl: skincare2,
    },
    {
      id: "prod-b",
      name: "Hydra-Bloom Serum",
      detailedDescription:
        "Unlock luminous hydration with Hydra-Bloom Serum. This lightweight formula absorbs quickly to plump and revitalize skin.",
      productImageUrl: skincare1,
      logoUrl: logo2,
      keyIngredients: [
        { name: "Hyaluronic Acid", description: "Provides intense hydration." },
        {
          name: "Green Tea Extract",
          description: "Offers antioxidant protection.",
        },
      ],
      howToUse:
        "After cleansing and toning, apply 2-3 drops to the face and neck, pressing gently into the skin.",
      price: "₹722.00",
      sectionBgClass: "bg-gradient-to-br from-lime-50 via-white to-lime-100",
      gridImageUrl: skincare1,
    },
    {
      id: "prod-c",
      name: "Midnight Repair Crème",
      detailedDescription:
        "Awaken to restored skin with Midnight Repair Crème. Works overnight to replenish moisture and improve skin texture.",
      productImageUrl: skincare3,
      logoUrl: logo1,
      keyIngredients: [
        { name: "Shea Butter", description: "Deeply moisturizes and softens." },
        {
          name: "Peptides",
          description: "Support skin firmness and elasticity.",
        },
      ],
      howToUse:
        "As the last step in your nighttime routine, apply an even layer to the face and neck.",
      price: "₹980.00",
      sectionBgClass: "bg-gradient-to-br from-sky-50 via-white to-sky-100",
      gridImageUrl: skincare3,
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <ul className="m-0 p-0 flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2.5 h-2.5 bg-black/20 rounded-full cursor-pointer transition-colors duration-300 hover:bg-black/40 slick-dot-inactive"></div>
    ), // Adjusted dot color for lighter backgrounds
  };

  const handleShopClick = (event) => {
    event.preventDefault();
    if (firstProductSectionRef.current) {
      firstProductSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("First product section ref is not yet available.");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="font-sans text-gray-800 bg-white flex flex-col antialiased">
      {/* Initial screen wrapper using Grid */}
      <div className="grid grid-rows-[auto_1fr] min-h-screen">
        <Header onShopClick={handleShopClick} />
        {/* Carousel section assigned to the second row (1fr) */}
        <section className="row-start-2 relative w-full overflow-hidden">
          <Slider
            {...carouselSettings}
            className="naaskinn-slider absolute inset-0 w-full h-full z-0"
          >
            {/* Map over carouselLogoData */}
            {carouselLogoData.map((item) => (
              <div key={item.id} className="relative w-full h-full">
                {/* Background div */}
                <div
                  className={`w-full h-full flex items-center justify-center ${item.bgClass}`}
                >
                  <img
                    src={item.logoUrl}
                    alt={item.altText}
                    className="w-auto h-auto max-w-[60%] max-h-[40%] object-contain" // Control logo size
                    loading="eager"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                {/* Overlay for title */}
                <div className="absolute inset-x-0 bottom-1/4 md:bottom-1/3 p-6 z-10 text-center">
                  <h2 className="text-naaskinn-text-primary text-2xl md:text-4xl font-light text-shadow-light bg-white/50 px-4 py-2 inline-block rounded">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
          <style jsx global>{`
            .slick-dots .slick-active div {
              background-color: black !important; /* Adjusted active dot color */
            }
            .slick-dot-inactive {
            }
            .text-shadow-light {
              /* Lighter shadow for dark text */
              text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
            }
          `}</style>
        </section>
      </div>

      {/* Rest of the page content starts here */}
      <main>
        {productsData.map((product, index) => (
          <section
            ref={index === 0 ? firstProductSectionRef : null}
            key={product.id}
            id={index === 0 ? "shop" : undefined}
            className={`min-h-screen w-full flex items-center py-16 md:py-24 ${product.sectionBgClass}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className={`w-full ${index === 1 ? "md:order-last" : ""}`}>
                  <img
                    src={product.productImageUrl}
                    alt={product.name}
                    className="w-full h-auto object-contain rounded-lg shadow-xl max-h-[70vh] mx-auto"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="w-full space-y-5 md:space-y-6">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {product.detailedDescription}
                  </p>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-900">
                      Key Ingredients
                    </h3>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      {product.keyIngredients.map((ing) => (
                        <li key={ing.name} className="flex items-start">
                          <IngredientIcon />
                          <span>
                            <strong>{ing.name}:</strong> {ing.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-gray-900">
                      How to Use
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.howToUse}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 space-y-4 sm:space-y-0">
                    <p className="text-2xl font-medium text-gray-900">
                      {product.price}
                    </p>
                    <button className="py-3 px-8 text-base font-medium text-white bg-indigo-600 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 w-full sm:w-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 md:py-24 lg:py-28 px-6 md:px-10 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center text-gray-900">
            Complete Your Ritual
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {productsData.map((product) => (
              <div
                key={`${product.id}-grid`}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden bg-gray-100 p-4">
                  <img
                    src={
                      product.logoUrl ||
                      product.gridImageUrl ||
                      product.productImageUrl
                    }
                    alt={`${product.name} ${product.logoUrl ? "logo" : ""}`}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-medium mt-2 mb-3 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{product.price}</p>
                  <button className="mt-auto w-full py-2.5 px-5 text-sm font-medium text-indigo-600 bg-transparent border border-indigo-600 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-30">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="text-center py-10 px-6 bg-gray-100 border-t border-gray-200 text-sm text-gray-600">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} NAASKINN. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Terms of Service
          </a>
        </div>
      </footer>
      <a
        href="https://wa.me/91XXXXXXXXXX" /* Replace XXXXXXXXXX */
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 flex items-center justify-center"
        title="Chat with us on WhatsApp"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.469 15.871C18.211 16.396 17.11 17.095 16.382 17.213C15.832 17.3 15.16 17.335 14.586 17.196C13.867 17.02 13.09 16.708 12.206 16.15C10.243 14.93 8.699 13.067 7.39 10.992C6.969 10.308 6.628 9.57 6.647 8.828C6.666 8.086 6.919 7.404 7.37 6.931C7.74 6.539 8.168 6.375 8.532 6.375C8.841 6.375 9.105 6.408 9.313 6.451C9.582 6.508 9.736 6.59 9.944 7.005C10.206 7.52 10.611 8.667 10.706 8.836C10.801 9.005 10.849 9.189 10.706 9.41C10.562 9.631 10.468 9.736 10.283 9.944C10.1 10.151 9.956 10.281 9.813 10.436C9.688 10.575 9.57 10.706 9.719 10.928C9.868 11.15 10.38 11.95 11.151 12.65C12.152 13.571 12.904 13.888 13.213 14.033C13.521 14.178 13.68 14.159 13.85 13.963C14.02 13.768 14.258 13.45 14.552 13.081C14.901 12.658 15.229 12.581 15.608 12.712C15.987 12.843 17.009 13.391 17.401 13.599C17.793 13.807 18.05 13.891 18.134 14.036C18.219 14.181 18.219 14.711 18.005 15.235L18.469 15.871Z"
            fill="#FFFFFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.001 2.00176C6.478 2.00176 2 6.47976 2 12.0018C2 14.0318 2.571 15.9308 3.563 17.5418L2.158 21.8448L6.63 20.4848C8.179 21.3658 9.999 21.8818 11.937 21.9998H12.001C17.523 21.9998 22 17.5218 22 12.0008C22 6.47876 17.522 2.00176 12.001 2.00176ZM12.001 19.9998C10.399 19.9998 8.873 19.5958 7.562 18.8548L7.27 18.6918L4.437 19.5098L5.288 16.7958L5.109 16.4918C4.238 15.0318 3.763 13.3668 3.763 11.6248C3.763 7.42976 7.43 4.00176 12.001 4.00176C16.572 4.00176 20 7.43076 20 12.0008C20 16.5718 16.571 19.9998 12.001 19.9998Z"
            fill="#FFFFFF"
          />
        </svg>
      </a>
    </div>
  );
};

export default LandingPage;
