import React, {useState, useEffect,useLayoutEffect} from 'react';
import ReactDOM from "react-dom";
import Categorie from './Categorie';
import Subcategorie from './Subcategorie';
import './Item.css';

const Item = props => {
    const [headervisible, setHeaderVisible] = useState(false);
    const [background, setBackground] = useState('red');
    const [h3Class, setH3Class] = useState(['123']);

    const textColor='black-text'; //CSS
    
    
    let handleClick = ()=> {
        const wrapper = document.getElementById('wrapper');
        wrapper.classList.toggle('is-nav-open');
        setHeaderVisible(true);
    }

    // const node = ReactDOM.findDOMNode(this);
    // const child = node.querySelector('item-header');
    // function  handlePick(){
        
       
    //     // Get child nodes
    //     if (node instanceof HTMLElement) {
    //         child.inViewport(function(px){
    //             if(px) (this).addClass("viewportLine") ;
    //         });
    //     }
    //  }
    const h3 = document.querySelector('h3');
    let h3Ref = React.createRef()
    

    useEffect(() => {
        // if (isInViewport(h3)) {
        //     h3.addClass("viewportLine") ;
        // }
        const div = h3Ref.current
        h3Class.push('viewportLine');
        h3Class.push('green');
        
        const {y} = div.getBoundingClientRect()
        window.addEventListener('scroll', ()=>{
            // const isTop = window.scrollY < 100;
            // if (isTop) setBackground('yellow')
            // else setBackground('#000000')
            
        if (y <=617) {setBackground('yellow'); h3Class.push('viewportLine');}
        else {setBackground('#000000'); }
        });
        // window.addEventListener('scroll', isInViewport());
        return () => {
            window.removeEventListener("scroll", isInViewport()); setH3Class(['123a'])
          };
      },[setBackground,h3Class]);
    
    const isInViewport = event => {
        // var bounding = elem.getBoundingClientRect();
        // return (
        //     bounding.top >= 0 &&
        //     bounding.left >= 0 &&
        //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        // );
        
        const div = h3Ref.current
        const {y} = div.getBoundingClientRect()
        if (y <=617) setBackground('yellow')
        else setBackground('#000000')
            
    };

    
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
                                {/* <span className='cat black-text'>
                                    <h3 className='cat cat-active'>Brainstorm cards</h3>
                                    <h3 className='cat'>Business cards</h3>
                                    <h3 className='cat'>Business plan</h3>
                                    <h3 className='cat'>Buyer persona</h3>
                                    <h3 className='cat'>Cross-industry</h3>
                                    <h3 className='cat'>Customer journey</h3>
                                    <h3 className='cat'>Decision making</h3>
                                    <h3 className='cat'>E-mail template</h3>
                                    <h3 className='cat'>Experiment card</h3>
                                    <h3 className='cat'>Financial card</h3>
                                    <h3 className='cat'>GDPR</h3>
                                    <h3 className='cat'>ID cards</h3>
                                    <h3 className='cat'>Innovation budget plan</h3>
                                    <h3 className='cat'>Innovation project schedule</h3>
                                    <h3 className='cat'>Outreach</h3>
                                    <h3 className='cat'>Pitch deck</h3>
                                    <h3 className='cat'>Problem solving</h3>
                                </span> */}
                                <Categorie textColor={textColor}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='offset-md-6 col-md-6 breadcrumb'>
                    <h5 className={`${textColor} margin-top-000rem`}>Resources > Templates > Brainstorm cards > All</h5>
                </div>
                
                <div className='offset-md-6 col-md-6 margin-bottom-05rem'>
                    {/* <span className='subcat'><p className='subcat'>All</p></span>
                    <span className='subcat'><p className='subcat'>Business</p></span>
                    <span className='subcat'><p className='subcat'>UI</p></span>
                    <span className='subcat'><p className='subcat'>Marketing</p></span>
                    <span className='subcat'><p className='subcat'>Product</p></span>
                    <span className='subcat'><p className='subcat'>Email</p></span>
                    <span className='subcat'><p className='subcat'>Presentation</p></span> */}
                    <Subcategorie/>
                </div>
                {/* <div className='col-md-6 margin-bottom-05rem'>
                    
                    <div id='wrapper' className='wrapper'>
                        <div className='nav'>
                            
                            <div className='nav__body'>
                                <span className='cat black-text'>
                                    <h3 className='cat cat-active'>Brainstorm cards</h3>
                                    <h3 className='cat'>Business cards</h3>
                                    <h3 className='cat'>Business plan</h3>
                                    <h3 className='cat'>Buyer persona</h3>
                                    <h3 className='cat'>Cross-industry</h3>
                                    <h3 className='cat'>Customer journey</h3>
                                    <h3 className='cat'>Decision making</h3>
                                    <h3 className='cat'>E-mail template</h3>
                                    <h3 className='cat'>Experiment card</h3>
                                    <h3 className='cat'>Financial card</h3>
                                    <h3 className='cat'>GDPR</h3>
                                    <h3 className='cat'>ID cards</h3>
                                    <h3 className='cat'>Innovation budget plan</h3>
                                    <h3 className='cat'>Innovation project schedule</h3>
                                    <h3 className='cat'>Outreach</h3>
                                    <h3 className='cat'>Pitch deck</h3>
                                    <h3 className='cat'>Problem solving</h3>
                                </span>
                            </div>
                        </div>
                    </div>

                    
                </div> */}
                
            
                <div className='col-md-6 col-lg-4 no-gutters'>
                    <div className='col-md-12'>
                        <hr className='item'/>
                            <div className='item-img'/>
                        <hr className='item'/>
                    </div>
                    <div className='col-md-12'>
                        <div className='row margin-top-1rem margin-bottom-1rem'>
                            <div className='col-8 item-content-wrapper'>
                                {/* <h3 className="col-pad-r-3 item-header black-text  margin-top-1rem margin-bottom-3rem"> */}
                                <h3  ref={h3Ref} style={{background: background}} className={` col-pad-r-3 item-header black-text  margin-top-1rem margin-bottom-3rem ${h3Class.join(' ')} ${headervisible ? 'viewportLine' : '' }`}>
                                    MUST HAVE BRAINSTORM CARDS
                                </h3>
                                <p className='item-body-text black-text'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis trud 
                                </p>
                                <button className='downloadBtn'>DOWNLOAD</button>
                            </div>
                            <div className='col-4 left-v-line'>
                                <div className='item-subcat-wrappper'>
                                    <span className='subcat'><p className='subcat'>Business</p></span>
                                    <span className='subcat'><p className='subcat'>UI</p></span>
                                    <span className='subcat'><p className='subcat'>Marketing</p></span>
                                </div>
                                <div class="pages-wrapper">
                                    <svg className='pages-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 56"><path d="M8,0V4H4V8H0V56H32V52h4V48h4V0ZM31,55H1V9H4V52H31Zm4-4H5V5H8V48H35Zm4-4H9V1H39Z"/></svg>
                                    <text className='pages-text'>7 pages</text>
                                </div>
                            </div>
                        </div>
                        <hr className='item'/>
                    </div>
                </div> 

                
                <div className='col-md-6 col-lg-4 no-gutters'>
                    <div className='col-md-12'>
                        <hr className='item'/>
                            <div className='item-img'/>
                        <hr className='item'/>
                    </div>
                    <div className='col-md-12'>
                        <div className='row margin-top-1rem margin-bottom-1rem'>
                            <div className='col-8 item-content-wrapper'>
                                <h3 className="col-pad-r-3 item-header black-text  margin-top-1rem margin-bottom-3rem">
                                    THE BEST BRAINSTORM CARDS BRAINSTORM BRAINSTORM BRAINSTORM BRAINSTORM
                                </h3>
                                <p className='item-body-text black-text'>
                                    123
                                </p>
                                <button className='downloadBtn'>DOWNLOAD</button>
                            </div>
                            <div className='col-4 left-v-line'>
                                <div className='item-subcat-wrappper'>
                                    <span className='subcat'><p className='subcat'>Product</p></span>
                                    <span className='subcat'><p className='subcat'>Email</p></span>
                                    <span className='subcat'><p className='subcat'>Marketing</p></span>
                                    <span className='subcat'><p className='subcat'>UI</p></span>
                                </div>
                                <div class="pages-wrapper">
                                    <svg className='pages-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 56"><path d="M8,0V4H4V8H0V56H32V52h4V48h4V0ZM31,55H1V9H4V52H31Zm4-4H5V5H8V48H35Zm4-4H9V1H39Z"/></svg>
                                    <text className='pages-text'>5 pages</text>
                                </div>
                            </div>
                        </div>
                        <hr className='item'/>
                    </div>
                </div> 


                <div className='col-md-6 col-lg-4 no-gutters'>
                    <div className='col-md-12'>
                        <hr className='item'/>
                            <div className='item-img'/>
                        <hr className='item'/>
                    </div>
                    <div className='col-md-12 '>
                        <div className='row margin-top-1rem margin-bottom-1rem'>
                            <div className='col-8 item-content-wrapper'>
                                <h3 className="col-pad-r-3 item-header black-text  margin-top-1rem margin-bottom-3rem">
                                    THE BEST BRAINSTORM CARDS
                                </h3>
                                <p className='item-body-text black-text'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis trud 

                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis trud 
                                </p>
                                <button className='downloadBtn'>DOWNLOAD</button>
                            </div>
                            <div className='col-4 left-v-line'>
                                <div className='item-subcat-wrappper'>
                                    <span className='subcat'><p className='subcat'>Finance</p></span>
                                    <span className='subcat'><p className='subcat'>Planning</p></span>
                                    <span className='subcat'><p className='subcat'>Growth</p></span>
                                </div>
                                <div class="pages-wrapper">
                                    <svg className='pages-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 56"><path d="M8,0V4H4V8H0V56H32V52h4V48h4V0ZM31,55H1V9H4V52H31Zm4-4H5V5H8V48H35Zm4-4H9V1H39Z"/></svg>
                                    <text className='pages-text'>3 pages</text>
                                </div>
                            </div>
                        </div>
                        <hr className='item'/>
                    </div>
                </div> 

                <div className='col-md-6 col-lg-4 no-gutters'>
                    <div className='col-md-12'>
                        {/* <hr className='item'/> */}
                            <div className='item-img'/>
                        <hr className='item'/>
                    </div>
                    <div className='col-md-12'>
                        <div className='row margin-top-1rem margin-bottom-1rem'>
                            <div className='col-8 item-content-wrapper'>
                                <h3 ref={h3Ref} style={{background: background}} className={` col-pad-r-3 item-header black-text  margin-top-1rem margin-bottom-3rem ${headervisible ? 'viewportLine' : '' }`}>
                                    SUPER CARDS
                                </h3>
                                <p className='item-body-text black-text'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.
                                </p>
                                <button className='downloadBtn'>DOWNLOAD</button>
                            </div>
                            <div className='col-4 left-v-line'>
                                <div className='item-subcat-wrappper'>
                                    <span className='subcat'><p className='subcat'>UX</p></span>
                                    <span className='subcat'><p className='subcat'>Persona</p></span>
                                </div>
                                <div class="pages-wrapper">
                                    <svg className='pages-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 56"><path d="M8,0V4H4V8H0V56H32V52h4V48h4V0ZM31,55H1V9H4V52H31Zm4-4H5V5H8V48H35Zm4-4H9V1H39Z"/></svg>
                                    <text className='pages-text'>1 page</text>
                                </div>
                            </div>
                        </div>
                        <hr className='item'/>
                    </div>
                </div> 

            {/* row end */}
            </div>

        {/* container end */}
        </div>
    );
}
export default Item;