import React, {useState, useEffect} from 'react';
import './Categorie.css';
import catData from '../api/categoriesData';

const Categorie = props => {
    const [categoriesData, setCategoriesData] = useState([]);
    //const [handleClickCategorie, setHandleClickCategorie] = useState('');

    const handleClickCategorie = props.handleClickCategorie;

    useEffect( () => {
        setCategoriesData(catData);
        // setHandleClickCategorie(props.handleClickCategorie);
    },[]);
    // ,[catData, setCategoriesData, props]);

    return(
            <div className='cat black-text'>
                { categoriesData.map( (item) => (
                    <h3 key={item.id} className='cat' onClick={(e) => {handleClickCategorie(e, item.name, 'All')}}>{item.name}</h3>
                ) )}
            </div>
        );
}
export default Categorie;