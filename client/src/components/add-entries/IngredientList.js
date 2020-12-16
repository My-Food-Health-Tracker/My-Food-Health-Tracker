import React from 'react'

export default function IngredientList(props) {
  const filteredIngredients = props.ingredients.filter(ingredient => 
    ingredient.name.toLowerCase().includes(props.query.toLowerCase())
  );

  return (
    <div classname="f4 bold center mw5" >
        <ul className="list pl0 ml0 center mw5 ba b--light-silver br3" style={{"height":"200px", "width": "60%", "overflow": "hidden", "overflowY": "scroll"}} >
        {
          filteredIngredients.map(ingredient => {
            return (
              <li className="ph3 pv2 bb b--light-silver f6 db">
                {ingredient.name}, {ingredient.brand} <button onClick={() => props.handleClick()} key={ingredient._id} data-key={ingredient._id}>+</button>
                {/* <Icons icon="AddButton-database"/> */}
              </li>
            )
          })
        }
        </ul>
      </div>
  )
}
