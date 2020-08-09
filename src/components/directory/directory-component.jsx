import React  from 'react'
import MenuItem from '../menu-item/menu-item.component';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectDirectoryItems } from '../../redux/reducers/directorySelector';


export const Directory = ({sections}) => {
  
  console.log("section",sections)
        return (
            <div className="directory-menu">
                {sections&&sections.map(({title,id,imageUrl,size,linkUrl})=><MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />)

                }
            </div>
        )
  
}
const mapStatetoProps = createStructuredSelector({
  sections:selectDirectoryItems,
})

export default connect(mapStatetoProps) (Directory);
