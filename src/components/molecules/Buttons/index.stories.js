import Button from ".";
import AddIcon from "@material-ui/icons/Add";
const ButtonComponentBlinkist = {
  title: "Molecules/Button Molecule",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  color: "#2CE080",
  title: `Button`,
};
export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  color: "#FFFFFF",
  title: `Button`,
  icon: <AddIcon />,
  textColor: "#2CE080",
};
export default ButtonComponentBlinkist;
