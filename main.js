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

  getPosition(target) {
    const index = [...GAME_FIELD.root.children].indexOf(target)
    return GAME_FIELD.points[index]
  }
}

class Person {
  constructor(props) {
    this.name = props.name;
    this.health = props.health;
  }
}

class Move {
  constructor(count) {
    this.count = count;
  }

  showMovementField() {}
  currentPosition() {}
  replacePosition() {}
}

document.addEventListener('click', (e) => {
  const ct = GAME_FIELD.getPosition(e.target)

  if (e.target.classList.contains('person')) {
     e.target.classList.remove('person')
     return
  }
  e.target.classList.add('person')

  GAME_FIELD.points.filter((i) => 
    (i.x >= ct.x && i.x <= ct.x + 3 || i.x < ct.x && i.x >= ct.x - 3) && (i.y >= ct.y && i.y <= ct.y + 3 || i.y <= ct.y && i.y >= ct.y - 3)
  ).map( i => GAME_FIELD.root.children[i.y * 10 + i.x].classList.add('green'))
})

const GAME_FIELD = new Field({width: 10, height: 10, selector: '#root'})
GAME_FIELD.render()
