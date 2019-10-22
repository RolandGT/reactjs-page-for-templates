import React from 'react';

const Breadcrumb = props => {
    const textColor='black-text'; //CSS
    return(
        <div className='breadcrumb'>
            <h5 className={`${textColor} margin-top-000rem`}>Resources > Templates > {props.categorie} > {props.subcategorie}</h5>
        </div>
    );
}
export default Breadcrumb;