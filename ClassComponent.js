class UIComponent {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(`Clicked on ${this.label}`);
  }
}


class Button extends UIComponent {
  constructor(label, backgroundColor) {
    super(label);
    this.backgroundColor = backgroundColor;
  }

 
  click() {
    super.click();
    console.log(`Button background color: ${this.backgroundColor}`);
  }
}

const button = new Button("Click Me", "blue");
button.click();
