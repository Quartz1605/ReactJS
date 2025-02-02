//Writing a custom function to render the reactElement.

function customRender(reactElement,container){
  //This code can't be used for creating larger elements
  /*const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = "Hello";
  domElement.setAttribute('href',reactElement.props.href);
  domElement.setAttribute('target',reactElement.props.target);

  container.appendChild(domElement)*/

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = "Hell nahh"

  for(const prop in reactElement.props){
    domElement.setAttribute(prop,reactElement.props[prop])
  }

  container.appendChild(domElement)


}

const reactElement = {
  type: 'a',
  props: {
    href : 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google.'
}


const mainContainer = document.getElementById("root")

customRender(reactElement,mainContainer)