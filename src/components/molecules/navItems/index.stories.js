import NavItems from ".";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const NavItemComponent = {
  title: "Molecules/Nav Items",
  component: NavItems,
};

const Template = (args) => <NavItems {...args} />;

export const NavItemAdd = Template.bind({});
NavItemAdd.args = {
  icon: <AddIcon />,
  position: "left",
  title: "Nav Items",
};
export const NavItemDropDown = Template.bind({});
NavItemDropDown.args = {
  icon: <ArrowDropDownIcon />,
  position: "right",
  title: "Nav Items",
};

export default NavItemComponent;
