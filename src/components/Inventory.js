import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  constructor(props) {
    super(props);

    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    }
    this.props.updateFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];

    return (
      <div className="fish-edit" key={key}>
        <input type="text" value={fish.name} name="name" placeholder="Fish name" onChange={(e) => this.handleChange(e, key)} />
        <input type="text" value={fish.price} name="price" placeholder="Fish price" onChange={(e) => this.handleChange(e, key)}/>
        <select value={fish.status} name="status" onChange={(e) => this.handleChange(e, key)}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea placeholder="Fish desc" value={fish.desc} name="desc" onChange={(e) => this.handleChange(e, key)}></textarea>
        <input type="text" value={fish.image} name="image" placeholder="Fish image" onChange={(e) => this.handleChange(e, key)}/>
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        { Object.keys(this.props.fishes).map(this.renderInventory) }
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
