import React, {useState, useEffect, useRef} from 'react';
import templateItemsDataAPI from '../api/templateItemsData';

const TemplateItem = props => {
    
    const [templateItemsData, setTemplateItemsData] = useState([]);
    const [showSubcategorie, setShowSubcategorie] = useState(props.subcategorie);
    const [showCategorie, setShowCategorie] = useState(props.categorie);
    const [showItems, setShowItems] = useState([]);
    const [items, setItems] = useState([]);
    const handleClickSubcat = props.handleClickSubcat
    useEffect(()=>{
        const fetchData = async () => {
            const result = await (
                templateItemsDataAPI
            );
            setTemplateItemsData(result);
        };
        fetchData().then(handleItems(props.categorie, props.subcategorie,));
    },[props, showSubcategorie, showCategorie, templateItemsData]);
    
    const handleItems = (categorie, subcategorie) =>{
        
        setItems([]);
        if(categorie){
            setShowCategorie(categorie);
            if(categorie === 'All'){
                
                //
                if(subcategorie){
                    setShowSubcategorie(subcategorie);
                    if(subcategorie === 'All'){
                        setShowItems(templateItemsData);
                    }else{
                        templateItemsData.map( (item) => {
                            if(item.subcategories.length > 0){
                                for(let subcat of item.subcategories){
                                    if(subcat === showSubcategorie){
                                        items.push(item);
                                    }
                                }
                            }
                        });setShowItems(items);
                    }
                }
                //
            }else{
                templateItemsData.map( (item) => {
                    if(item.categorie.length > 0){
                        if(item.categorie === categorie){
                            //items.push(item);
                            //
                            if(subcategorie){
                                setShowSubcategorie(subcategorie);
                                if(subcategorie === 'All'){
                                    items.push(item);
                                }else{
                                    // showItems.map( (item) => {
                                        if(item.subcategories.length > 0){
                                            for(let subcat of item.subcategories){
                                                if(subcat === showSubcategorie){
                                                    items.push(item);
                                                }
                                            }
                                        }
                                    //});
                                }
                            }
                            //
                        }
                    }
                });setShowItems(items);

                
                //setShowItems(items);
            }
        }
        
        // if(subcategorie){
        //     setShowSubcategorie(subcategorie);
        //     if(subcategorie === 'All'){
        //         console.log('ALLLLLt: '+showCategorie);
                
        //         setShowItems(templateItemsData);
        //         console.log('ALLLLLt data: '+ showItems);
        //     }else{
        //         showItems.map( (item) => {
        //             if(item.subcategories.length > 0){
        //                 for(let subcat of item.subcategories){
        //                     if(subcat === showSubcategorie){
        //                         items.push(item);
        //                     }
        //                 }
        //             }
        //         });setShowItems(items);
        //     }
        // }
    }

    return(
        <div className='container'>
            <div className='row'>
                { showItems.map( (item) => (
                    <div key={item.id} className='col-md-6 col-lg-4 no-gutters'>
                        <div className='col-md-12'>
                            <hr className='item'/>
                                <div className='item-img'/>
                            <hr className='item'/>
                        </div>
                        <div className='col-md-12'>
                            <div className='row margin-top-1rem margin-bottom-1rem'>
                                <div className='col-8 item-content-wrapper'>
                                    <h3 key={item.id} className='col-pad-r-3 item-header black-text  margin-top-1rem margin-bottom-3rem'>{item.header}</h3>
                                    <p className='item-body-text black-text'>{item.body}</p>
                                    <button className='downloadBtn'>DOWNLOAD</button>
                                </div>
                                <div className='col-4 left-v-line'>
                                    <div className='item-subcat-wrappper '>
                                        {item.subcategories.map( (subcat) => (
                                            <span  key={subcat.index} className='subcat' onClick={(e) => {handleClickSubcat(e, subcat)}}><p key={subcat} className='subcat'>{subcat}</p></span>
                                        ))}
                                    </div>
                                    <div className="pages-wrapper">
                                        <svg className='pages-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 56"><path d="M8,0V4H4V8H0V56H32V52h4V48h4V0ZM31,55H1V9H4V52H31Zm4-4H5V5H8V48H35Zm4-4H9V1H39Z"/></svg>
                                        <text className='pages-text'>{item.pages} pages</text>
                                    </div>
                                </div>
                            </div>
                            <hr className='item'/>
                        </div>
                    </div>
                ) )}
            </div> 
        </div> 
       
    );
}
export default TemplateItem;