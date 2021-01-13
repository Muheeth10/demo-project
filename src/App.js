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

  }


// Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.



  
    // const Blogarray = ProductData.colorOptions.map((val,pos) => {
     
    //   return(

    //   <Blogitem key={pos} title={ProductData.title}  description={ProductData.description} strp={val.styleName} img={val.imageUrl}/>
      
    //   );

    //   })

    
      
   url = (clr) => {
    
     //console.log('clr', clr);
     this.state.colorOptions.map((color,pos) => {  
      
      if(clr  === color.styleName)
      {
         this.setState({ur : color.imageUrl})
      }
      // else if(color.styleName === 'Blue Strap')
      // {
      //   return color.imageUrl
      // }
      // else if(color.styleName === 'Purple Strap')
      // {
      //   return color.imageUrl
      // }
      // else if(color.styleName === 'Red Strap')
      // {
      //   return color.imageUrl
      // }
      // else{
      //   return "invalid option"
      // }
      
    })
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
            <ProductDetails url={this.url} data={ProductData} />
            
        </div>
      </div>

      );
    }
}

export default App;
//export default ProductData;