import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {PlayAgain} from '../action/action'
function Header(){
    const tienMat = useSelector((state)=>state.BauCuaReducer.tienMat);
    const dispatch = useDispatch();
    return(
        <header className="mt-5">
            <h1 className="text-center display-3">Bầu Cua CyberSoft</h1>
            <h3 className="text-center text-warning"><span className="text-white  bg-danger px-3">Tiền mặt:{tienMat}$</span></h3>
            <button className="btn btn-secondary d-block m-auto"
                onClick={()=>{
                    dispatch(PlayAgain())
                }}
            >Chơi lại</button>
        </header>
    )
}

export default Header;