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
    category: "DSLR",
    specialization: "FilmProduktion",
    price: "89,00 €",
    available: true,
  },
  {
    id: 1,
    title: "Fujifilm",
    model: "X-H2",
    image: "/Productpictures/Productcard/Camera/Fujifilm X-H2.webp",
    category: "DSLR",
    specialization: "Fotografie",
    price: "29,00 €",
    available: true,
  },
  {
    id: 2,
    title: "Canon",
    model: "Eos 250D",
    image: "/Productpictures/Productcard/Camera/Canon Eos 250D.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "09,00 €",
    available: false,
  },
  {
    id: 3,
    title: "Sony",
    model: "Alpha 7C",
    image: "/Productpictures/Productcard/Camera/Sony Alpha a7C.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "39,00 €",
    available: false,
  },
  {
    id: 4,
    title: "Canon",
    model: "EOS R5C",
    image: "/Productpictures/Productcard/Camera/Canon EOS R5C.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "49,00 €",
    available: true,
  },
  {
    id: 5,
    title: "Canon",
    model: "EOS R10",
    image: "/Productpictures/Productcard/Camera/Canon EOS R10.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "39,00 €",
    available: false,
  },
  {
    id: 6,
    title: "Sony",
    model: "Alpha ZV-E1",
    image: "/Productpictures/Productcard/Camera/Sony Alpha ZV-E1.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "89,00 €",
    available: true,
  },
  {
    id: 7,
    title: "Sony",
    model: "Alpha 7 III",
    image: "/Productpictures/Productcard/Camera/Sony Alpha 7 III.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "59,00 €",
    available: true,
  },
  {
    id: 8,
    title: "Nikon",
    model: "Z7 II",
    image: "/Productpictures/Productcard/Camera/Nikon Z7 II.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "69,00 €",
    available: true,
  },
  {
    id: 9,
    title: "Z-Cam",
    model: "E2",
    image: "/Productpictures/Productcard/Camera/Z-CAM E2-S6G.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "49,00 €",
    available: true,
  },
  {
    id: 10,
    title: "Sony",
    model: "Alpha 9 II",
    image: "/Productpictures/Productcard/Camera/Sony ALPHA 9 II.webp",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "39,00 €",
    available: true,
  },
  {
    id: 10,
    title: "Sony",
    model: "Alpha 6400",
    image: "/Productpictures/Productcard/Camera/Sony Alpha 6400.jpg",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "49,00 €",
    available: true,
  },
  {
    id: 11,
    title: "Sony",
    model: "FX6",
    image: "/Productpictures/Productcard/Camera/Sony FX6.jpg",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "129,00 €",
    available: true,
  },
  {
    id: 12,
    title: "Sony",
    model: "PXW-Z150",
    image: "/Productpictures/Productcard/Camera/Sony PXW-Z150.png",
    category: "DSLR",
    specialization: "Filmproduktion",
    price: "189,00 €",
    available: true,
  },
  {
    id: 13,
    title: "DJI",
    model: "Air 2S",
    image: "/Productpictures/Productcard/Camera/DJI Air 2S.webp",
    category: "Drohne",
    specialization: "Filmproduktion",
    price: "39,00 €",
    available: true,
  },
  {
    id: 14,
    title: "DJI",
    model: "FPV",
    image: "/Productpictures/Productcard/Camera/DJI FPV Combo Drohne.webp",
    category: "Drohne",
    specialization: "Filmproduktion",
    price: "69,00 €",
    available: true,
  },
  {
    id: 15,
    title: "DJI",
    model: "Mini 2 SE",
    image:
      "/Productpictures/Productcard/Camera/DJI Mini 2 SE Fly More Combo.webp",
    category: "Drohne",
    specialization: "Filmproduktion",
    price: "29,00 €",
    available: true,
  },
  {
    id: 16,
    title: "GoPro",
    model: "Hero 9 Black",
    image: "/Productpictures/Productcard/Camera/GoPro HERO 9 Black.webp",
    category: "GoPro",
    specialization: "Filmproduktion",
    price: "29,00 €",
    available: true,
  },
  {
    id: 17,
    title: "GoPro",
    model: "Hero 10 Black",
    image: "/Productpictures/Productcard/Camera/GoPro HERO 10 Black.webp",
    category: "GoPro",
    specialization: "Filmproduktion",
    price: "39,00 €",
    available: true,
  },
  {
    id: 17,
    title: "GoPro",
    model: "Hero 11 Black",
    image: "/Productpictures/Productcard/Camera/GoPro HERO 11 Black.webp",
    category: "GoPro",
    specialization: "Filmproduktion",
    price: "49,00 €",
    available: true,
  },
  {
    id: 18,
    title: "Insta360",
    model: "X3",
    image: "/Productpictures/Productcard/Camera/Insta360 X3.webp",
    category: "GoPro",
    specialization: "Filmproduktion",
    price: "19,00 €",
    available: true,
  },
];

export const LensProductList = [
  {
    id: 0,
    title: "Canon",
    model: "RF 24-70mm f/2.8L IS USM",
    image:
      "/Productpictures/Productcard/Lens/Canon RF 24-70mm f 2.8L IS USM.jpg",
    specialization: "FilmProduktion",
    price: "59,00 €",
    available: true,
  },
  {
    id: 1,
    title: "Sony",
    model: "FE 24-70mm f/2.8 GM",
    image: "/Productpictures/Productcard/Lens/Sony FE 24-70mm f 2.8 GM.webp",
    specialization: "FilmProduktion",
    price: "49,00 €",
    available: true,
  },
  {
    id: 2,
    title: "Nikon",
    model: "Z 24-70mm f/2.8 S",
    image: "/Productpictures/Productcard/Lens/Nikon Z 24-70mm f 2.8 S 2.webp",
    specialization: "FilmProduktion",
    price: "39,00 €",
    available: true,
  },
  {
    id: 3,
    title: "Sigma",
    model: "24-70mm f/2.8 DG DN Art",
    image:
      "/Productpictures/Productcard/Lens/Sigma 24-70mm f 2.8 DG DN Art.webp",
    specialization: "FilmProduktion",
    price: "29,00 €",
    available: true,
  },
  {
    id: 4,
    title: "Tamron",
    model: "24-70mm f/2.8 Di VC USD G2",
    image: "/Productpictures/Productcard/Lens/Tamron 24-70mm.webp",
    specialization: "FilmProduktion",
    price: "19,00 €",
    available: true,
  },
  {
    id: 5,
    title: "Canon",
    model: "RF 24-70mm f/2.8L IS USM",
    image: "/Productpictures/Productcard/Lens/Nikon Z 24-70mm f 2.8 S 2.webp",
    specialization: "FilmProduktion",
    price: "59,00 €",
    available: true,
  },
  {
    id: 6,
    title: "Sony",
    model: "FE 24-70mm f/2.8 GM",
    image: "/Productpictures/Productcard/Lens/Sony FE 14mm F 1.8 GM.webp",
    specialization: "FilmProduktion",
    price: "49,00 €",
    available: true,
  },
];

export const LightProductList = [
  {
    id: 0,
    title: "Aputure",
    model: "120D Mark II",
    image: "/Productpictures/Aputure120DMarkII.jpg",
    specialization: "FilmProduktion",
    price: "49,00 €",
    available: true,
  },
  {
    id: 1,
    title: "Godox",
    model: "SL-60W",
    image: "/Productpictures/GodoxSL60W.jpg",
    specialization: "FilmProduktion",
    price: "39,00 €",
    available: true,
  },
  {
    id: 2,
    title: "Neewer",
    model: "660 LED Video Light",
    image: "/Productpictures/Neewer660LEDVideoLight.jpg",
    specialization: "FilmProduktion",
    price: "29,00 €",
    available: true,
  },
  {
    id: 3,
    title: "Aputure",
    model: "120D Mark II",
    image: "/Productpictures/Aputure120DMarkII.jpg",
    specialization: "FilmProduktion",
    price: "49,00 €",
    available: true,
  },
  {
    id: 4,
    title: "Godox",
    model: "SL-60W",
    image: "/Productpictures/GodoxSL60W.jpg",
    specialization: "FilmProduktion",
    price: "39,00 €",
    available: true,
  },
];
