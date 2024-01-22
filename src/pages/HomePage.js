import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { Chrono } from "react-chrono";
// import ReactTyped from "react-typed";
// import ProfileCV from "../assets/Hazlan Muhammad Qodri_CV.pdf";

import BlogHome from "../components/BlogHome";
import MyComponent from "../components/MapHome";



function HomePage() {
  const items = [
    {
      title: "Letak dan Wilayah",
      cardTitle: "Letak dan Wilayah",
      url: "https://www.google.com",
      cardSubtitle: "- Letak Geografis",
      cardDetailedText: `Desa Sumberjo dikeliling 4 desa yaitu Desa Sokomoyo di sebelah Utara,
      Desa Banyunganti dan Desa Peringtali di sebelah Barat, dan Kelurahan
      Sidomulyo di sebelah Selatan. Desa Sumberjo juga berada di area perbukitan karst Menoreh wilayah utara kabupaten Kulon Progo sehingga memiliki medan yang cukup ekstrim dengan batuan kerasnya. Hal ini menyebabkan akses jalan (aspal atau beton) kurang memadai pada desa Sumberjo. Potensi bahaya yang dapat muncul pada area ini yaitu longsor, banjir, dan gempa bumi. Desa Sumberjo memiliki luas wilayah seluas 105,28 Ha.`,

      media: {
        name: "Mountain Icon",
        source: {
          url: "/images/Asset/Mountain.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Kependudukan",
      cardTitle: "Kependudukan",
      url: "https://www.google.com",
      cardSubtitle: "- Data Penduduk",
      cardDetailedText: `Jumlah penduduk di Dusun Sumberjo 428 jiwa dengan jumlah kepadatan
      penduduk sebanyak 4-5 jiwa/Ha. Berdasar pada pendataan penduduk yang
      dilakukan pada Tahun 2023 jumlah laki-laki berjumlah 210 jiwa dan perempuan
      berjumlah 218 jiwa. -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/People.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Keadaan Iklim",
      cardTitle: "Keadaan Iklim",
      url: "https://www.google.com",
      cardSubtitle: "Cuaca dan Kerentanan Hujan",
      cardDetailedText: `Curah hujan pada area ini (mengutip dari website resmi pemkab Kulon Progo) rata-rata per tahunnya mencapai 2.150 mm, dengan rata-rata hari hujan sebanyak 106 hari per tahun atau 9 hari per bulan dengan curah hujan tertinggi pada bulan Januari dan terendah pada bulan Agustus. Suhu terendahnya lebih kurang 24,2°C (Juli) dan tertinggi 25,4°C (April), dengan kelembaban terendah 78,6% (Agustus), serta tertinggi 85,9% (Januari). Intensitas penyinaran matahari rata-rata bulanan mencapai lebih kurang 45,5%, terendah 37,5% (Maret) dan tertinggi 52,5% (Juli).`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Climate.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Mata Pencaharian",
      cardTitle: "Mata Pencaharian",
      url: "https://www.google.com",
      cardSubtitle: "Potensi Pekerjaan",
      cardDetailedText: `Rata-rata di Kelurahan Jatimulyo memiliki tanah yang subur, contohnya potensi areal tanah persawahan yang subur cocok untuk padi dan palawija, dan pada areal tegalan cocok untuk beberapa jenis komoditi kopi, kakao, cengkeh, durian, jati, sengon dan lain- lain. Kondisi subur ini dipengaruhi oleh area perbukitan karst Menoreh yang mengandung Ca ditambah terdapat beberapa sumber air seperti sungai yang mengapit dusun Sumberjo. Keberadaan sungai dengan air yang mengalir sepanjang tahun di wilayah ini membantu dalam menjaga kondisi permukaan air tanah. Oleh Karena itu, sebagian besar penduduk di dusun Sumberjo berprofesi sebagai petani sayuran dan berkebun. Selain itu, sebagian kecil penduduk juga berprofesi sebagai pedagang, buruh tani, dan PNS.`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Eye.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Potensi Pertanian",
      cardTitle: "Pertanian",
      url: "https://www.google.com",
      cardSubtitle: "Potensi Pertanian",
      cardDetailedText: `Masyarakat di Kelurahan Jatimulyo hampir 35% berprofesi sebagai petani. Kondisi pertanian di Kelurahan Jatimulyo didominasi oleh tanaman komoditas perkebunan dan kehutanan. Adapun komoditas perkebunan meliputi singkong, papaya, cengkeh, kakao, kopi, lada, kelapa, durian, salak pondoh dan lain-lain. Untuk tanaman kehutanan yang berkembang adalah kayu sengon laut, mahoni, jati, dan lain-lain. Sementara untuk tanaman pangan yang ada di daerah ini adalah padi dan palawija.`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Irrigation.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Potensi Pertenakan",
      cardTitle: "Pertenakan",
      url: "https://www.google.com",
      cardSubtitle: "Potensi Pertenakan",
      cardDetailedText: `Pada Dusun Sumberjo sebagian besar beternak ayam kampung dan ayam ras.`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Cow.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Potensi Pendidikan",
      cardTitle: "Pendidikan",
      url: "https://www.google.com",
      cardSubtitle: "Potensi Pendidikan",
      cardDetailedText: `Berdasarkan pendataan, penduduk yang berada di Dusun Sumberjo memiliki latar belakang pendidikan yang beragam mulai dari tamat Sekolah Dasar (SD) sebanyak 2.390 Orang, Sekolah Menengah Pertama (SMP) sebanyak 1.385 Orang, Sekolah Menengah Atas (SMA) sebanyak 1.727 Orang, sampai dengan S1/Diploma sebanyak 247 Orang dan S2 sebanyak 6 Orang. Namun sayang, Dusun Sumberjo belum memiliki sarana pendidikan formal seperti Gedung TK, SD/MI, SMP, bahkan SMA. Hanya terdapat Paud untuk anak balita yang bertempat pada pedukuhan Sumberjo.`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Graduation.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Adat dan Istiadat",
      cardTitle: "Adat dan Istiadat",
      url: "https://www.google.com",
      cardSubtitle: "dan Kegiatan Rutin Sosial Budaya",
      cardDetailedText: `Agama yang dianut seluruh warga Dusun Sumberjo adalah Islam, yakni berjumlah 449 jiwa. Adapun sosial budaya yang ada di Dusun Sumberjo adalah adat Jawa dan masih menghormati leluhur. Adapun kegiatan sosial antara lain kegiatan PKK setiap Senin Wage, Pengajian setiap Senin Wage, Posyandu setiap tanggal 7, Paud setiap Senin Rabu Sabtu di Rumah Ibu Dukuh, pertemuan rutin RT dan yasinan putra dan putri yang dilakukan setiap 35 hari sekali, kegiatan gotong royong kebersihan juga setiap 35 hari sekali. Terdapat organisasi kemasyarakatan yaitu Karang Taruna.`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Peoples.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Info Kesehatan",
      cardTitle: "Kesehatan",
      url: "https://www.google.com",
      cardSubtitle: "Kesehatan",
      cardDetailedText: `Sarana dan prasarana di bidang kesehatan di Dusun Sumberjo adalah Pos Layanan Terpadu (POSYANDU) yang bertempat pada Pedukuhan. Selain itu juga terdapat satu buah puskesmas yang lokasinya berada di luar Dusun Sumberjo. Namun, belum ada fasilitas kesehatan seperti rumah sakit, puskesmas, tempat bersalin, poliklinik, maupun apotek yang berlokasi di Dusun Sumberjo.`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Heart.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Keadaan Jalan",
      cardTitle: "Keadaan Jalan",
      url: "https://www.google.com",
      cardSubtitle: "Jembatan dan Sarana Angkutan",
      cardDetailedText: `Masih terdapat jaringan jalan antar dusun, antar desa, antar kecamatan, sampai ke kabupaten yang rusak dan kurang penerangan sehingga mengganggu kemudahan akses masyarakat di Dusun Sumberjo, terutama saat musim panen tiba. Selain itu, belum terdapat rute angkutan umum untuk menuju ke Desa Sumberjo. Masih terdapat wilayah yang rawan banjir dan sistem drainase yang terputus-putus di Desa Sumberjo. Faktor utama yang menghambat pembangunan infrastruktur jalan dan sebagainya yaitu kondisi medan yang cukup ekstrim pada area ini yang mana merupakan area perbukitan karst Menoreh.`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Path.svg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Potensi Wisata",
      cardTitle: "Potensi Wisata",
      url: "https://www.google.com",
      cardSubtitle: " Wisata dan Kesenian",
      cardDetailedText: `Belum ada Info.`,
      media: {
        name: "People Icon",
        source: {
          url: "/images/Asset/Easel.svg",
        },
        type: "IMAGE",
      },
    },
  ];

  return (
    <div id="home">
      {/* section jumbotron */}
      <div
        id="jumbotron"
        className="bg-gradient-to-b from-green1 to-green2 relative min-h-[900px] flex items-center pb-20 pt-10"
      >
        <div className="absolute bottom-0 left-0">
          <img
            src="./images/shape1.svg"
            alt="shape"
            className="w-screen shape"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white w-full h-px"></div>
        <img
          src="./images/shape-light.svg"
          alt="light"
          className="hidden lg:block lg:absolute mix-blend-screen right-0 bottom-0"
        />
        <div className="absolute bottom-0 left-0 "></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center container mx-auto px-4 lg:px-10 xl:px-14 2xl:20">
          <img
            src="./images/Asset/ibuk-epfita.png"
            alt="Profile"
            className="lg:absolute lg:right-60 lg:bottom-0 max-w-sm z-10 px-400 mt-40 top-20 bottom-50"
          />
          <div className="text-black mx-5 pb-8 z-10 lg:order-first my-auto drop-shadow-lg shadow-black">
            <h1 className="font-extrabold text-transparent text-4xl leading-relaxed bg-clip-text bg-gradient-to-r from-horizon-text1 to-horizon-text2 mb-5 mt-12 drop-shadow-2xl">
              Sugeng Rawuh <span className="text-darkgreen">👋</span>! Selamat
              Datang di
            </h1>
            <h1 className="font-extrabold text-transparent text-6xl leading-relaxed bg-clip-text bg-gradient-to-r from-horizon-text1 to-horizon-text2 mb-6">
              Padukuhan Sumberjo{" "}
              {/* <ReactTyped
                strings={[
                  "Padukuhan Sumberjo",
                  "Kalurahan Jatimulyo",
                  "Kepanewon Girimulyo",
                  "Kabupaten Kulon Progo",
                  "D.I. Yogyakarta",
                ]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar=" |"
                showCursor={true}
              /> */}
            </h1>
            <h2 className="font-regular text-1xl mb-6">
              <br />
              Padukuhan Sumberjo adalah Padukuhan di Kalurahan Jatimulyo,
              Kapanewon Girimulyo, Kabupaten Kulon Progo, Daerah Istimewa
              Yogyakarta, Indonesia. Padukuhan ini berjarak sekitar 7 km dari
              pusat pemerintahan Kapanewon Girimulyo atau 9,2 km dari Ibukota
              Kabupaten Kulon Progo. Padukuhan Sumberjo berada di antara sungai
              kecil yang mana aliran sungai tersebut berasal dari tempat wisata
              air terjun (curug). Padukuhan Sumberjo juga berada di area
              perbukitan karst Menoreh wilayah utara kabupaten Kulon Progo
              sehingga memiliki medan yang cukup ekstrim dengan batuan kerasnya.
              Hal ini menyebabkan akses jalan (aspal atau beton) kurang memadai
              pada Padukuhan Sumberjo. Potensi bahaya yang dapat muncul pada
              area ini yaitu longsor, banjir, dan gempa bumi. Padukuhan Sumberjo
              memiliki luas wilayah seluas 105,28 Ha.
            </h2>
            <div className="text-white basis-3 lg:basis-2/6 mt-50">
              <ul className="flex flex-row justify-self-start content-between">
                <li className="flex">
                  <a href="https://www.linkedin.com/in/hazlanmqodri/">
                    <img
                      src="./images/Asset/Youtube.svg"
                      alt="icon"
                      className="w-5 mr-3 bg-spa"
                    />
                  </a>
                </li>
                <li className="ml-10 flex">
                  <a href="https://instagram.com/hzln.qodrey">
                    <img
                      src="./images/instagram-logo.svg"
                      alt="icon"
                      className="w-5 mr-3"
                    />
                  </a>
                </li>
                <li className="ml-10 flex">
                  <a href="https://github.com/hzlnqodrey">
                    <img
                      src="./images/Asset/Tiktok.svg"
                      alt="icon"
                      className="w-5 mr-3"
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* Hubungi Bu Dukuh */}
            {/* <a href={ProfileCV} download="Hazlan Muhammad Qodri CV"> */}
            <a
              href="https://wa.me/082138316616?text=Halo Ibu Dukuh Sumberjo, saya ingin menanyakan tentang..."
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="hover:bg-yellow2 bg-gradient-to-r from-horizon-text1 to-horizon-text2 font-bold px-5 py-2 rounded-md mt-8"
                href=""
              >
                Hubungi Kami
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* section Informasi dan Potensi Daerah */}
      <div
        id="Info"
        className="bg-white relative min-h-[900px] flex items-center pb-10 pt-10 mt-10"
      >
        <div className="absolute bottom-0 left-0 right-0 top-5 mr-20 ml-20">
          <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-10">
            <span className="text-white"> 📍</span>
            Kolom Informasi dan Potensi Daerah{" "}
            <span className="text-white"> 📍</span>
          </h1>
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            twoColums
            enableOutline
            textOverlay
            cardHeight={200} // sets the height of the timeline card to 200px
            mediaHeight={100} // sets the height of the media element to 100px
            contentDetailsHeight={80} // sets the height of the detailed text to 80px
            readMore={true}
            theme={{
              primary: "orange", // Short Description
              secondary: "orange", // Year Highlighter
              cardBgColor: "#FFFFF0", // Card Background
              cardForeColor: "#182747", // Title and long paragraphs
              titleColor: "black", // Year Title
              titleColorActive: "black", // Year Title Active
            }}
          >
            <div className="chrono-icons">
              <img src="./images/clock-logo.svg" alt="clock" />
              <img src="./images/clock-logo.svg" alt="clock" />
              <img src="./images/clock-logo.svg" alt="clock" />
              <img src="./images/clock-logo.svg" alt="clock" />
              <img src="./images/clock-logo.svg" alt="clock" />
              <img src="./images/clock-logo.svg" alt="clock" />
              <img src="./images/clock-logo.svg" alt="clock" />
            </div>
          </Chrono>
        </div>
      </div>

      {/* section Perangkat Desa */}
      <div
        id="perangkat"
        className="bg-gradient-to-b from-green1 to-green2 py-20 flex flex-col min-h-[1200px] lg:h-screen lg:items-center lg:justify-center relative mt-36"
      >
        <div className="absolute top-0 left-0 -z-9 -mt-1">
          <img
            src="./images/shape1-flip.svg"
            alt="shape"
            className="w-screen shape drop-shadow-xl"
          />
        </div>
        <div className="absolute bottom-0 left-0 -z-9 -mb-1">
          <img
            src="./images/shape1.svg"
            alt="shape"
            className="w-screen shape"
          />
        </div>
        <div className="hidden md:block">
          <img
            src="./images/Asset/Path_Small.svg"
            alt="eclipse"
            className="absolute bottom-20 xl:bottom-28 right-20 z-1"
          />
          <img
            src="./images/Asset/Irrigation_Small.svg"
            alt="eclipse"
            className="absolute top-20 xl:top-28 left-20 z-1"
          />
        </div>

        <h1 className="text-2xl lg:text-4xl text-center font-bold mb-20 z-10">
          Perangkat Dusun Sumberjo
          <br />
          Tahun 2024
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center container mx-auto lg:px-10 xl:px-14 2xl:20 z-10">
          <div className="flex flex-col justify-center mb-10 md:mb-20">
            <img
              src="./images/Asset/ibuk-epfita.png"
              alt="icon persons"
              className="max-w-sm mb-10 object-contain h-72 w-144"
            />
            <h2 className="text-xl lg:text-2xl text-center">
              <span className="font-bold">Kepala Dukuh Sumberjo</span>
              <br />
              EPFITA
              <br />
              0821-3831-6616
            </h2>
          </div>
          <div className="flex flex-col justify-center mb-10 md:mb-20">
            <img
              src="./images/Asset/ibuk-epfita.png"
              alt="icon persons"
              className="max-w-sm mb-10 object-contain h-72 w-144"
            />
            <h2 className="text-xl lg:text-2xl text-center">
              <span className="font-bold">Ketua Karang Taruna</span>
              <br />
              Agus Riyanto
              <br />
              0852-2862-6402
            </h2>
          </div>
          <div className="flex flex-col justify-center mb-10 md:mb-20">
            <img
              src="./images/Asset/ibuk-epfita.png"
              alt="icon persons"
              className="max-w-sm mb-10 object-contain h-72 w-144"
            />
            <h2 className="text-xl lg:text-2xl text-center">
              <span className="font-bold">Ketua RT 55</span>
              <br />
              Sukir
              <br />
              0812-2984-1956
            </h2>
          </div>
          <div className="flex flex-col justify-center mb-10 md:mb-20">
            <img
              src="./images/Asset/ibuk-epfita.png"
              alt="icon persons"
              className="max-w-sm mb-10 object-contain h-72 w-144"
            />
            <h2 className="text-xl lg:text-2xl text-center">
              <span className="font-bold">Ketua RT 56</span>
              <br />
              Susanto
              <br />
              0821-5032-7438
            </h2>
          </div>
          <div className="flex flex-col justify-center mb-10 md:mb-20">
            <img
              src="./images/Asset/ibuk-epfita.png"
              alt="icon persons"
              className="max-w-sm mb-10 object-contain h-72 w-144"
            />
            <h2 className="text-xl lg:text-2xl text-center">
              <span className="font-bold">Ketua RT 57</span>
              <br />
              Wardi
              <br />
              0813-4243-7719
            </h2>
          </div>
          <div className="flex flex-col justify-center mb-10 md:mb-20">
            <img
              src="./images/Asset/ibuk-epfita.png"
              alt="icon persons"
              className="max-w-sm mb-10 object-contain h-72 w-144"
            />
            <h2 className="text-xl lg:text-2xl text-center">
              <span className="font-bold">Ketua RT 58</span>
              <br />
              Lek Parman
              <br />
              0852-2897-4785
            </h2>
          </div>
          <div className="flex flex-col justify-center mb-10 md:mb-20">
            <img
              src="./images/Asset/ibuk-epfita.png"
              alt="icon persons"
              className="max-w-sm mb-10 object-contain h-72 w-144"
            />
            <h2 className="text-xl lg:text-2xl text-center">
              <span className="font-bold">Ketua RT 59</span>
              <br />
              Jemakir
              <br />
              0853-2733-9519
            </h2>
          </div>
          <div className="flex flex-col justify-center mb-10 md:mb-20">
            <img
              src="./images/Asset/ibuk-epfita.png"
              alt="icon persons"
              className="max-w-sm mb-10 object-contain h-72 w-144"
            />
            <h2 className="text-xl lg:text-2xl text-center">
              <span className="font-bold">Ketua RT 60</span>
              <br />
              Ery Sukiyanto
              <br />
              0822-4257-0015
            </h2>
          </div>
        </div>
        {/* <h3 className="text-base lg:text-lg text-center mt-28 mx-10">
          * Riset World Health Organization pada tahun 2019. **Pusat Data dan
          Informasi Kementrian Kesehatan RI, 2019.
        </h3> */}
      </div>

      {/* Section: Video Profile Umum Dukuh Sumberjo*/}
      <div
        id="profile-dukuh"
        className="text-black bg-white py-20 flex flex-col min-h-[700px] lg:h-screen lg:items-center lg:justify-center relative mt-36"
      >
        <div className="hidden md:block">
          <img
            src="./images/Asset/Mountain_Small.svg"
            alt="eclipse"
            className="absolute top-8 xl:top-28 left-20 z-20"
          />
          <img
            src="./images/Asset/Forest_Small.svg"
            alt="eclipse"
            className="absolute bottom-8 xl:bottom-28 right-20 z-20"
          />
        </div>
        <h1 className="font-extrabold text-center text-transparent text-2xl sm:leading-relaxed lg:leading-relaxed lg:text-6xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-white-green-text to-darkgreen-text mb-5">
          Video Profile UMKM Sumberjo <span className="text-white">🎥</span>
        </h1>
        <div className="mt-5 mb-10">
          <iframe
            title="This is a youtube video frame"
            id="youtube-vid"
            width="1100"
            height="720"
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/sYwfKaMuVAw?si=xHLLFAeoefaz8_WA"
          ></iframe>
        </div>
      </div>

      {/* section Slider UMKM */}
      <div
        id="UMKM"
        className="bg-gradient-to-b from-green1 to-green2 relative min-h-[1080px] flex items-center pb-10 pt-10 mt-10"
      >
        <div className="absolute bottom-0 left-0"></div>
        <div className="absolute top-0 left-0 -z-9 -mt-1">
          <img
            src="./images/shape1-flip.svg"
            alt="shape"
            className="w-screen shape drop-shadow-xl"
          />
        </div>
        <div className="absolute bottom-0 left-0 -z-9 -mb-1">
          <img
            src="./images/shape1.svg"
            alt="shape"
            className="w-screen shape"
          />
        </div>
        {/* Ganti jadi tema UMKM */}
        <div className="hidden md:block">
          <img
            src="./images/Asset/Shop.svg"
            alt="eclipse"
            className="absolute top-8 xl:top-28 left-20 z-1"
          />
          <img
            src="./images/Asset/money.svg"
            alt="eclipse"
            className="absolute bottom-8 xl:bottom-28 right-20 z-1"
          />
        </div>
        <div className="container mx-auto flex flex-col text-white px-6 lg:px-20">
          <div className="mb-16">
            <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 md:mb-0">
              Daftar UMKM di Sumberjo <span className="text-white">🛍️</span>
            </h1>
          </div>
          <Splide hasTrack={false} aria-label="My Favorite Images">
            <div className="custom-wrapper">
              <div className="splide__arrows absolute right-0 -top-24">
                <button className="splide__arrow splide__arrow--prev mr-5">
                  <img src="./images/ic-prev.svg" alt="prev" />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <img src="./images/ic-next.svg" alt="next" />
                </button>
              </div>
              <SplideTrack>
                {/* FOTO 1 */}
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img
                      src="./images/Foto_UMKM/Sayur Keliling Sumberjo RT 56.jpg"
                      alt="blog"
                      width={400}
                      height={400}
                      className="mb-5 rounded-lg px-20 md:px-0 object-contain mr-10"
                    />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">
                        UMKM ini Menjual sayur keliling untuk masyarakat sekitar
                        Dusun Sumberjo dan
                        <br />
                        menjual berbagai produk dan bahan-bahan untuk kehidupan
                        sehari-hari sebagai warung kelontong
                      </h1>
                      <a href="https://github.com/Thisable-Dev">
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">
                          Jenis UMKM: Penyedia Sayuran dan Tumbuhan
                        </h2>
                        <h2 className="text-xl lg:text-2xl ">
                          Sumberjo, RT 56
                        </h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>
                {/* FOTO 2 */}
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img
                      src="./images/Foto_UMKM/Gula gendhis manis bu Sumini RT 60.jpeg"
                      alt="blog"
                      width={400}
                      height={400}
                      className="object-cover mb-5 rounded-lg px-20 md:px-0"
                    />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">
                        UMKM ini bernama Gula Gendhis Manis Bu Sumini yang
                        beralamatkan di Sumberjo, RT 60.
                        <br />
                        Bu Sumini mengolah Gula Gendhis dengan telaten dan
                        cekatan sehingga hasil dari gula tersebut menjadi sangat
                        enak.
                      </h1>
                      <a href="https://www.google.com">
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">
                          Jenis UMKM: Penyedia Makanan
                        </h2>
                        <h2 className="text-xl lg:text-2xl ">
                          Sumberjo, RT 60
                        </h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>
                {/* FOTO 3 */}
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img
                      src="./images/Foto_UMKM/Gerobak Embun (Snack dari Biji Durian).jpeg"
                      alt="blog"
                      width={400}
                      height={400}
                      className="object-cover mb-5 rounded-lg px-20 md:px-0"
                    />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">
                        UMKM yang bernama Gerobak Embun ini menjual berbagai
                        makanan dan minuman yang kekinian.
                        <br />
                        Selain itu, Gerobak Embun juga mengolah serta menjual
                        Snack dari Biji Durian yang sangat enak dan gurih.
                      </h1>
                      <a href="https://github.com/Thisable-Dev">
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">
                          Jenis UMKM: Penyedia Makanan dan Minuman
                        </h2>
                        <h2 className="text-xl lg:text-2xl ">
                          Sumberjo, RT 59
                        </h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>

                {/* FOTO 4 */}
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img
                      src="./images/Foto_UMKM/Ternak Kambing pak Sakiman RT 60.jpeg"
                      alt="blog"
                      width={400}
                      height={400}
                      className="object-cover mb-5 rounded-lg px-20 md:px-0"
                    />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">
                        UMKM ini bernama Ternak Kambing Pak Sakiman yang
                        bertempat di RT 60
                        <br />
                        Bapak Sakiman mengembala dan mengasuh kambing dengan
                        sangat baik.
                      </h1>
                      <a href="https://github.com/Thisable-Dev">
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">
                          Jenis UMKM: Penyedia dan Jasa Hewan Ternak
                        </h2>
                        <h2 className="text-xl lg:text-2xl ">
                          Sumberjo, RT 60
                        </h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>
                {/* FOTO 5 */}
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img
                      src="./images/Foto_UMKM/Snack and Cake RT 60.jpeg"
                      alt="blog"
                      width={400}
                      height={400}
                      className="object-cover mb-5 rounded-lg px-20 md:px-0"
                    />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">
                        UMKM ini bernama Snack and Cake
                        <br />
                        UMKM ini mengolah serta menjual Snack dan Cake yang
                        sangat enak dan lezat.
                      </h1>
                      <a href="https://github.com/Thisable-Dev">
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">
                          Jenis UMKM: Penyedia Makanan
                        </h2>
                        <h2 className="text-xl lg:text-2xl ">
                          Sumberjo, RT 60
                        </h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>
                {/* FOTo 6 */}
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img
                      src="./images/Foto_UMKM/Geblek Tempe bu Ngadinem.jpeg"
                      alt="blog"
                      width={400}
                      height={400}
                      className="object-cover mb-5 rounded-lg px-20 md:px-0"
                    />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">
                        UMKM ini bernama Geblek Tempe Bu Ngadinem
                        <br />
                        UMKM ini mengolah serta menjual Geblek Tmpe yang sangat
                        enak dan lezat.
                      </h1>
                      <a href="https://github.com/Thisable-Dev">
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">
                          Jenis UMKM: Penyedia Makanan
                        </h2>
                        <h2 className="text-xl lg:text-2xl ">
                          Sumberjo, RT 58
                        </h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>

                {/* FOTO 7 */}
                <SplideSlide>
                  <div className="flex flex-col md:flex-row">
                    <img
                      src="./images/Foto_UMKM/Geblek Tempe bu Ngadinem.jpeg"
                      alt="blog"
                      width={400}
                      height={400}
                      className="object-cover mb-5 rounded-lg px-20 md:px-0"
                    />
                    <div className="md:ml-8 lg:ml-14">
                      <img src="./images/ic-quote.svg" alt="quote" />
                      <h1 className="text-xl lg:text-3xl text-justify">
                        UMKM ini bernama Geblek Tempe Bu Ngadinem
                        <br />
                        UMKM ini mengolah serta menjual Geblek Tmpe yang sangat
                        enak dan lezat.
                      </h1>
                      <a href="https://github.com/Thisable-Dev">
                        <h2 className="text-xl lg:text-2xl font-bold mt-12">
                          Jenis UMKM: Penyedia Makanan
                        </h2>
                        <h2 className="text-xl lg:text-2xl ">
                          Sumberjo, RT 58
                        </h2>
                      </a>
                    </div>
                  </div>
                </SplideSlide>
                {/* FOTO 8 */}
                {/* FOTo 9 */}

                {/* FOTO 10 */}
                {/* FOTO 11 */}
                {/* FOTo 12 */}

                {/* FOTO 13 */}
                {/* FOTO 14 */}
                {/* FOTo 15 */}
              </SplideTrack>
            </div>
          </Splide>
        </div>
      </div>

      {/* section Blog News */}
      <div
        id="blog"
        className="py-20 flex flex-col items-center justify-center"
      >
        <h1 className="text-2xl lg:text-4xl text-center font-bold mb-20">
          Blog
        </h1>
        <BlogHome />
      </div>

      {/* section photos 1: Sumberjo */}
      <div
        id="Foto_Sumberjo"
        className="bg-gradient-to-b from-green1 to-green2 relative min-h-[1080px] items-center pb-10 pt-10 mt-10"
      >
        <div className="absolute bottom-0 left-0"></div>
        <div className="absolute top-0 left-0 -z-9 -mt-1">
          <img
            src="./images/shape1-flip.svg"
            alt="shape"
            className="w-screen shape drop-shadow-xl"
          />
        </div>
        <div className="absolute bottom-0 left-0 -z-9 -mb-1">
          <img
            src="./images/shape1.svg"
            alt="shape"
            className="w-screen shape"
          />
        </div>
        <div className="hidden md:block">
          <img
            src="./images/Asset/Mountain_Small.svg"
            alt="eclipse"
            className="absolute top-8 xl:top-28 left-20 z-1"
          />
          <img
            src="./images/Asset/Irrigation_Small.svg"
            alt="eclipse"
            className="absolute bottom-8 xl:bottom-28 right-20 z-1"
          />
        </div>
        <div className="text-center">
          <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mt-52">
            Photos <span className="text-white">📸</span> of Sumberjo{" "}
          </h1>
          <div className="container mx-auto flex flex-col text-white px-6 lg:px-20">
            <div className="mb-16"></div>
            <Splide hasTrack={false} aria-label="My Favorite Images">
              <div className="custom-wrapper justify-items-center content-around ">
                <div className="splide__arrows absolute right-0 -top-24">
                  <button className="splide__arrow splide__arrow--prev mr-5">
                    <img src="./images/ic-prev.svg" alt="prev" />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <img src="./images/ic-next.svg" alt="next" />
                  </button>
                </div>
                <SplideTrack>
                  {/* Catatan: Video dijadikan GIF */}

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/1.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/2.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/3.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/4.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/5.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/6.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/7.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/8.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/9.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/11.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/12.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/15.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/16.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/17.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/19.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Gebyar kemerdekaan 78/20.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_Sumberjo/Merti Padukuhan/1.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>
                </SplideTrack>
              </div>
            </Splide>
          </div>
        </div>
      </div>

      {/* OPSI 1 - Slider */}
      {/* section photos 2: KKN */}
      <div
        id="Foto_KKN"
        className="bg-white relative min-h-[700px] items-center pb-10 pt-52 mt-10 z-10"
      >
        <div className="absolute top-0 left-0 -z-9 -mt-1">
          <img
            src="./images/shape1-flip.svg"
            alt="shape"
            className="w-screen shape"
          />
        </div>
        <div className="absolute bottom-0 left-0 -z-9 -mb-1">
          <img
            src="./images/shape1.svg"
            alt="shape"
            className="w-screen shape"
          />
        </div>
        <div className="text-center">
          <h1 className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-5">
            Dokumentasi <span className="text-white">📸</span> KKN AB.80.134.KP{" "}
          </h1>
          <div className="container mx-auto flex flex-col text-white px-6 lg:px-20">
            <div className="mb-16"></div>
            <Splide hasTrack={false} aria-label="My Favorite Images">
              <div className="custom-wrapper justify-items-center content-around ">
                <div className="splide__arrows absolute right-0 -top-24">
                  <button className="splide__arrow splide__arrow--prev mr-5">
                    <img src="./images/Asset/prev-green.svg" alt="prev" />
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                    <img src="./images/Asset/next-green.svg" alt="next" />
                  </button>
                </div>
                <SplideTrack>
                  {/* FOTO 1 */}
                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_KKN/Pembekalan/1.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  {/* FOTO 2 */}
                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_KKN/Pembekalan/2.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  {/* FOTO 3 */}
                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_KKN/Pembekalan/3.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  {/* FOTO 4 */}
                  <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_KKN/Pembekalan/4.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0"
                      />
                    </div>
                  </SplideSlide>

                  {/* FOTO 5 */}
                  {/* <SplideSlide>
                    <div className="flex flex-col md:flex-row justify-center content-around">
                      <img
                        src="./images/Dokumentasi_KKN/TPA/1.jpg"
                        alt="blog"
                        width={800}
                        height={800}
                        className="object-cover mb-5 rounded-lg px-20 md:px-0 h-96"
                      />
                    </div>
                  </SplideSlide> */}

                  
                </SplideTrack>
              </div>
            </Splide>
          </div>
        </div>
      </div>

      {/* section Peta dan Map */}
      <div
        id="peta"
        className="bg-gradient-to-b from-green1 to-green2 relative min-h-[1080px] flex items-center pb-10 pt-10 mt-10"
      >
        <div className="absolute bottom-0 left-0"></div>
        <div className="absolute top-0 left-0 -z-9 -mt-1">
          <img
            src="./images/shape1-flip.svg"
            alt="shape"
            className="w-screen shape drop-shadow-xl"
          />
        </div>
        <div className="absolute bottom-0 left-0 -z-9 -mb-1">
          <img
            src="./images/shape1.svg"
            alt="shape"
            className="w-screen shape"
          />
        </div>
        <div className="hidden md:block">
          <img
            src="./images/Asset/Path_Small.svg"
            alt="eclipse"
            className="absolute bottom-20 xl:bottom-28 right-20 z-1"
          />
          <img
            src="./images/Asset/Mountain_Small.svg"
            alt="eclipse"
            className="absolute top-20 xl:top-28 left-20 z-1"
          />
        </div>
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 mx-auto px-10 md:px-32 xl:px-56">
          <div className="lg:pr-20 relative">
            <p className="font-extrabold text-center text-transparent text-2xl lg:text-4xl sm:text-4xl bg-clip-text bg-gradient-to-tr from-horizon-text1 to-horizon-text2 mb-10 lg:text-start">
              Peta Sumberjo
              <br />
              dan Map UMKM
            </p>
          </div>
          <div className="grid grid-cols-7 gap-8 md:gap-12 lg:gap-5 xl:gap-6">
            <MyComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
