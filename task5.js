class Component {
 
  constructor(tag) {
    this.tag  = tag ;
  this.element=
  {
   this.tag;
    this.style: {this.display};
  };
  }
  hide(){return this.display;}
  show(){this.display}
}
class Box extends Component {
  constructor(tag, size, color) 
  {
    super(tag);
    this.size = size; 
    this.color = color;
  }
  getProps()
  { return `Tag: ${tag}; Width: ${size}; Height: ${size}; Background: ${color}; Display: ${display}`};
}