import logo from './logo.svg';
import './App.css';
import Blogitem from './post';
import { Component } from 'react';
import classes from './post.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/TopBar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state= {
  ur:'https://imgur.com/iOeUBV7.png',
  time:0,
  showHeartBeatSection:false,
  heart:'https://i.giphy.com/media/1kJwmjkqY9JwJ0wBNB/giphy.webp',
  ProductData:ProductData,
  }
    
      
   url = (pos) => {
    const updatedPreviewImage = this.state.ProductData.colorOptions[pos].imageUrl;
    this.setState({ur:updatedPreviewImage});
  }

  timedis = () =>{
    if(this.state.style === {display : 'none'}){
      this.setState({style : {display:'inline-block'}})
  }
  else {
    this.setState({style : {display:'none'}})
  }
}
  heartrate = () => {
    console.log('Heart rate');
  }


  val = '';

  render(){
    
  
    return (
      <div className="App">
        <div className={classes.mainContainer}>

           
            <Topbar/>
            <ProductPreview  u={this.state.ur} uh={this.state.heart} showHeartBeatSection={this.state.showHeartBeatSection}/>
            <ProductDetails data={ProductData} onColorOptionClick={this.url} />
            
        </div>
      </div>

      );
    }
}

export default App;
//export default ProductData;