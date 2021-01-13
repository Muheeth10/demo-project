import React from 'react';
//import ProductPreview from './ProductPreview';
import classes from './ProductDetails.module.css';
import ProductData from '../Utils/ProductData';

const ProductDetails = (props) =>{
    const colorOptions = props.data.colorOptions.map((item,pos)=>{
        const classArr=[classes.ProductImage]
        if(pos==0){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            //key must be used while using the looping statements to generate lists dynamically.
            <img key={pos} className={classArr.join(' ')}  onClick={() => props.url(item.styleName)} src={item.imageUrl} alt={item.styleName}/>
        );
    });

    const featureList = props.data.featureList.map((item,pos)=>{
        return(
            <button key={pos} >{item}</button>
        )
    })

    return(
        <div className={classes.ProductData}>
              <h2 className={classes.heading}>{ProductData.title}</h2>
              
              <h4 className={classes.heading}>{ProductData.description}</h4>
              
              {colorOptions}
              {/* <button onClick={() => props.url('Blue Strap')} style={ 
                {
                  backgroundColor: 'blue',
                  width:'30px',
                  height:'20px',
                  margin:'5px',
                  border:'none',
                  borderRadius:'5px'

                }} ></button>
              <button onClick={() => props.url('Black Strap')} style={ 
                {
                  backgroundColor: 'black',
                  width:'30px',
                  height:'20px',
                  margin:'5px',
                  border:'none',
                  borderRadius:'5px'

                }}> </button>
              <button onClick={() => props.url('Purple Strap')} style={ 
                {
                  backgroundColor: 'purple',
                  width:'30px',
                  height:'20px',
                  margin:'5px',
                  border:'none',
                  borderRadius:'5px'

                }}> </button>
              <button onClick={() => props.url('Red Strap')} style={ 
                {
                  backgroundColor: 'red',
                  width:'30px',
                  height:'20px',
                  margin:'5px',
                  border:'none',
                  borderRadius:'5px'

                }}> </button> */}

              <div>
                {featureList}
              </div>
          </div>
    );
}

export default ProductDetails;