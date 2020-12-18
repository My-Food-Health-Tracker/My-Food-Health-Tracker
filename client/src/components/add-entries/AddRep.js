import React, { Component } from 'react'

export default class AddRep extends Component {

  render() {
    return (
      <div>
          <h3 className="f6 db">Custom Recipe:</h3>
            <div>
                <form onSubmit={this.props.editing? this.props.handleEditing : this.props.handleSubmit}>
             
                  <div className="custom-ingredient">
                          <div>
                          <label htmlFor='name' className="f6 mt3" >Recipe Name: </label>
                          <input
                            type='text'
                            id='recipeName'
                            name='recipeName' 
                            onChange={this.props.handleChange}
                          />
                        </div>
                        
                 </div>
                    <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
                        <label htmlFor='portion' className="f6 mt3">Recipe Portion: </label>
                        <input 
                          type='number'
                          id='portion'
                          name='portion'
                          min='0'
                          value={this.props.food.portion}
                          onChange={this.props.handleChange}
                        />
                        <label htmlFor='eatenPortion' className="db fw4 lh-copy f6">Your Portion: </label>
                        <input 
                          type='text'
                          id='eatenPortion'
                          name='eatenPortion'
                          value={this.props.food.eatenPortion}
                          onChange={this.props.handleChange}
                        />
                  </div>
                
                  {/* Single Ingredients form */}
                 <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder="e.g. Chicken"
                    value={this.props.tempIngredient.name}
                    onChange={this.props.handleChange}
                  />
                  <input
                    type='text'
                    id='brand'
                    name='brand'
                    placeholder="e.g. Edeka"
                    value={this.props.tempIngredient.brand}
                    onChange={this.props.handleChange}
                  />
                  <input
                    type='text'
                    id='category'
                    name='category'
                    placeholder="e.g. Foods"
                    value={this.props.tempIngredient.category}
                    onChange={this.props.handleChange}
                  />
                  <input
                    type='number'
                    id='servingAmount'
                    name='servingAmount'
                    placeholder="e.g. 2"
                    value={this.props.tempIngredient.servingAmount}
                    onChange={this.props.handleChange}
                  />
                  <input
                    type='text'
                    id='servingSize'
                    name='servingSize'
                    placeholder="e.g. Kg"
                    value={this.props.tempIngredient.servingSize}
                    onChange={this.props.handleChange}
                  /> 
                
                <button type='submit' className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue">Save</button>
              </form>
              <button onClick={this.props.handleAddButton} className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue">Add ingredient to the recipe</button>
        </div>
</div>
    )
  }
}
