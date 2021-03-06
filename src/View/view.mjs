export default class View {
  constructor() {
    this.yellowDiv = null;
    this.input = null;
    this.buttonText = null;
    this.form = null;
    this.ul = null;
    this.li = null;
    this.root = document.getElementById("root");
  }

  init() {
    this.renderTodo();
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.text && (div.innerText = props.text);
    props.id && (div.id = props.id);

    return div;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.type && (input.type = props.type);
    props.class && (input.className = props.class);
    props.id && (input.id = props.id);
    props.name && (input.name = props.name);
    props.value && (input.value = props.value);

    return input;
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.class && (button.className = props.class);
    props.id && (button.id = props.id);
    props.type && (button.type = props.type);

    return button;
  }

  createForm(props) {
    const form = document.createElement("form");

    props.class && (form.className = props.class);
    props.id && (form.id = props.id);

    return form;
  }

  createLable(props) {
    const lable = document.createElement("lable");

    props.text && (lable.innerText = props.text);
    props.id && (lable.id = props.id);

    return lable;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.id && (ul.id = props.id);

    return ul;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerText = props.text);
    props.class && (li.className = props.class);

    return li;
  }

  createImage(props) {
    const img = document.createElement("img");

    props.id && (img.id = props.id);
    props.src && (img.src = props.src);

    return img;
  }

  changeImage() {
    this.imageSort.src = "./assets/images/Group 90.png";
  }
  changeImageDefault() {
    this.imageSort.src = "./assets/images/Group 74.png";
  }

  renderTodo() {
    this.yellowDiv = this.createDiv({
      id: "yellowDiv",
      class: "yellow_div",
    });

    this.plus = this.createDiv({
      text: "+",
      id: "buttonPlus",
      class: "button_plus",
    });

    this.buttonText = this.createButton({
      text: "????????????????",
      class: "button_text",
      id: "buttonText",
    });

    this.input = this.createInput({
      type: "text",
      class: "main-input",
      id: "mainInput",
      name: "inputName",
    });

    this.buttonAdd = this.createButton({
      id: "buttonAdd",
    });

    this.form = this.createForm({
      class: "main-form",
      id: "mainForm",
    });

    this.label = this.createLable({
      text: "To-Do List",
      id: "labelText",
    });

    this.ul = this.createUl({
      id: "mainList",
    });

    this.buttonSort = this.createButton({
      class: "button_sort",
      id: "buttonSort",
      type: "button",
    });
    this.imageSort = this.createImage({
      id: "imageSort",
      src: "./assets/images/Group 74.png",
    });

    this.form.appendChild(this.yellowDiv);
    this.form.appendChild(this.label);
    this.form.appendChild(this.ul);
    this.form.appendChild(this.buttonAdd);

    this.buttonSort.appendChild(this.imageSort);

    this.label.appendChild(this.buttonSort);
    this.label.appendChild(this.input);

    this.buttonAdd.appendChild(this.plus);
    this.buttonAdd.appendChild(this.buttonText);

    this.root.appendChild(this.form);
  }
}
