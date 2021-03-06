// Constants

import BuscaTuCoach from "../../assets/images/buscatucoach.jpg";
import FJComms from "../../assets/images/fjcomms.jpg";
import Iniciativa from "../../assets/images/iniciativa.jpg";
import Ecospend from "../../assets/images/ecospend.jpg";
import MareFish from "../../assets/images/marefish.jpg";
import Audience from "../../assets/images/audience.jpg";
import Auditorbot from "../../assets/images/auditorbot.jpg";


const projects = [
  {
    id: "1",
    img: Iniciativa,
    title: "Iniciativa de archivos",
    partner: "",
    technology: "WordPress",
    job: "BackEnd Developer",
    url: "https://iniciativadearchivos.org/",
    category: "ONG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut orci id elit varius gravida vel eget augue. ",
    isNovedad: false,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },

  {
    id: "2",
    img: Ecospend,
    title: "Ecospend",
    partner: "",
    technology: "WordPress",
    job: "BackEnd Developer",
    url: "https://ecospend.com/",
    category: "FinTech",
    description:
      "Proin faucibus sem in suscipit malesuada. Phasellus varius tristique gravida. Aliquam imperdiet. ",
    isNovedad: false,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },

  {
    id: "3",
    img: BuscaTuCoach,
    title: "Busca tu coach",
    partner: "",
    technology: "WordPress",
    job: "FrontEnd Developer",
    url: "https://buscatucoach.com/",
    category: "App",
    description:
      "Nam quis est et velit aliquam sodales. Nam ac massa dolor. Duis placerat massa sit amet sollicitudin hendrerit.",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "4",
    img: Audience,
    title: "Audience Makers",
    partner: "Uanaknow",
    technology: "Javascript",
    job: "FrontEnd Developer",
    url: "https://www.audiencemakerssa.com/",
    category: "Landing Page",
    description:
      "Nam quis est et velit aliquam sodales. Nam ac massa dolor. Duis placerat massa sit amet sollicitudin hendrerit. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "5",
    img: FJComms,
    title: "FJ Communicatios",
    partner: "Uanaknow",
    technology: "Javascript",
    job: "FrontEnd Developer",
    url: "https://www.fjcommunications.com//",
    category: "Landing Page",
    description:
      "Consultor??a de comunicaci??n y RR.PP. tanto en Espa??a, Europa, como LATAM y EEUU. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "6",
    img: MareFish,
    title: "Marefish",
    partner: "TNP Creative",
    technology: "WordPress",
    job: "FrontEnd Developer",
    url: "https://www.marefish.es",
    category: "Ecommerce",
    description:
      "Ecommerce para MareFish historico negocio ubicado en Mercamadrid..",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "7",
    img: Auditorbot,
    title: "Auditor Bot",
    partner: "Shake Again",
    technology: "Laravel",
    job: "Project Managment",
    url: "https://auditorbot.com/",
    category: "Web Scraping App",
    description:
      "App realizada en Laravel para brindar informacion de pricing a responsables de ecommerce. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
];

export default projects;
