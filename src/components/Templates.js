import React, {useState} from 'react';
import Categorie from './Categorie';
import Subcategorie from './Subcategorie';
import TemplateItem from './TemplateItem';
import Breadcrumb from './Breadcrumb';
import './Item.css';

const Templates = props => {
    const [subcategorie, setSubcategorie] = useState('All');
    const [categorie, setCategorie] = useState('All');
    const [headervisible, setHeaderVisible] = useState(false);

    let handleClick = ()=> {
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('is-nav-open');
        setHeaderVisible(true);
    }

    const handleClickSubcat = (e, subcat) =>{
        console.log('subcategorie clicked: ' + subcat);
        setSubcategorie(subcat);
    }
    const handleClickCategorie = (e, categorie, subcatAll) =>{
        console.log('categorie clicked: ' + categorie);
        setCategorie(categorie);
        setSubcategorie(subcatAll);
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='black-text headline'>TEMPLATES</h2>
                    <div className='nav__icon' type='menu-fold' onClick={handleClick} >
                        <span className='cat black-text'>
                            <h3 className='cat cat-active'>Categories</h3>
                        </span>
                        <div id='wrapper' className='wrapper'>
                        <div className='nav'>
                            <div className='nav__body'>
                                <Categorie handleClickCategorie={handleClickCategorie}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className='offset-lg-4 col-lg-8 margin-bottom-05rem'>
                    <Breadcrumb categorie={categorie} subcategorie={subcategorie}/>
                    <Subcategorie handleClickSubcat={handleClickSubcat} categorie={categorie}/>
                </div>
                <TemplateItem handleClickSubcat={handleClickSubcat} categorie={categorie} subcategorie={subcategorie}/>
            {/* row end */}
            </div>
        {/* container end */}
        </div>
    );
}
export default Templates;