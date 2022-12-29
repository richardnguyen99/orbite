import Navbar from "../features/Navbar";
import Container from "./Container";
import Layout from "./Layout";
import Section from "./Section";
import Carousel from "./Carousel";
import Tasks from "../features/Tasks";
import Dropdown from "./Dropdown";

const exportedComponents = {
  Navbar,
  Container,
  Layout,
  Section,
  Carousel,
  Tasks,
  Dropdown,
};

export default Object.assign("Components", exportedComponents);
