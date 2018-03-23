import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    const url = 'http://texpertise.in/data.php';
    fetch(url).then(res => res.json()).then((res) => { this.setState({ data: res }) });
  }


  render() {
    const value = this.state.data;
    console.log(value);
    return (
      <div className="container">
        <div className="row">
          {this.state.data.map((val, key) => {
            return (
              <div className="card p-3 col-12 col-md-6 col-lg-3" key={key}>
                <div className="card-img">
                  <img src={val.image} style={{ width: '100%', height: '186px' }} alt="food_items" />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style display-7" style={{ fontFamily: 'Arvo', fontWeight: 'bold' }}>
                    {val.name}
                  </h4>
                </div>

                <div className="mbr-section-btn text-right">
                  <div style={{ float: 'left' }}>
                    {val.nonVeg === true ? <div><span className="nonveg-dot"></span> Non-veg</div> :
                      <div><span className="veg-dot"></span> Veg</div>}
                  </div>
                  {val.spicy === true ? <span className="redChilli"><img alt="red-chilli" src="http://icons.veryicon.com/png/Cartoon/Rave/Hot%20chili.png" className="chilli" />
                    spicy</span> : ""}

                  <button onClick={(e) => this.props.history.push(`/details/${key}`, val)} className="btn btn-primary display-4" id="viewDetails">
                    view details
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    )
  }
}

export default App;
