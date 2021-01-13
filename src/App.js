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
  time:0,
  currentImagePos:0,
  showHeartBeatSection:false,
  heart:'https://i.giphy.com/media/1kJwmjkqY9JwJ0wBNB/giphy.webp',
  ProductData:ProductData,
  }
    
      
   url = (pos) => {
    // const updatedPreviewImage = this.state.ProductData.colorOptions[pos].imageUrl;
    this.setState({currentImagePos:pos});
  }

  onFeatureItemClick = (pos) => {
   let updatedState =false;
   if(pos === 1 ){
      updatedState = true;
   }
    this.setState({showHeartBeatSection: updatedState});
  }

//   timedis = () =>{
//     if(this.state.style === {display : 'none'}){
//       this.setState({style : {display:'inline-block'}})
//   }
//   else {
//     this.setState({style : {display:'none'}})
//   }
// }
//   heartrate = () => {
//     console.log('Heart rate');
//   }


  shouldComponentUpdate(nextProps,nextState){
    // console.log('Next State =>',nextState);
    // console.log('Current State =>', this.state);
    console.log("Inside shouldComponentUpdate");
    if(nextState.currentImagePos === this.state.currentImagePos){
      return false;
    }
    
    return true;
  }

  render(){
    
    console.log('component rendered');
  
    return (
      <div className="App">
        <div className={classes.mainContainer}>

           
            <Topbar/>
            <ProductPreview  currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentImagePos].imageUrl} uh={this.state.heart} showHeartBeatSection={this.state.showHeartBeatSection}/>
            <ProductDetails data={ProductData} onColorOptionClick={this.url} currentImagePos={this.state.currentImagePos} onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection}/>
            
        </div>
      </div>

      );
    }
}

export default App;
//export default ProductData;