import IconButton from ".";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AddIcon from "@material-ui/icons/Add";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const IconButtonComponent = {
  title: "Atoms/Icon Button",
  component: IconButton,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <IconButton {...args} />;

export const DeleteButtonActive = Template.bind({});
DeleteButtonActive.args = {
  icon: <DeleteIcon />,
};

export const SearchActive = Template.bind({});
SearchActive.args = {
  icon: <SearchIcon />,
};

export const DropDownActive = Template.bind({});
DropDownActive.args = {
  icon: <ArrowDropDownIcon />,
};
export const DropUpActive = Template.bind({});
DropUpActive.args = {
  icon: <ArrowDropUpIcon />,
};
export const Add = Template.bind({});
Add.args = {
  icon: <AddIcon />,
};

export const AccessTime = Template.bind({});
AccessTime.args = {
  icon: <AccessTimeIcon />,
};
export const AccountBalance = Template.bind({});
AccountBalance.args = {
  icon: <AccountBalanceIcon />,
};
export default IconButtonComponent;
