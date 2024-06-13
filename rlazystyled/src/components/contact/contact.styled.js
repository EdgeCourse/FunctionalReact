import styled from 'styled-components';

/*
Why Use Styled Components?

Scoped Styles: Each styled component automatically generates unique class names, preventing style conflicts between different components in your application. This means you don't have to worry about naming collisions or accidentally overriding styles.

CSS-in-JS:  Writing your CSS styles directly within your JavaScript/TypeScript files, alongside your component logic, enhances readability and maintainability. You can see the styles applied to a component right where that component is defined, making it easier to understand and modify.

Dynamic Styling:  Styled components allow you to easily create dynamic styles based on props or component state. You can change colors, sizes, and other properties based on conditions, making your components more flexible and interactive.

Theming:  With styled-components, you can create reusable themes and apply them globally or to specific components. This helps you maintain a consistent look and feel across your application.

Cleaner Code: By co-locating styles and components, you avoid having separate CSS files. This can lead to a more organized codebase with less context switching between files.
*/

export const Header  = styled.header`
  background-color: gray;
  color: white;
  width: 50%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  /*cursor: pointer;*/
`;

/* does not work
export const div  = styled.div`
  background-color: gray;
  color: black;
  width: 50%;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
*/
