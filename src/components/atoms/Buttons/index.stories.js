import Button from "./index";

const ButtonComponent = {
  title: "Atoms/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButtonActive = Template.bind({});
PrimaryButtonActive.args = {
  title: "Primary Button",
};

export const PrimaryButtonDisabled = Template.bind({});
PrimaryButtonDisabled.args = {
  title: "Disabled Button",
  disabled: true,
};
export default ButtonComponent;
