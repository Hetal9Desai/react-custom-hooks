// // orignal component hello.js

// const Hello = ({ name }) => {
//   return <h1>Hello, {name}</h1>;
// };

// //HOC // withMessage.js

// const WithLogger = (WrappedComponent) => {
//   return function LoggedComponent(props) {
//     console.log("Props:", props);
//     return <WrappedComponent {...props} />;
//   };
// };

// // enhancing the component

// const HelloWithLogger = WithLogger(Hello);

// //Usage
// <HelloWithLogger name="Alice" />;
