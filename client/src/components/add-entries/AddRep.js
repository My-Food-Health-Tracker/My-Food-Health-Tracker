import React, { Component } from 'react'

export default class AddIgt extends Component {
  render() {
    return (
      <div>
          <h3 className="f6 db">Custom Recipe:</h3>
            <div>
                <form onSubmit={this.props.handleSubmit}>
                
                  <div className="date-time">
                    <label htmlFor="date" className="f6 mt3">Date:</label>
                    <input type="date" id="date"
                          name="date" 
                      onChange={this.props.handleChange}
                    />
                    <label htmlFor="startTime" className="f6 mt3">Time:</label>

                    <input type="time" id="startTime"
                        name="startTime" 
                      onChange={this.props.handleChange}
                    />
                  </div>
             
                  <div className="custom-ingredient">
                          <div>
                          <label htmlFor='name' className="f6 mt3" >Name: </label>
                          <input
                            type='text'
                            id='name'
                            name='name' value={this.props.name}
                            onChange={this.props.handleChange}
                          />
                        </div>
                        <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
                          <label htmlFor='brand' className="f6 mt3">Brand: </label>
                          <input 
                            type='text'
                            id='brand'
                            name='brand'
                            value={this.props.brand}
                            onChange={this.props.handleChange}
                          />
                        </div>
                        <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
                        <label htmlFor='category' className="db fw4 lh-copy f6">Category: </label>
                          <input 
                            type='text'
                            id='category'
                            name='category'
                            value={this.props.category}
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
                          value={this.props.portion}
                          onChange={this.props.handleChange}
                        />
                        <label htmlFor='eatenPortion' className="db fw4 lh-copy f6">Your Portion: </label>
                        <input 
                          type='text'
                          id='eatenPortion'
                          name='eatenPortion'
                          value={this.props.eatenPortion}
                          onChange={this.props.handleChange}
                        />
                  </div>

                  {/* Single Ingredients form */}
                 <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder="chicken"
                    value={this.props.name}
                    onChange={this.props.handleChange}
                  />
                  <input
                    type='number'
                    id='servingAmount'
                    name='servingAmount'
                    placeholder="500"
                    value={this.props.servingAmount}
                    onChange={this.props.handleChange}
                  />
                  <input
                    type='text'
                    id='servingSize'
                    name='servingSize'
                    placeholder="g"
                    value={this.props.servingSize}
                    onChange={this.props.handleChange}
                  /> 
                <button type='submit' className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue">Save</button>
              </form>
        </div>
</div>
    )
  }
}
