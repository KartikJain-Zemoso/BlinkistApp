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
  book: {
    id: 1,
    name: "Boss It",
    url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
    author: "Carl Reader",
    duration: "13-minutes read",
  },
};

export default CardComponent;
