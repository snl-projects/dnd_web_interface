import Field from './classes/Field'

const GAME_FIELD = new Field({width: 10, height: 10, selector: '#root'})

GAME_FIELD.render()

document.addEventListener('click', (e) => {
  const ct = GAME_FIELD.getPosition(e.target)

  if (e.target.classList.contains('person')) {
     e.target.classList.remove('person')
     return
  }
  e.target.classList.add('person')

  GAME_FIELD.points.filter((i) => 
    (i.x >= ct.x && i.x <= ct.x + 3 || i.x < ct.x && i.x >= ct.x - 3) && 
    (i.y >= ct.y && i.y <= ct.y + 3 || i.y <= ct.y && i.y >= ct.y - 3)
  ).map( i => GAME_FIELD.root.children[i.y * 10 + i.x].classList.add('green'))
})