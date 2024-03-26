import {
  faCalendarCheck,
  faCalendarDays,
  faCamera,
  faCircleXmark,
  faHandshakeSimple,
  faHourglassHalf,
  faMoneyBills,
  faPaperPlane,
  faPercent,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSpan = styled.span`
  color: var(--color-primary-red);
`;

export const CategoryCardData = [
  {
    title: "Kameras",
    image: "/Categorycards/camera.jpg",
    router: "cameras",
  },
  {
    title: "Objektive",
    image: "/Categorycards/lense.jpg",
    router: "lenses",
  },
  {
    title: "Lichter",
    image: "/Categorycards/light.jpg",
    router: "lights",
  },
];

export const TestimonialData = [
  {
    id: 0,
    name: "Julia M.",
    date: "15.02.2024",
    testimonial:
      "Hervorragender Service! Ich habe eine Canon EOS R5 für mein neues Fotoprojekt ausgeliehen und war beeindruckt von der Qualität der Kamera. Der telefonische Support war äußerst hilfreich, als ich eine kurze Frage zur Bedienung hatte. Dank euch verlief mein Shooting reibungslos. 5 von 5 Sternen!",
    profilPicture: "/Profilpictures/Julia.jpg",
  },
  {
    id: 1,
    name: "Max B.",
    date: "03.03.2024",
    testimonial:
      "Top-Notch Ausrüstung und schneller, effizienter Support! Ich hatte ein kleines Problem mit einem ausgeliehenen Objektiv, rief den Support an und erhielt sofort freundliche Hilfe. Das Sigma 24-70mm f/2.8 war ansonsten perfekt für meine Videoaufnahmen. Vielen Dank !",
    profilPicture: "/Profilpictures/Max.jpg",
  },
  {
    id: 2,
    name: "Lara S.",
    date: "10.04.2024",
    testimonial:
      "Absolut zuverlässig! Habe mehrere Male Kameras und Lichtausrüstung für verschiedene Projekte ausgeliehen. Der telefonische Support ist immer erreichbar und äußerst kompetent. Selbst bei einem defekten Blitz war  schnell zur Stelle und ersetzte ihn umgehend. Ich bin rundum zufrieden.",
    profilPicture: "/Profilpictures/Lara.jpg",
  },
  {
    id: 3,
    name: "Marie H.",
    date: "01.05.2024",
    testimonial:
      "Ich habe eine Canon EOS R5 für mein neues Fotoprojekt ausgeliehen und war beeindruckt von der Qualität der Kamera. Der telefonische Support war äußerst hilfreich, als ich eine kurze Frage zur Bedienung hatte. Dank euch verlief mein Shooting reibungslos. 5 von 5 Sternen!",
    profilPicture: "/Profilpictures/Marie.jpg",
  },
];

export const FaqData = [
  {
    id: 0,
    iconName: faCalendarCheck,
    headline: "Buchungsprozess",
    headlineWhileOpen: (
      <span>
        Wie funktioniert der <StyledSpan>Buchungsprozess</StyledSpan> ?
      </span>
    ),

    paragraphWhileOpen:
      "Der Buchungsprozess ist einfach und unkompliziert. Sie können online auf unserer Website die gewünschte Ausrüstung auswählen, den gewünschten Zeitraum festlegen und die Buchung abschließen. Alternativ können Sie uns telefonisch kontaktieren, um Ihre Reservierung vorzunehmen.",
  },
  {
    id: 1,
    iconName: faPercent,
    headline: "Was bieten wir?",
    headlineWhileOpen: (
      <span>
        Welche <StyledSpan>Kameras</StyledSpan>,{" "}
        <StyledSpan>Objektive</StyledSpan> und{" "}
        <StyledSpan>Lichtausrüstung</StyledSpan> bietet Ihr Verleih an?
      </span>
    ),
    paragraphWhileOpen:
      "Unser Verleih bietet eine breite Palette von Kameras, Objektiven und Lichtausrüstung verschiedener Marken und Modelle an, darunter die neuesten Technologien sowie bewährte Klassiker.",
  },
  {
    id: 2,
    iconName: faHourglassHalf,
    headline: "Verleihdauer",
    headlineWhileOpen: (
      <span>
        Wie lange kann ich die <StyledSpan>Ausrüstung</StyledSpan> ausleihen?
      </span>
    ),
    paragraphWhileOpen:
      " Die Ausleihdauer kann je nach Bedarf angepasst werden, von einem Tag bis zu mehreren Wochen. Wir bieten flexible Optionen, um Ihren individuellen Anforderungen gerecht zu werden.",
  },
  {
    id: 3,
    iconName: faCircleXmark,
    headline: "Stornieren/ändern",
    headlineWhileOpen: (
      <span>
        Kann ich meine Reservierung{" "}
        <StyledSpan>stornieren oder ändern?</StyledSpan>
      </span>
    ),
    paragraphWhileOpen:
      "Ja, Reservierungen können in bestimmten Fällen storniert oder geändert werden. Bitte informieren Sie uns so früh wie möglich über Änderungen, um die Verfügbarkeit sicherzustellen.",
  },
  {
    id: 4,
    iconName: faMoneyBills,
    headline: "Leihgebühr-Kosten",
    headlineWhileOpen: (
      <span>
        Was kostet die <StyledSpan>Leihgebühr</StyledSpan> ?
      </span>
    ),
    paragraphWhileOpen:
      "Die Leihgebühr umfasst die Nutzung der ausgewählten Ausrüstung für den vereinbarten Zeitraum. Eventuelle Zusatzleistungen oder Versicherungen können zusätzliche Kosten verursachen.",
  },
  {
    id: 5,
    iconName: faCalendarDays,
    headline: "Rückgabe/Abholung",
    headlineWhileOpen: (
      <span>
        Wie erfolgt die <StyledSpan>Rückgabe</StyledSpan> oder{" "}
        <StyledSpan>Abholung</StyledSpan> der Ausrüstung?
      </span>
    ),
    paragraphWhileOpen:
      "Der Buchungsprozess ist einfach und unkompliziert. Sie können online auf unserer Website die gewünschte Ausrüstung auswählen, den gewünschten Zeitraum festlegen und die Buchung abschließen. Alternativ können Sie uns telefonisch kontaktieren, um Ihre Reservierung vorzunehmen.",
  },
  {
    id: 6,
    iconName: faCamera,
    headline: "Beschädigungen",
    headlineWhileOpen: (
      <span>
        Was passiert, wenn die Ausrüstung <StyledSpan>beschädigt </StyledSpan>
        wird?
      </span>
    ),
    paragraphWhileOpen:
      "Im Falle von Beschädigungen während der Mietdauer greift die Kaution. Zusätzlich bieten wir optional Versicherungen an, um Ihre Haftung zu begrenzen.",
  },
  {
    id: 7,
    iconName: faPaperPlane,
    headline: "Versandt",
    headlineWhileOpen: (
      <span>
        Bietet Ihr Verleih einen <StyledSpan>Versandservice</StyledSpan> an?
      </span>
    ),
    paragraphWhileOpen:
      "Ja, wir bieten einen Versandservice an. Die Ausrüstung wird sicher verpackt und zu Ihrer gewünschten Adresse versendet.",
  },
  {
    id: 8,
    iconName: faHandshakeSimple,
    headline: "Langfristiger Verleih",
    headlineWhileOpen: (
      <span>
        Bietet Ihr Verleih <StyledSpan>langfristige</StyledSpan> Ausleihen an?
      </span>
    ),
    paragraphWhileOpen:
      "Ja, wir bieten spezielle Tarife für langfristige Ausleihen sowie Rabatte für wiederholte Buchungen an. Kontaktieren Sie uns für maßgeschneiderte Angebote.",
  },
];

export const CameraProductList = [
  {
    id: 0,
    title: "Canon",
    model: "EOS C70",
    image: "/Productpictures/Productcard/Camera/Canon EOS C70.jpeg",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Canon EOS C70/Canon EOS C70.jpeg",
      "/Productpictures/Productshow/Camera/Canon EOS C70/Canon EOS C70 2.webp",
      "/Productpictures/Productshow/Camera/Canon EOS C70/Canon EOS C70 3.webp",
      "/Productpictures/Productshow/Camera/Canon EOS C70/Canon EOS C70 4.webp",
    ],
    category: "DSLR",
    specialization: "FilmProduktion",
    price: 89,
    onsale: false,
    available: true,
    highlights: ["4K Videoaufnahmen", "Dual Pixel CMOS AF", "Canon Log 2 & 3"],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 1,
    title: "Fujifilm",
    model: "X-H2",
    image: "/Productpictures/Productcard/Camera/Fujifilm X-H2.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Fujifilm X-H2/Fujifilm X-H2.webp",
      "/Productpictures/Productshow/Camera/Fujifilm X-H2/Fujifilm X-H2 2.webp",
      "/Productpictures/Productshow/Camera/Fujifilm X-H2/Fujifilm X-H2 3.webp",
      "/Productpictures/Productshow/Camera/Fujifilm X-H2/Fujifilm X-H2 4.webp",
    ],
    category: "DSLR",
    specialization: "Fotoproduktion",
    price: 29,
    onsale: false,
    available: true,
    highlights: [
      "26.1 Megapixel Sensor",
      "5-Achsen Bildstabilisierung",
      "4K Videoaufnahmen",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Canon",
    model: "Eos 250D",
    image: "/Productpictures/Productcard/Camera/Canon Eos 250D.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Canon Eos 250D/Canon Eos 250D.webp",
      "/Productpictures/Productshow/Camera/Canon Eos 250D/Canon Eos 250D 2.webp",
      "/Productpictures/Productshow/Camera/Canon Eos 250D/Canon Eos 250D 3.webp",
      "/Productpictures/Productshow/Camera/Canon Eos 250D/Canon Eos 250D 4.webp",
      "/Productpictures/Productshow/Camera/Canon Eos 250D/Canon Eos 250D 5.webp",
    ],
    category: "DSLR",
    specialization: "Filmproduktion",
    price: 9,
    onsale: false,
    available: false,
    highlights: [
      "24.1 Megapixel Sensor",
      "4K Videoaufnahmen",
      "Dual Pixel CMOS AF",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegelreflexkamera",
          age: "2019",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "22,3 x 14,9 mm",
          effectivepixel: "24,1 Megapixel",
          totalpixel: "25,8 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-25600",
          isoextended: "100-51200",
          shutter: "1/4000 - 30 Sek.",
          burst: "5 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Ja",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "MP4",
          resolution: "4K",
          framerate: "24p/25p",
          codec: "H.264",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "TFT LCD",
          displaysize: "3 Zoll",
          displayresolution: "1.040.000 Pixel",
          displayart: "vari-angle",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "Optisch (Pentaspiegel)",
          viewfindersize: "0.54 Zoll",
          viewfinderresolution: "2.360.000 Pixel",
          viewfindercover: "95%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Nein",
          nfc: "Nein",
          gps: "Nein",
          usb: "Micro-USB",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Sony",
    model: "Alpha 7C",
    image: "/Productpictures/Productcard/Camera/Sony Alpha a7C.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Sony Alpha a7C/Sony Alpha a7C.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha a7C/Sony Alpha a7C 2.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha a7C/Sony Alpha a7C 3.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha a7C/Sony Alpha a7C 4.webp",
    ],
    category: "DSLR",
    specialization: "Fotoproduktion",
    price: 39,
    onsale: false,
    available: false,
    highlights: [
      "24.2 Megapixel Sensor",
      "4K Videoaufnahmen",
      "5-Achsen Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Canon",
    model: "EOS R5C",
    image: "/Productpictures/Productcard/Camera/Canon EOS R5C.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Canon EOS R5C/Canon EOS R5C.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R5C/Canon EOS R5C 2.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R5C/Canon EOS R5C 3.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R5C/Canon EOS R5C 4.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R5C/Canon EOS R5C 5.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R5C/Canon EOS R5C 6.webp",
    ],
    category: "DSLR",
    specialization: "Filmproduktion",
    price: 49,
    onsale: false,
    available: true,
    highlights: [
      "45 Megapixel Sensor",
      "8K Videoaufnahmen",
      "Dual Pixel CMOS AF II",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Canon",
    model: "EOS R10",
    image: "/Productpictures/Productcard/Camera/Canon EOS R10.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Canon EOS R10/Canon EOS R10.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R10/Canon EOS R10 2.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R10/Canon EOS R10 3.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R10/Canon EOS R10 4.webp",
      "/Productpictures/Productshow/Camera/Canon EOS R10/Canon EOS R10 5.webp",
    ],
    category: "DSLR",
    specialization: "Filmproduktion",
    price: 39,
    onsale: false,
    available: false,
    highlights: [
      "24 Megapixel Sensor",
      "4K Videoaufnahmen",
      "Dual Pixel CMOS AF II",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Sony",
    model: "Alpha ZV-E1",
    image: "/Productpictures/Productcard/Camera/Sony Alpha ZV-E1.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Sony Alpha ZV-E1/Sony Alpha ZV-E1.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha ZV-E1/Sony Alpha ZV-E1 2.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha ZV-E1/Sony Alpha ZV-E1 3.webp",
    ],
    category: "DSLR",
    specialization: "Fotoproduktion",
    price: 89,
    onsale: true,
    onsaleprice: 79,
    available: true,
    highlights: [
      "24.2 Megapixel Sensor",
      "4K Videoaufnahmen",
      "3-Zoll-Touchscreen",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Sony",
    model: "Alpha 7 III",
    image: "/Productpictures/Productcard/Camera/Sony Alpha 7 III.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Sony Alpha 7 III/Sony Alpha 7 III.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha 7 III/Sony Alpha 7 III 2.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha 7 III/Sony Alpha 7 III 3.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha 7 III/Sony Alpha 7 III 4.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha 7 III/Sony Alpha 7 III 5.webp",
    ],
    category: "DSLR",
    specialization: "Filmproduktion",
    price: 59,
    onsale: false,
    available: true,
    highlights: [
      "24.2 Megapixel Sensor",
      "4K Videoaufnahmen",
      "5-Achsen Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 8,
    title: "Nikon",
    model: "Z7 II",
    image: "/Productpictures/Productcard/Camera/Nikon Z7 II.webp",
    imageslideshow: [
      "Productpictures/Productshow/Camera/Nikon Z7 II/Nikon Z7 II.webp",
      "Productpictures/Productshow/Camera/Nikon Z7 II/Nikon Z7 II 2.webp",
      "Productpictures/Productshow/Camera/Nikon Z7 II/Nikon Z7 II 3.webp",
      "Productpictures/Productshow/Camera/Nikon Z7 II/Nikon Z7 II 4.webp",
    ],
    category: "DSLR",
    specialization: "Fotoproduktion",
    price: 69,
    onsale: false,
    available: true,
    highlights: [
      "45.7 Megapixel Sensor",
      "4K Videoaufnahmen",
      "5-Achsen Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 9,
    title: "Z-Cam",
    model: "E2",
    image: "/Productpictures/Productcard/Camera/Z-CAM E2-S6G.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Z-CAM E2-S6G/Z-CAM E2-S6G.webp",
      "/Productpictures/Productshow/Camera/Z-CAM E2-S6G/Z-CAM E2-S6G 2.webp",
      "/Productpictures/Productshow/Camera/Z-CAM E2-S6G/Z-CAM E2-S6G 3.webp",
    ],
    category: "DSLR",
    specialization: "Filmproduktion",
    price: 49,
    onsale: false,
    available: true,
    highlights: [
      "6K Videoaufnahmen",
      "5-Achsen Bildstabilisierung",
      "13 Blendenstufen Dynamikumfang",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 10,
    title: "Sony",
    model: "Alpha 9 II",
    image: "/Productpictures/Productcard/Camera/Sony ALPHA 9 II.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Sony ALPHA 9 II/Sony ALPHA 9 II.webp",
      "/Productpictures/Productshow/Camera/Sony ALPHA 9 II/Sony ALPHA 9 II 2.webp",
      "/Productpictures/Productshow/Camera/Sony ALPHA 9 II/Sony ALPHA 9 II 3.webp",
      "/Productpictures/Productshow/Camera/Sony ALPHA 9 II/Sony ALPHA 9 II 4.webp",
    ],
    category: "DSLR",
    specialization: "Filmproduktion",
    price: 39,
    onsale: false,
    available: true,
    highlights: [
      "24.2 Megapixel Sensor",
      "4K Videoaufnahmen",
      "5-Achsen Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 11,
    title: "Sony",
    model: "Alpha 6400",
    image: "/Productpictures/Productcard/Camera/Sony Alpha 6400.jpg",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Sony Alpha 6400/Sony Alpha 6400.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha 6400/Sony Alpha 6400 2.jpg",
      "/Productpictures/Productshow/Camera/Sony Alpha 6400/Sony Alpha 6400 3.webp",
      "/Productpictures/Productshow/Camera/Sony Alpha 6400/Sony Alpha 6400 4.jpg",
    ],
    category: "DSLR",
    specialization: "Fotoproduktion",
    price: 49,
    onsale: false,
    available: true,
    highlights: [
      "24.2 Megapixel Sensor",
      "4K Videoaufnahmen",
      "5-Achsen Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 12,
    title: "Sony",
    model: "FX6",
    image: "/Productpictures/Productcard/Camera/Sony FX6.jpg",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Sony FX6/Sony FX6.jpg",
      "/Productpictures/Productshow/Camera/Sony FX6/Sony FX6 2.jpg",
      "/Productpictures/Productshow/Camera/Sony FX6/Sony FX6 3.jpg",
      "/Productpictures/Productshow/Camera/Sony FX6/Sony FX6 4.jpg",
      "/Productpictures/Productshow/Camera/Sony FX6/Sony FX6 5.jpg",
    ],
    category: "DSLR",
    specialization: "Filmproduktion",
    price: 129,
    onsale: true,
    onsaleprice: 119,
    available: true,
    highlights: [
      "10.2 Megapixel Sensor",
      "4K Videoaufnahmen",
      "5-Achsen Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 13,
    title: "Sony",
    model: "PXW-Z150",
    image: "/Productpictures/Productcard/Camera/Sony PXW-Z150.png",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Sony PXW-Z150/Sony PXW-Z150.png",
      "/Productpictures/Productshow/Camera/Sony PXW-Z150/Sony PXW-Z150.png",
      "/Productpictures/Productshow/Camera/Sony PXW-Z150/Sony PXW-Z150.png",
      "/Productpictures/Productshow/Camera/Sony PXW-Z150/Sony PXW-Z150.png",
      "/Productpictures/Productshow/Camera/Sony PXW-Z150/Sony PXW-Z150.png",
    ],
    category: "DSLR",
    specialization: "Filmproduktion",
    price: 189,
    onsale: false,
    available: true,
    highlights: [
      "20 Megapixel Sensor",
      "4K Videoaufnahmen",
      "5-Achsen Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
  {
    id: 14,
    title: "DJI",
    model: "Air 2S",
    image: "/Productpictures/Productcard/Camera/DJI Air 2S.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Drohne/DJI Air 2S/DJI Air 2S.webp",
      "/Productpictures/Productshow/Camera/Drohne/DJI Air 2S/DJI Air 2S 2.webp",
      "/Productpictures/Productshow/Camera/Drohne/DJI Air 2S/DJI Air 2S 3.webp",
      "/Productpictures/Productshow/Camera/Drohne/DJI Air 2S/DJI Air 2S 4.webp",
      "/Productpictures/Productshow/Camera/Drohne/DJI Air 2S/DJI Air 2S 5.webp",
    ],
    category: "Drohne",
    specialization: "Luftaufnahme",
    price: 39,
    onsale: false,
    available: true,
    highlights: [
      "1-Zoll CMOS-Sensor",
      "4K Videoaufnahmen",
      "OcuSync 3.0 Übertragungssystem",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Drohne",
          age: "2021",
          color: "Grau",
        },
      },
      {
        section: "Abmessungen und Gewicht",
        details: {
          dimensions:
            "Folded: 180×97×77 mm (L×W×H) Unfolded: 183×253×77 mm (L×W×H)",
          weight: "595 g",
        },
      },
      {
        section: "Flugleistung",
        details: {
          maxflighttime: "Bis zu 31 Minuten",
          maxspeed: "19 m/s (S-Modus), 12 m/s (N-Modus), 5 m/s (C-Modus)",
          maxaltitude: "5000 m über dem Meeresspiegel",
          maxwindresistance: "8,5-10,5 m/s",
        },
      },
      {
        section: "Kamera",
        details: {
          sensor: "1-Zoll CMOS",
          resolution: "20 Megapixel",
          videoresolution:
            "5,4K bei 30 fps, 4K bei 60 fps, 2,7K bei 60 fps, 1080p bei 60 fps",
          fov: "88°",
        },
      },
      {
        section: "Gimbal",
        details: {
          stabilization: "3-Achsen (Neigung, Rollen, Gier)",
          tilt: "-90° bis 24°",
          roll: "-45° bis 45°",
          yaw: "-85° bis 85°",
        },
      },
      {
        section: "Fernsteuerung",
        details: {
          transmission: "O3 (OcuSync 3.0)",
          maxtransmissiondistance: "12 km (FCC), 8 km (CE, SRRC, MIC)",
          battery: "5200 mAh (fest verbaut)",
          operatingfrequency: "2,4 GHz/5,8 GHz",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          gps: "Ja",
          usb: "USB-C",
        },
      },
    ],
  },
  {
    id: 15,
    title: "DJI",
    model: "FPV",
    image: "/Productpictures/Productcard/Camera/DJI FPV Combo Drohne.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Drohne/DJI FPV Combo Drohne/DJI FPV Combo Drohne.webp",
      "/Productpictures/Productshow/Camera/Drohne/DJI FPV Combo Drohne/DJI FPV Combo Drohne 2.webp",
      "/Productpictures/Productshow/Camera/Drohne/DJI FPV Combo Drohne/DJI FPV Combo Drohne 3.webp",
      "/Productpictures/Productshow/Camera/Drohne/DJI FPV Combo Drohne/DJI FPV Combo Drohne 4.webp",
      "/Productpictures/Productshow/Camera/Drohne/DJI FPV Combo Drohne/DJI FPV Combo Drohne 5.webp",
    ],
    category: "Drohne",
    specialization: "Luftaufnahme",
    price: 69,
    onsale: false,
    available: true,
    highlights: [
      "4K Videoaufnahmen",
      "OcuSync 3.0 Übertragungssystem",
      "Intelligent Flight Batterie",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "FPV-Drohne",
          age: "2021",
          color: "Schwarz",
        },
      },
      {
        section: "Abmessungen und Gewicht",
        details: {
          dimensions:
            "255 × 312 × 127 mm (ohne Propeller) 178 × 232 × 127 mm (mit Propeller)",
          weight: "795 g (ohne Propeller) 795 g (mit Propeller)",
        },
      },
      {
        section: "Flugleistung",
        details: {
          maxflighttime:
            "Bis zu 20 Minuten (bei konstanter 40 km/h Geschwindigkeit)",
          maxspeed: "140 km/h (Manuell), 39 km/h (Stabilisiert)",
          maxaltitude: "6000 m über dem Meeresspiegel",
          maxwindresistance: "39-49 km/h (Sportmodus)",
        },
      },
      {
        section: "Kamera",
        details: {
          sensor: "1/2.3-Zoll CMOS",
          resolution: "12 Megapixel",
          videoresolution: "4K bei 60 fps, 1080p bei 120 fps",
          fov: "150°",
        },
      },
      {
        section: "Gimbal",
        details: {
          stabilization: "3-Achsen (Neigung, Rollen, Gier)",
          tilt: "-65° bis 70°",
          roll: "-45° bis 45°",
          yaw: "-54° bis 54°",
        },
      },
      {
        section: "Fernsteuerung",
        details: {
          transmission: "OcuSync 3.0",
          maxtransmissiondistance: "10 km (FCC), 6 km (CE, SRRC, MIC)",
          battery: "9,7 V, 3000 mAh (fest verbaut)",
          operatingfrequency: "2,4 GHz/5,8 GHz",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          gps: "Ja",
          usb: "USB-C",
        },
      },
    ],
  },
  {
    id: 16,
    title: "DJI",
    model: "Mini 2 SE",
    image:
      "/Productpictures/Productcard/Camera/DJI Mini 2 SE Fly More Combo.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Camera/Drohne/DJI Mini 2 SE Fly More Combo/DJI Mini 2 SE Fly More Combo.webp",
      "/Productpictures/Productcard/Camera/Drohne/DJI Mini 2 SE Fly More Combo/DJI Mini 2 SE Fly More Combo 2.webp",
      "/Productpictures/Productcard/Camera/Drohne/DJI Mini 2 SE Fly More Combo/DJI Mini 2 SE Fly More Combo 3.webp",
      "/Productpictures/Productcard/Camera/Drohne/DJI Mini 2 SE Fly More Combo/DJI Mini 2 SE Fly More Combo 4.webp",
      "/Productpictures/Productcard/Camera/Drohne/DJI Mini 2 SE Fly More Combo/DJI Mini 2 SE Fly More Combo 5.webp",
    ],
    category: "Drohne",
    specialization: "Luftaufnahme",
    price: 29,
    onsale: false,
    available: true,
    highlights: [
      "4K Videoaufnahmen",
      "OcuSync 3.0 Übertragungssystem",
      "Intelligent Flight Batterie",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Drohne",
          age: "2024",
          color: "Grau",
        },
      },
      {
        section: "Abmessungen und Gewicht",
        details: {
          dimensions:
            "Ungefaltet: 160 × 202 × 55 mm (L × B × H) Gefaltet: 138 × 81 × 58 mm (L × B × H)",
          weight: "249 g",
        },
      },
      {
        section: "Flugleistung",
        details: {
          maxflighttime: "Bis zu 31 Minuten",
          maxspeed: "16 m/s (S-Modus), 8 m/s (P-Modus), 4 m/s (C-Modus)",
          maxaltitude: "4000 m über dem Meeresspiegel",
          maxwindresistance: "8,5-10,5 m/s",
        },
      },
      {
        section: "Kamera",
        details: {
          sensor: "1/2,3-Zoll CMOS",
          resolution: "12 Megapixel",
          videoresolution:
            "4K bei 24/25/30 fps, 2,7K bei 24/25/30 fps, 1080p bei 24/25/30/48/50/60 fps",
          zoom: "2x digital (nur 1080p)",
        },
      },
      {
        section: "Gimbal",
        details: {
          stabilization: "3-Achsen (Neigung, Rollen, Gier)",
          tilt: "-110° bis 35°",
          roll: "-35° bis 35°",
          yaw: "-20° bis 20°",
        },
      },
      {
        section: "Fernsteuerung",
        details: {
          transmission: "OcuSync 2.0",
          maxtransmissiondistance: "10 km",
          battery: "5200 mAh (fest verbaut)",
          operatingfrequency: "2,4 GHz/5,8 GHz",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          gps: "Ja",
          usb: "USB-C",
        },
      },
    ],
  },
  {
    id: 17,
    title: "GoPro",
    model: "Hero 9 Black",
    image: "/Productpictures/Productcard/Camera/GoPro HERO 9 Black.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 9/GoPro HERO 9 Black.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 9/GoPro HERO 9 Black 2.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 9/GoPro HERO 9 Black 3.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 9/GoPro HERO 9 Black 4.webp",
    ],
    category: "GoPro",
    specialization: "Outdooraufnahme",
    price: 29,
    onsale: false,
    available: true,
    highlights: [
      "20 Megapixel Sensor",
      "4K Videoaufnahmen",
      "HyperSmooth 3.0 Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Actionkamera",
          age: "2023",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "1/2.3 Zoll",
          effectivepixel: "20 Megapixel",
          totalpixel: "22 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-6400",
          isoextended: "N/A",
          shutter: "1/2000 - 1 Sek.",
          burst: "30 Bilder/Sek.",
          exposure: "N/A",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "5K",
          framerate: "60p",
          codec: "H.264, H.265",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "2 Zoll",
          displayresolution: "320x240 Pixel",
          displayart: "fest verbaut",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Nein",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Nein",
        },
      },
    ],
  },
  {
    id: 18,
    title: "GoPro",
    model: "Hero 10 Black",
    image: "/Productpictures/Productcard/Camera/GoPro HERO 10 Black.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 10/GoPro HERO 10 Black.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 10/GoPro HERO 10 Black 2.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 10/GoPro HERO 10 Black 3.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 10/GoPro HERO 10 Black 4.webp",
    ],
    category: "GoPro",
    specialization: "Outdooraufnahme",
    price: 39,
    onsale: false,
    available: true,
    highlights: [
      "23.6 Megapixel Sensor",
      "4K Videoaufnahmen",
      "HyperSmooth 4.0 Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Actionkamera",
          age: "2023",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "1/2.3 Zoll",
          effectivepixel: "20 Megapixel",
          totalpixel: "22 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-6400",
          isoextended: "N/A",
          shutter: "1/2000 - 1 Sek.",
          burst: "30 Bilder/Sek.",
          exposure: "N/A",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "5K",
          framerate: "60p",
          codec: "H.264, H.265",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "2 Zoll",
          displayresolution: "320x240 Pixel",
          displayart: "fest verbaut",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Nein",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Nein",
        },
      },
    ],
  },
  {
    id: 19,
    title: "GoPro",
    model: "Hero 11 Black",
    image: "/Productpictures/Productcard/Camera/GoPro HERO 11 Black.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 11/GoPro HERO 11 Black.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 11/GoPro HERO 11 Black 2.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 11/GoPro HERO 11 Black 3.webp",
      "/Productpictures/Productcard/Camera/Go-Pros/GoPro HERO 11/GoPro HERO 11 Black 4.webp",
    ],
    category: "GoPro",
    specialization: "Outdooraufnahme",
    price: 49,
    onsale: false,
    available: true,
    highlights: [
      "23.6 Megapixel Sensor",
      "4K Videoaufnahmen",
      "HyperSmooth 5.0 Bildstabilisierung",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Actionkamera",
          age: "2023",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "1/2.3 Zoll",
          effectivepixel: "20 Megapixel",
          totalpixel: "22 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-6400",
          isoextended: "N/A",
          shutter: "1/2000 - 1 Sek.",
          burst: "30 Bilder/Sek.",
          exposure: "N/A",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "5K",
          framerate: "60p",
          codec: "H.264, H.265",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "2 Zoll",
          displayresolution: "320x240 Pixel",
          displayart: "fest verbaut",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Nein",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Nein",
        },
      },
    ],
  },
  {
    id: 20,
    title: "Insta360",
    model: "X3",
    image: "/Productpictures/Productcard/Camera/Insta360 X3.webp",
    imageslideshow: [
      "/Productpictures/Productshow/Camera/Go-Pros/Insta360 X3/Insta360 X3.webp",
      "/Productpictures/Productshow/Camera/Go-Pros/Insta360 X3/Insta360 X3 2.webp",
      "/Productpictures/Productshow/Camera/Go-Pros/Insta360 X3/Insta360 X3 3.webp",
    ],
    category: "GoPro",
    specialization: "Freizeitaufnahme",
    price: 19,
    onsale: false,
    available: true,
    highlights: [
      "4K Videoaufnahmen",
      "FlowState Bildstabilisierung",
      "IPX8 Wasserdicht",
    ],
    technicaldetails: [
      {
        section: "Allgemein",
        details: {
          producttype: "Spiegellose Systemkamera",
          age: "2020",
          color: "Schwarz",
        },
      },
      {
        section: "Sensor",
        details: {
          sensorchip: "CMOS",
          sensorformat: "24x36mm",
          effectivepixel: "45 Megapixel",
          totalpixel: "47 Megapixel",
        },
      },
      {
        section: "Elektronik",
        details: {
          iso: "100-51200",
          isoextended: "50-819200",
          shutter: "1/8000 - 30 Sek.",
          burst: "20 Bilder/Sek.",
          exposure: "+/- 5 LW",
          flash: "Nein",
        },
      },
      {
        section: "Video",
        details: {
          videoformat: "H.264, H.265, MP4",
          resolution: "4K",
          framerate: "60p",
          codec: "All-I, IPB",
          audio: "Stereo",
        },
      },
      {
        section: "Monitor",
        details: {
          displaytype: "Touchscreen",
          displaysize: "3.2 Zoll",
          displayresolution: "2.100.000 Pixel",
          displayart: "klappbar",
        },
      },
      {
        section: "Viewfinder",
        details: {
          viewfindertype: "OLED",
          viewfindersize: "0.5 Zoll",
          viewfinderresolution: "3.690.000 Pixel",
          viewfindercover: "100%",
        },
      },
      {
        section: "Verbindungen",
        details: {
          wlan: "Ja",
          bluetooth: "Ja",
          nfc: "Ja",
          gps: "Ja",
          usb: "USB-C",
          hdmi: "Ja",
          microphone: "Ja",
          headphone: "Ja",
        },
      },
    ],
  },
];

export const LensProductList = [
  {
    id: 21,
    title: "Canon",
    model: "RF 24-70mm f/2.8L IS US",
    image:
      "/Productpictures/Productcard/Lens/Canon RF 24-70mm f 2.8L IS USM.jpg",
    imageslideshow: [
      "/Productpictures/Productcard/Lens/Canon RF 24-70mm f 2.8L IS USM.jpg",
    ],
    category: "Objektiv",
    specialization: "Fotografie",
    price: 59,
    onsale: false,
    available: true,
    highlights: ["24-70mm Brennweite", "f/2.8 Blende", "Bildstabilisierung"],
    technicaldetails: [
      {
        section: "Objektiv",
        details: {
          model: "Canon RF 24-70mm f/2.8L IS US",
          lensmount: "Canon RF",
          focallength: "24-70mm",
          aperture: "f/2.8",
          lensconstruction: "21 elements in 15 groups",
          minimumfocusdistance: "0.21 m",
          maximummagnification: "0.3x",
          diaphragmblades: "9, rounded",
          imagestabilization: "Ja",
          filterthread: "82 mm",
        },
      },
      {
        section: "Bildqualität",
        details: {
          autofocus: "Ja",
          manualfocus: "Ja",
          autofocusmotor: "Dual Nano USM",
          imagequality: "L-Serie",
          specialcoatings: "Air Sphere Coating (ASC), Fluorine Coating",
        },
      },
      {
        section: "Physikalische Merkmale",
        details: {
          weathersealing: "Ja",
          dimensions: "88,5 x 125,7 mm",
          weight: "900 g",
        },
      },
      {
        section: "Lieferumfang",
        details: {
          inthebox:
            "Canon RF 24-70mm f/2.8L IS US Objektiv, Objektivdeckel, Objektivrückdeckel, Gegenlichtblende EW-88E, Objektivbeutel LP1424",
        },
      },
    ],
  },
  {
    id: 22,
    title: "Sony",
    model: "FE 24-70mm f/2.8 G",
    image: "/Productpictures/Productcard/Lens/Sony FE 24-70mm f 2.8 GM.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Lens/Sony FE 24-70mm f 2.8 GM.webp",
    ],
    category: "Objektiv",
    specialization: "Fotografie",
    price: 49,
    onsale: false,
    available: true,
    highlights: ["24-70mm Brennweite", "f/2.8 Blende", "Bildstabilisierung"],
    technicaldetails: [
      {
        section: "Objektiv",
        details: {
          title: "Sony",
          model: "FE 24-70mm f/2.8 G",
          lensmount: "Sony E-Mount",
          focallength: "24-70mm",
          aperture: "f/2.8",
          lensconstruction: "18 elements in 14 groups",
          minimumfocusdistance: "0.38 m",
          maximummagnification: "0.24x",
          diaphragmblades: "9, rounded",
          imagestabilization: "Nein",
          filterthread: "82 mm",
        },
      },
      {
        section: "Bildqualität",
        details: {
          autofocus: "Ja",
          manualfocus: "Ja",
          autofocusmotor: "Direct Drive SSM",
          imagequality: "G-Serie",
          specialcoatings: "Nano AR Coating",
        },
      },
      {
        section: "Physikalische Merkmale",
        details: {
          weathersealing: "Ja",
          dimensions: "87,6 x 136 mm",
          weight: "886 g",
        },
      },
      {
        section: "Lieferumfang",
        details: {
          inthebox:
            "Sony FE 24-70mm f/2.8 G Objektiv, Objektivdeckel, Objektivrückdeckel, Gegenlichtblende, Objektivtasche",
        },
      },
    ],
  },

  {
    id: 23,
    title: "Nikon",
    model: "Z 24-70mm f/2.8 S",
    image: "/Productpictures/Productcard/Lens/Nikon Z 24-70mm f 2.8 S 2.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Lens/Nikon Z 24-70mm f 2.8 S 2.webp",
    ],
    category: "Objektiv",
    specialization: "Fotografie",
    price: 39,
    onsale: false,
    available: true,
    highlights: ["24-70mm Brennweite", "f/2.8 Blende", "Bildstabilisierung"],
    technicaldetails: [
      {
        section: "Objektiv",
        details: {
          title: "Nikon",
          model: "Z 24-70mm f/2.8 S",
          lensmount: "Nikon Z-Bajonett",
          focallength: "24-70mm",
          aperture: "f/2.8",
          lensconstruction: "17 elements in 15 groups",
          minimumfocusdistance: "0.38 m",
          maximummagnification: "0.28x",
          diaphragmblades: "9, rounded",
          imagestabilization: "Ja",
          filterthread: "82 mm",
        },
      },
      {
        section: "Bildqualität",
        details: {
          autofocus: "Ja",
          manualfocus: "Ja",
          autofocusmotor: "STM (Schrittmotor)",
          imagequality: "S-Line",
          specialcoatings: "Nano Crystal Coat, ARNEO Coat",
        },
      },
      {
        section: "Physikalische Merkmale",
        details: {
          weathersealing: "Ja",
          dimensions: "89 x 126 mm",
          weight: "805 g",
        },
      },
      {
        section: "Lieferumfang",
        details: {
          inthebox:
            "Nikon Z 24-70mm f/2.8 S Objektiv, Objektivdeckel, Objektivrückdeckel, Gegenlichtblende HB-87, Objektivtasche CL-C2",
        },
      },
    ],
  },
  {
    id: 24,
    title: "Sigma",
    model: "24-70mm f/2.8 DG DN Art",
    image:
      "/Productpictures/Productcard/Lens/Sigma 24-70mm f 2.8 DG DN Art.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Lens/Sigma 24-70mm f 2.8 DG DN Art.webp",
    ],
    category: "Objektiv",
    specialization: "Fotografie",
    price: 29,
    onsale: false,
    available: true,
    highlights: ["24-70mm Brennweite", "f/2.8 Blende", "Bildstabilisierung"],
    technicaldetails: [
      {
        section: "Objektiv",
        details: {
          title: "Sigma",
          model: "24-70mm f/2.8 DG DN Art",
          lensmount: "L-Mount, Sony E-Mount",
          focallength: "24-70mm",
          aperture: "f/2.8",
          lensconstruction: "19 elements in 15 groups",
          minimumfocusdistance: "0.18 m",
          maximummagnification: "0.34x",
          diaphragmblades: "11, rounded",
          imagestabilization: "Nein",
          filterthread: "82 mm",
        },
      },
      {
        section: "Bildqualität",
        details: {
          autofocus: "Ja",
          manualfocus: "Ja",
          autofocusmotor: "Hyper Sonic Motor (HSM)",
          imagequality: "DG (Digitaler Griff)",
          specialcoatings: "Super Multi-Layer Coating, Nano Porous Coating",
        },
      },
      {
        section: "Physikalische Merkmale",
        details: {
          weathersealing: "Ja",
          dimensions: "87,8 x 122,9 mm",
          weight: "835 g",
        },
      },
      {
        section: "Lieferumfang",
        details: {
          inthebox:
            "Sigma 24-70mm f/2.8 DG DN Art Objektiv, Objektivdeckel, Objektivrückdeckel, Gegenlichtblende LH878-03, Stativfuß",
        },
      },
    ],
  },
  {
    id: 25,
    title: "Tamron",
    model: "24-70mm f/2.8 Di VC USD G2",
    image: "/Productpictures/Productcard/Lens/Tamron 24-70mm.webp",
    imageslideshow: ["/Productpictures/Productcard/Lens/Tamron 24-70mm.webp"],
    category: "Objektiv",
    specialization: "Filmproduktion",
    price: 19,
    onsale: true,
    onsaleprice: 14,
    available: true,
    highlights: ["24-70mm Brennweite", "f/2.8 Blende", "Bildstabilisierung"],
    technicaldetails: [
      {
        section: "Objektiv",
        details: {
          title: "Tamron",
          model: "24-70mm f/2.8 Di VC USD G2",
          lensmount: "Canon EF, Nikon F",
          focallength: "24-70mm",
          aperture: "f/2.8",
          lensconstruction: "17 elements in 12 groups",
          minimumfocusdistance: "0.38 m",
          maximummagnification: "0.21x",
          diaphragmblades: "9, rounded",
          imagestabilization: "Ja",
          filterthread: "82 mm",
        },
      },
      {
        section: "Bildqualität",
        details: {
          autofocus: "Ja",
          manualfocus: "Ja",
          autofocusmotor: "Ultrasonic Silent Drive (USD)",
          imagequality: "Di (Digitally Integrated Design)",
          specialcoatings: "eBAND Coating, BBAR Coating",
        },
      },
      {
        section: "Physikalische Merkmale",
        details: {
          weathersealing: "Ja",
          dimensions: "88,4 x 111 mm",
          weight: "905 g",
        },
      },
      {
        section: "Lieferumfang",
        details: {
          inthebox:
            "Tamron 24-70mm f/2.8 Di VC USD G2 Objektiv, Objektivdeckel, Objektivrückdeckel, Gegenlichtblende",
        },
      },
    ],
  },
  {
    id: 26,
    title: "Canon",
    model: "RF 24-70mm f/2.8L IS USM",
    image: "/Productpictures/Productcard/Lens/Nikon Z 24-70mm f 2.8 S 2.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Lens/Nikon Z 24-70mm f 2.8 S 2.webp",
    ],
    category: "Objektiv",
    specialization: "Filmproduktion",
    price: 59,
    onsale: false,
    available: true,
    highlights: ["24-70mm Brennweite", "f/2.8 Blende", "Bildstabilisierung"],
    technicaldetails: [
      {
        section: "Objektiv",
        details: {
          title: "Canon",
          model: "RF 24-70mm f/2.8L IS USM",
          lensmount: "Canon RF",
          focallength: "24-70mm",
          aperture: "f/2.8",
          lensconstruction: "21 elements in 15 groups",
          minimumfocusdistance: "0.21 m",
          maximummagnification: "0.3x",
          diaphragmblades: "9, rounded",
          imagestabilization: "Ja",
          filterthread: "82 mm",
        },
      },
      {
        section: "Bildqualität",
        details: {
          autofocus: "Ja",
          manualfocus: "Ja",
          autofocusmotor: "Nano USM",
          imagequality: "L-Serie",
          specialcoatings: "Air Sphere Coating (ASC), Fluorine Coating",
        },
      },
      {
        section: "Physikalische Merkmale",
        details: {
          weathersealing: "Ja",
          dimensions: "88,5 x 125,7 mm",
          weight: "900 g",
        },
      },
      {
        section: "Lieferumfang",
        details: {
          inthebox:
            "Canon RF 24-70mm f/2.8L IS USM Objektiv, Objektivdeckel, Objektivrückdeckel, Gegenlichtblende EW-88F, Objektivtasche LP1424",
        },
      },
    ],
  },
  {
    id: 27,
    title: "Sony",
    model: "FE 24-70mm f/2.8 G2X",
    image: "/Productpictures/Productcard/Lens/Sony FE 14mm F 1.8 GM.webp",
    imageslideshow: [
      "/Productpictures/Productcard/Lens/Sony FE 14mm F 1.8 GM.webp",
    ],
    category: "Objektiv",
    specialization: "Filmproduktion",
    price: 49,
    onsale: false,
    available: true,
    highlights: ["24-70mm Brennweite", "f/2.8 Blende", "Bildstabilisierung"],
    technicaldetails: [
      {
        section: "Objektiv",
        details: {
          title: "Sony",
          model: "FE 24-70mm f/2.8 G2X",
          lensmount: "Sony E-Mount",
          focallength: "24-70mm",
          aperture: "f/2.8",
          lensconstruction: "17 elements in 14 groups",
          minimumfocusdistance: "0.38 m",
          maximummagnification: "0.24x",
          diaphragmblades: "9, rounded",
          imagestabilization: "Ja",
          filterthread: "82 mm",
        },
      },
      {
        section: "Bildqualität",
        details: {
          autofocus: "Ja",
          manualfocus: "Ja",
          autofocusmotor: "XD Linear Motor",
          imagequality: "G-Serie",
          specialcoatings: "Nano AR Coating",
        },
      },
      {
        section: "Physikalische Merkmale",
        details: {
          weathersealing: "Ja",
          dimensions: "87,6 x 136 mm",
          weight: "887 g",
        },
      },
      {
        section: "Lieferumfang",
        details: {
          inthebox:
            "Sony FE 24-70mm f/2.8 G2X Objektiv, Objektivdeckel, Objektivrückdeckel, Gegenlichtblende, Objektivtasche",
        },
      },
    ],
  },
];

export const LightProductList = [
  {
    id: 28,
    title: "Aputure",
    model: "120D Mark II",
    image:
      "/Productpictures/Productcard/Light/godox-es45-led-e-sport-panel 3.jpg",
    imageslideshow: [
      "/Productpictures/Productcard/Light/godox-es45-led-e-sport-panel 3.jpg",
    ],
    category: "Lichter",
    specialization: "Filmsetbelichtung",
    price: 49,
    onsale: false,
    available: true,
    highlights: ["120W Leistung", "5600K Farbtemperatur", "CRI 96+"],
  },
  {
    id: 29,
    title: "Godox",
    model: "SL-60W",
    image:
      "/Productpictures/Productcard/Light/godox-sl60iibi-videoleuchte-2800-6500k.jpg",
    imageslideshow: [
      "/Productpictures/Productcard/Light/godox-sl60iibi-videoleuchte-2800-6500k.jpg",
    ],
    category: "Lichter",
    specialization: "Fotobelichtung",
    price: 39,
    onsale: false,
    available: true,
    highlights: ["60W Leistung", "5600K Farbtemperatur", "CRI 96+"],
  },
  {
    id: 30,
    title: "Neewer",
    model: "660 LED Video Light",
    image:
      "/Productpictures/Productcard/Light/godox-es45-led-e-sport-panel 3.jpg",
    imageslideshow: [
      "/Productpictures/Productcard/Light/godox-es45-led-e-sport-panel 3.jpg",
    ],
    category: "Lichter",
    specialization: "Filmsetbelichtung",
    price: 29,
    onsale: false,
    available: true,
    highlights: ["660 LED Leuchten", "3200-5600K Farbtemperatur", "CRI 96+"],
  },
  {
    id: 31,
    title: "Aputure",
    model: "120D Mark I",
    image:
      "/Productpictures/Productcard/Light/godox-es45-led-e-sport-panel 3.jpg",
    imageslideshow: [
      "/Productpictures/Productcard/Light/godox-es45-led-e-sport-panel 3.jpg",
    ],
    category: "Lichter",
    specialization: "Filmsetbelichtung",
    price: 49,
    onsale: false,
    available: true,
    highlights: ["120W Leistung", "5600K Farbtemperatur", "CRI 96+"],
  },
  {
    id: 32,
    title: "Godox",
    model: "SL-60",
    image:
      "/Productpictures/Productcard/Light/godox-space-panel-p600bi-knowled-led 2.jpg",
    imageslideshow: [
      "/Productpictures/Productcard/Light/godox-space-panel-p600bi-knowled-led 2.jpg",
    ],
    category: "Lichter",
    specialization: "Filmsetbelichtung",
    price: 39,
    onsale: false,
    available: true,
    highlights: ["60W Leistung", "5600K Farbtemperatur", "CRI 96+"],
  },
];
