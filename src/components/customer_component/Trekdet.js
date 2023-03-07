import axios from "axios";
import { Component } from "react";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import App from "../../App";
import withRouter from "../../withRouter";
import TrekDEtailcomponent from "./TrekDEtailcomponent";


export function Navigate(props) {
  const navigation = useNavigate();
  return(
    <App navigate={navigation}></App>
  )
}

class TrekDet extends Component {
    constructor(props) {
        super(props)
        
    }

    
    state = { 
      
        details:[]
     }

     componentDidMount(){
        axios.get(`http://localhost:8080/api/trekbyID/${this.props.params.tid}`).then(res => {
            const details = res.data;
            this.setState({details:details})
            console.log(this.state.details);
        })
        /*axios.get("http://localhost:8080/api/getTrekBytrekdetail/1").then(res =>{
            const trek = res.data;
            console.log(trek)
            this.setState({trekn : trek})
            console.log(this.state.trekn)
        })*/
        

        
     }

    
    render() { 
        return ( <>
          <TrekDEtailcomponent details={this.state.details} cid={this.props.params.uid} tid = {this.props.params.tid}></TrekDEtailcomponent> 
    
        </> );
    }
}
 
export default withRouter(TrekDet);