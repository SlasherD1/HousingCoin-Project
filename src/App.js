import React from "react";
import { useState } from "react";
import "./App.css";
import "./assets/fonts/Paalalabas.otf";
import bgAlter1 from "./assets/images/Gambar-2.gif";
import Background1 from "./assets/images/Background-1.mp4";
import Background2 from "./assets/images/Background-2.png";
import Background3 from "./assets/images/Background-3.png";
import Background4 from "./assets/images/Background-4.png";
import Background5 from "./assets/images/Background-5.mp4";
import Background6 from "./assets/images/Background-6.mp4";
import Background7 from "./assets/images/Background-7.mp4";
import LogoS1 from "./assets/images/LogoS1.png";
import HouseIcon from "./assets/images/house-icon.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import logoPump from "./assets/images/pump_black.png";
import logoDex from "./assets/images/logo_dex1.png";

const App = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat min-h-screen w-full text-white flex items-center justify-center px-4 md:px-12 lg:px-24 text-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        >
          <source src={Background1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 z-10 mt-10 sm:mt-16 md:mt-24">
          {/* Gambar tengah */}
          <img
            src={LogoS1}
            alt="Logo"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-auto"
          />

          {/* Judul besar */}
          <h1 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-2 sm:px-4 md:px-8 py-4 sm:py-6 font-boldoa text-center leading-tight">
            THE <span className="text-yellow-500">SHORTCUT SOLUTION</span> FOR
            YOU WITHOUT SPENDING DECADES SAVING FOR{" "}
            <span className="text-yellow-500">HOUSING</span>
          </h1>

          {/* CA Address */}
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl bg-yellow-500 text-center rounded-xl font-bold text-black px-3 py-2">
            CA : 4Xkqadk6JJg47sc297Gt76BimyXBYJo87dWUKcYFpump
          </h2>
        </div>
      </section>

      <section className="relative rajdhani text-white px-6 md:px-16 lg:px-32 py-[200px] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          src={Background7}
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 justify-center text-center lg:text-left">
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa text-yellow-500">
              WHAT IS
            </h1>
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa text-yellow-500">
              HOUSINGCOIN?
            </h1>
            <p className="text-base md:text-lg font-semibold">
              Housing used to be simple. A roof, four walls, peace with
              affordable prices. Now? Good luck out there.
            </p>
            <p className="text-base md:text-lg font-semibold">
              Housing Coin is here because someone had to do something. We’re
              not promising castles in the sky. We’re just flipping the script —
              and maybe the floorplan too.
            </p>
            <p className="text-base md:text-lg font-semibold">
              No empty promises. No wild dreams. Just a coin. About houses. Take
              it or leave it.
            </p>
            <p className="text-base md:text-lg font-semibold">
              Hold $HOUSING. Touch grass.
            </p>
          </div>

          {/* Optional second column */}
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full flex items-center justify-center">
              {/* You can place an image/video/illustration here later */}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${Background3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-[200px]"
      >
        <div className="flex flex-col lg:flex-col items-center gap-5 justify-center text-center lg:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <div className="flex items-center gap-4 text-yellow-500 font-bold">
            <span className="font-boldoa">1 $HOUSING = 1 HOUSE</span>
            <img
              src={HouseIcon}
              alt="Logo"
              className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto"
            />
          </div>

          <div className="text-white font-bold flex flex-col items-center gap-2 bg-black/30 backdrop-blur-sm py-7 px-[80px] rounded-xl font-boldoa">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
              $0.0000069 USD
            </span>
            <span className="text-md sm:text-lg md:text-xl lg:text-2xl">
              HOUSING PRICE RN
            </span>
          </div>

          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm py-4 px-8 rounded-xl">
            <input
              type="text"
              placeholder="search for your dream house (1$housecoin = 1 house)"
              className="flex-1 bg-transparent backdrop-blur-sm border border-yellow-500 outline-none text-white placeholder-white text-lg py-2 px-4 rounded-lg w-full max-w-lg"
            />
            <button className="bg-white text-black font-bold py-2 px-6 rounded-lg text-md sm:text-lg md:text-xl lg:text-2xl font-boldoa">
              SEARCH
            </button>
          </div>
          <input
            type="text"
            placeholder="code"
            className="flex-1 bg-transparent backdrop-blur-sm border border-yellow-500 outline-none text-white placeholder-white text-lg py-2 px-4 rounded-lg w-full max-w-lg"
          />
        </div>
      </section>

      <section className="relative">
        <div className="relative h-[50vh] overflow-hidden">
          {/* Video background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={Background5}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay hitam semi-transparan (optional biar teks lebih jelas) */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

          {/* Teks di atas video */}
          <div className="relative rajdhani text-white px-6 md:px-16 lg:px-32 py-[20vh] flex flex-col items-center gap-5 justify-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <div className="text-yellow-500">
              HOUSING MARKET IS A{" "}
              <span>
                JOKE NOWADAYS! <span>WELL TWO CAN PLAY</span> THAT GAME
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Background3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "50vh",
          }}
          className="rajdhani text-white px-6 md:px-16 lg:px-32 py-[5vh] md:py-[7vh] lg:py-[15vh]"
        >
          <div className="text-white font-bold flex flex-col items-center justify-center gap-2 bg-black/30 backdrop-blur-sm py-7 px-6 sm:px-12 lg:px-32 rounded-xl text-md sm:text-lg md:text-xl lg:text-2xl text-center">
            <span>
              Tired of being outbid by someone who didn’t even visit the house?
              Mortgage rates doing backflips while you just want a bathroom that
              locks? Same.
            </span>
            <span>
              We say : "if the game’s rigged, change the game." No middlemen, no
              red tape, no need to call a property agent to close a deal.
            </span>
            <span>
              We’re not here to sell you dreams. We’re just here to make
              housing suck less.
            </span>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `url(${Background4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-[150px]"
      >
        <div className="flex flex-col items-center gap-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {/* Judul */}
          <div className="text-yellow-500 font-bold">
            <span className="font-boldoa">OUR HOUSING PORTOFOLIO</span>
          </div>

          {/* Box Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            {[
              { number: "1,000,000,000", label: "TOTAL SUPPLY" },
              { number: "100%", label: "LP BURN" },
              { number: "0%", label: "Buy/Sell tax" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-white font-bold flex flex-col items-center gap-2 bg-black/30 backdrop-blur-sm py-6 px-10 rounded-xl font-boldoa border border-yellow-500 min-w-[250px]"
              >
                <span className="text-4xl md:text-5xl">{item.number}</span>
                <span className="text-lg md:text-xl">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <div className="text-white font-bold text-md sm:text-lg md:text-xl lg:text-2xl">
            <span className="font-boldoa">
              NO PAPERWORK, NO MESSY REAL ESTATE, AND EASY TO USE
            </span>
          </div>
        </div>
      </section>

      <section className="relative h-auto overflow-hidden">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Background6}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay hitam transparan */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {/* Konten di atas video */}
        <div className="relative rajdhani text-white px-6 md:px-16 lg:px-32 py-[200px] flex flex-col items-center gap-5 justify-center text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {/* Judul */}
          <div className="flex flex-col items-center gap-4 text-white font-bold">
            <span className="font-boldoa">WAIT 30 YEARS FOR YOUR DREAM</span>
            <span className="font-boldoa">HOUSE. OR? YOU CAN JUST OWN A</span>
            <span className="font-boldoa">HOUSE NOW.</span>
          </div>

          <br></br>
          {/* 3 kotak statistik */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[
              {
                icon: <FaXTwitter size={80} />,
                text: "JOIN X",
                link: "https://x.com/housingcoinn",
              },
              {
                icon: <FaTelegramPlane size={80} />,
                text: "JOIN TELEGRAM",
                link: "https://t.me/housing_coin",
              },
              {
                icon: (
                  <img
                    src={logoDex}
                    alt="Dex Logo"
                    className="w-20 h-20 object-contain"
                  />
                ),
                text: "DEXSCREENER",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                {/* Icon or Image */}
                <div className="text-white">{item.icon}</div>

                {/* Button */}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-md sm:text-lg md:text-xl lg:text-2xl">
                    {item.text}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
