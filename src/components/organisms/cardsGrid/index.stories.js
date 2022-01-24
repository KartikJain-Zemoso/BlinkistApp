import CardGrid from ".";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const CardGridComponent = {
  title: "Organisms/Cards",
  component: CardGrid,
};

const Template = (args) => <CardGrid {...args} />;

export const CardGridTemplate = Template.bind({});
CardGridTemplate.args = {
  library: [
    {
      id: 1,
      author: "Carl Reader",
      category: "entrepreneurship",
      duration: "13-minutes read",
      name: "Boss It",
      url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
      isFinished: false,
    },
  ],
};

export default CardGridComponent;
