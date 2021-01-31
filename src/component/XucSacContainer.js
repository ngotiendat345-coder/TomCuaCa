import React from 'react';
import XucSac from './XucSac'
import {useSelector,useDispatch} from 'react-redux'
import {PlayGame} from '../action/action';
function XucSacContainer(){
    const {mangXucSac,tienMat}=useSelector((state)=>state.BauCuaReducer);
    const dispatch=useDispatch();
    return(
        <article>
            <div className="plate_container">
           {mangXucSac.map((item,index)=>{
               return  <XucSac active={item.url} key={index} index={index}/>
           })}
        </div>
        <button className="btn" style={{width:'300px'}}
            onClick={()=>{
                dispatch(PlayGame())
            }}
        >
            <img src="./img/soc.png" className="img-fluid"/>
        </button>
        <div>
           <h3 >Còn lại: <span className="text-danger">{tienMat}$</span></h3>
        </div>
        </article>
    )
}

export default XucSacContainer;