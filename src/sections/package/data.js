import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

export const packages = {
  monthly: [
    {
      id: 1,
      name: "Forfait gratuit",
      description: "Pour particuliers et professionnels en recherche d'emploi",
      buttonText: "Commencer l'essai gratuit",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Gestion des données personnelles",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Capacité à postuler aux differents offres d'emplois",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "Pour les entreprises et les startups",
      priceWithUnit: "$15",
      buttonText: "Ou commencez l'essai de 14 jours",
      anotherOption: "Ou commencez l'essai de 14 jours",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Administration du personnel",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Gestion de la paie et des déclarations sociales",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Gestion de la paie et des déclarations sociales",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Suggéré",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "Pour les grandes entreprises",
      priceWithUnit: "$24",
      buttonText: `Créer un compte`,
      anotherOption: `Ou commencez l'essai de 14 jours`,
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Gestion(Recrutement,paie,conges,taches)",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: `Intégrations complètes avec d'autres fonctionnalités d'administration`,
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Assistance technique toute l'année ",
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: "Forfait gratuit",
      description: "Pour particuliers et professionnels en recherche d'emploi",
      buttonText: "Commencer l'essai gratuit",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Gestion des données personnelles",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Capacité à postuler aux differents offres d'emplois",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "Pour les entreprises et les startups",
      priceWithUnit: "$25",
      buttonText: "Creer un compte",
      anotherOption: "Commencer l'essai gratuit",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Administration du personnel",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Gestion de la paie et des déclarations sociales",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Gestion de la paie et des déclarations sociales",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Suggested",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "For pro level developers",
      priceWithUnit: "$39",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder ",
          isAvailable: true,
        },
      ],
    },
  ],
};
