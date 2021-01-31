import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Toggle_Bet} from '../action/action'
import {PLUS,MINUS} from '../constants/constants';
function TomCuaCa(){
    const dispatch = useDispatch()
    const {datCuoc} = useSelector((state)=>state.BauCuaReducer);
    return(
        <section className="tomcuaca col-8">
           {
               datCuoc.map((item)=>{
                   return (
                    <div className="tomcuaca_item" key={item.ma}>
                    <img src={item.url} />
                    <div className="bg-success d-flex justify-content-around rounded-pill">
                        <button className="btn btn-danger"
                            onClick={()=>{
                                dispatch(Toggle_Bet(item.ma,PLUS))
                            }}
                        ><i class="fas fa-plus"></i></button>
                        <h3>Đặt: {item.tienCuoc}</h3>
                        <button className="btn btn-danger"
                            onClick={()=>{
                                dispatch(Toggle_Bet(item.ma,MINUS))
                            }}
                        ><i class="fas fa-minus"></i></button>
                    </div>
                </div>
                   )
               })
           }
        </section>
    )
}

export default TomCuaCa;