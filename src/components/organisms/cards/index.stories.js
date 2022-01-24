import Cards from ".";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
const CardComponent = {
  title: "Cards",
  component: Cards,
};

const Template = (args) => (
  <BrowserRouter>
    <Cards {...args} />
  </BrowserRouter>
);

export const CardDefault = Template.bind({});
CardDefault.args = {
  books: [],
};
