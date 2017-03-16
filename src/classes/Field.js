class Field {
  constructor(props) {
    this.height = props.height;
    this.width = props.width;
    this.points = []
    this.root = document.querySelector(props.selector)
  }

  render() {

    for(let i = 0; i < this.height; i++) {
      for(let j = 0; j < this.width; j++) {
        const box = document.createElement('div')

        box.className = 'field__box'
        this.root.appendChild(box)
        this.points.push({x: j, y: i})
      }
    }
  }

  getPosition(target, field) {
    const index = [...this.root.children].indexOf(target)
    return this.points[index]
  }
}

export default Field