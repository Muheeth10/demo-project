import React from 'react';

import classes from './ProductPreview.module.css'
const ProductPreview = (props) => {
    return(
        <div className={classes.ProductPreview}>
              <img src={props.u}></img>

                {
                    props.showHeartBeatSection ?

                        <div className={classes.HeartBeatSection}>
                            <img src={props.uh} className={classes.heart}></img>
                            <p>78</p>
                        </div>
                    :

                    <div className={classes.time}><p >{`${new Date().getHours()}:${new Date().getMinutes()}`}</p></div>

                }

              
              
        </div>
    );
}

export default ProductPreview;