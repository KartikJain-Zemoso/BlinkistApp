import NaviagtionDropDown from ".";
import 'bootstrap/dist/css/bootstrap.min.css';
const NavigationDropDownComponent = {
    title: 'Dropdowm',
    component:NaviagtionDropDown,
};

const Template = (args) =>(
    <NaviagtionDropDown {...args}/>
);

export const NavigationDropDownDefault = Template.bind({});
NavigationDropDownDefault.args={
    category:[],
};

export default NavigationDropDownComponent;
