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
            <img key={pos} className={classArr.join(' ')}  onClick={() => props.onColorOptionClick(pos)} src={item.imageUrl} alt={item.styleName}/>
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
              <div>
                {featureList}
              </div>
          </div>
    );
}

export default ProductDetails;