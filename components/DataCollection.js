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
    link: "",
  },
  {
    title: "Objektive",
    image: "/Categorycards/lense.jpg",
    link: "",
  },
  {
    title: "Lichter",
    image: "/Categorycards/light.jpg",
    link: "",
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
        Kann ich meine Reservierung <StyledSpan>stornieren oder ändern?</StyledSpan>
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
