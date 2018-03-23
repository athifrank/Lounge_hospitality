import React from 'react';

class Details extends React.Component{    
    render(){
const {location}=this.props;

        return(
           
<div className="container">
	<div className="row" style={{    marginTop: '78px'}}>
                        <div className="col-md-4">
                            <img className="lib-img-show" alt= {location.state.name} src={location.state.image} style={{width:'103%',height:'292px'}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="lib-row lib-header">
                                {location.state.name}
                                <div className="lib-header-seperator"></div>
                            </div><br/>
                            <div className="lib-row lib-desc">
                            {location.state.description}
                            </div>



                        <div style={{float:'left'}}>
              { location.state.nonVeg=== true ? <div><span className="nonveg-dot"></span> Non-veg</div>:
              <div><span className="veg-dot"></span> Veg</div>}               
              </div>
              {location.state.spicy===true ? <span className="redChilli"><img alt="red-chilli" src="http://icons.veryicon.com/png/Cartoon/Rave/Hot%20chili.png" className="chilli"/>
              spicy</span>:""}

                  <button onClick={(e)=>this.props.history.goBack()} className="btn btn-success">GoBack</button>
                        </div>

            </div>
            </div>
        )
    }
}

export default Details;