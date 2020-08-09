import React from 'react';
import {connect} from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopItems } from '../../redux/reducers/shopSelector';
import {createStructuredSelector} from 'reselect';

const ShopPage = ({collections}) =>{

        return(
            <div className="shop-page">
                {collections.map(({id,...otherCollectionProps})=>(

                <CollectionPreview key={id} otherCollectionProps={otherCollectionProps}/>
                ))}
            </div>
        )
    
}

const mapStatetoProps = createStructuredSelector({
    collections:selectShopItems,
})

export default connect(mapStatetoProps)(ShopPage);