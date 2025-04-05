import { DiPython, DiJavascript1, DiHtml5, DiCss3, DiNodejsSmall, DiReact, DiGit } from "react-icons/di";
import { SiMysql, SiCplusplus, SiAngular, SiInternetarchive } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

export const Skills = [
  {
    slug: "iot",
    Component: SiInternetarchive,
    title: "Internet of Things",
    Description: () => <>Embedded systems and IoT applications</>,
  },
  {
    slug: "webdev",
    Component: DiHtml5,
    title: "Web Development",
    Description: () => <>Building modern web applications</>,
  },
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>Automation, scripting, and backend development</>,
  },
  {
    slug: "cpp",
    Component: SiCplusplus,
    title: "C++",
    Description: () => <>Data Structures and Algorithms</>,
  },
  {
    slug: "dsa",
    Component: FaDatabase,
    title: "DSA & CP",
    Description: () => <>Problem-solving and competitive programming</>,
  },
  {
    slug: "javascript",
    Component: DiJavascript1,
    title: "JavaScript",
    Description: () => <>Frontend and backend scripting</>,
  },
  {
    slug: "react",
    Component: DiReact,
    title: "React.js",
    Description: () => <>Building interactive UI components</>,
  },
  {
    slug: "angular",
    Component: SiAngular,
    title: "Angular",
    Description: () => <>Frontend development with TypeScript</>,
  },
  {
    slug: "nodejs",
    Component: DiNodejsSmall,
    title: "Node.js",
    Description: () => <>Backend development and APIs</>,
  },
  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Database design and management</>,
  },
  {
    slug: "git",
    Component: DiGit,
    title: "Git",
    Description: () => <>Version control and open source contributions</>,
  },
];
