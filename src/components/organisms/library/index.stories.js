import Library from ".";

const LibraryComponent = {
  title: "Organisms/Library",
  component: Library,
};

const Template = (args) => <Library {...args} />;

export const MyLibrary = Template.bind({});
MyLibrary.args = {
  books: [],
};

export default LibraryComponent;
