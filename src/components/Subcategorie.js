import React, {useState, useEffect} from 'react';
import './Subcategorie.css';
import subcatData from '../api/subcategoriesData';


const Subcategorie = props => {
    const subcategoriesData = subcatData;
    // const [subcategorie, setSubcategorie] = useState('All');
    const [height, setHeight] = useState('auto');
    const [collapse, setCollapse] = useState('');
    
    const handleClickSubcat = props.handleClickSubcat

    useEffect(() => {
        // const wrapperHeight = document.getElementById('subcategories-wrapper').clientHeight
        // window.addEventListener('resize', ()=>{
            
        //     if(wrapperHeight != 0){
        //         setWrapperheight('auto');
        //     }
        // });
       
        window.addEventListener('scroll', ()=>{
            const isTop = window.scrollY < 50;
            if (isTop) {
                setHeight('1.5rem');
                setCollapse('collapse');
                // setWrapperheight('600px');
            }
            else {
                setHeight('0px');
                setCollapse('collapsed');
                // setWrapperheight('0px');
            }
        });
    },[setHeight]);
    

    return(
        <div className={`subcategories-wrapper ${collapse} `} >
            <span style={{height: height}} className='subcat' onClick={(e) => {handleClickSubcat(e, 'All')}} ><p className='subcat'>All</p></span>
            { subcategoriesData.map( (item, index) => (
                <span style={{height: height}} key={`${index}`} className='subcat' onClick={(e) => {handleClickSubcat(e, item)}} value={`${item}`}><p key={item.index} className='subcat'>{item}</p></span>
            ))}
        </div>
    );
}
export default Subcategorie;