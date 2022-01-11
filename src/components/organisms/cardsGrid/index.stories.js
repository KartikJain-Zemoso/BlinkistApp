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
  books: [
    {
      id: "1",
      name: "Boss It",
      url: "https://images.blinkist.io/images/books/6155c3ed6cee070008752e82/1_1/470.jpg",
      author: "Carl Reader",
      duration: "13-minutes read",
    },
    {
      id: "2",
      name: "Get Different",
      url: "https://images.blinkist.io/images/books/619533446cee070007d48b4d/1_1/470.jpg",
      author: "Mike Maclowicz",
      duration: "13-minutes read",
    },
    {
      id: "3",
      name: "Zero",
      url: "https://images.blinkist.io/images/books/6183be696cee070007a5cd39/1_1/470.jpg",
      author: "Charles Seife",
      duration: "12-minutes read",
    },
  ],
};

export default CardGridComponent;
