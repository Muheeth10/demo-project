import React from 'react';
//import ProductPreview from './ProductPreview';
import classes from './ProductDetails.module.css';
import ProductData from '../Utils/ProductData';

const ProductDetails = (props) =>{
    const colorOptions = props.data.colorOptions.map((item,pos)=>{
        const classArr=[classes.ProductImage]
        if(pos == props.currentImagePos){
            classArr.push(classes.SelectedProductImage);
        }
        return(
            //key must be used while using the looping statements to generate lists dynamically.
            <img key={pos} className={classArr.join(' ')}  onClick={() => props.onColorOptionClick(pos)} src={item.imageUrl} alt={item.styleName}/>
        );
    });

    const featureList = props.data.featureList.map((item,pos)=>{
      const classArr2=[classes.featureList]
      if( pos==1 && props.showHeartBeatSection){
            classArr2.push(classes.selectedFeature);
      }  
      else if(pos==0 && !props.showHeartBeatSection){
        classArr2.push(classes.selectedFeature);

      }
      
      return(
            <button key={pos} onClick={() => props.onFeatureItemClick(pos)} className={classArr2.join(' ')}>{item}</button>
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