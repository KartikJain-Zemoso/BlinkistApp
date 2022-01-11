import Cards from ".";
import 'bootstrap/dist/css/bootstrap.min.css';
const CardComponent = {
    title: 'Cards',
    component: Cards,
};

const Template = (args) =>(
    <Cards {...args}/>
);

export const CardDefault = Template.bind({});
CardDefault.args = {
    books:[],
};
