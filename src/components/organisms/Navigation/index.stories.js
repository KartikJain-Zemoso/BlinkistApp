import Navigation from ".";

const NavigationComponent = {
    title: 'NavBar',
    component : Navigation,
};

const Template = (args) =>(
    <Navigation {...args}/>
);

export const NavBarHeader = Template.bind({});
NavBarHeader.args = {
color:'blue',
};

export default NavigationComponent;