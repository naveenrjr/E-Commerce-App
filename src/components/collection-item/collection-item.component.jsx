import React from 'react';
import './collection-item.scss';
import {connect} from 'react-redux';
import {addItemtoCart} from '../../redux/actions/cart-actions';
import CustomButton from '../custom-button/custom-button';

const CollectionItem = ({item,addItem}) =>{
    const {name,price,imageUrl} = item
    return(
        <div className="collection-item">
        <div className="image"
        style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton onClick={()=>addItem(item)} inverted>Go To Checkout</CustomButton> 
    </div>
    )
}
   

const mapDispatchToProps = dispatch =>({
    addItem: item=> dispatch(addItemtoCart(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);