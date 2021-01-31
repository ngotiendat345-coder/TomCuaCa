const initState={
    datCuoc:[
        {ma:'bau',url:'./img/bau.png',tienCuoc:0},{ma:'ca',url:'./img/ca.png',tienCuoc:0},{ma:'cua',url:'./img/cua.png',tienCuoc:0},{ma:'ga',url:'./img/ga.png',tienCuoc:0},
        {ma:'nai',url:'./img/nai.png',tienCuoc:0},{ma:'tom',url:'./img/tom.png',tienCuoc:0}
    ],
    tienMat:1000,
    mangXucSac:[{ma:'bau',url:'./img/bau.png'},
                {ma:'ca',url:'./img/ca.png'},
                {ma:'tom',url:'./img/tom.png'}
    ],
}
const BauCuaReducer=(state=initState,action)=>{
    switch(action.type){
        case 'TOGGLE_BET':
            let target = state.datCuoc.find((item)=>item.ma===action.payload.ma);
            
            if(action.payload.toggle==='PLUS'){
                if(state.tienMat>=100){
                    state.tienMat-=100;
                    target.tienCuoc+=100;
                }
            }
            if(action.payload.toggle==="MINUS"){
                if(target.tienCuoc>=100){
                    state.tienMat+=100;
                    target.tienCuoc-=100;
                }
            }
            let newDatCuoc=state.datCuoc.map((item)=>{
                if(item.ma===target.ma){
                    return {...item,tienCuoc:target.tienCuoc}
                }
                return item;
            })
            
            return {...state,datCuoc:newDatCuoc}
        case 'PLAY_GAME':
            let xucsacSo1 = Math.floor(Math.random()*6);
            let xucsacSo2 = Math.floor(Math.random()*6);
            let xucsacSo3 = Math.floor(Math.random()*6);
           // let arrayMa = state.datCuoc;
            let xucSac1 = state.datCuoc[xucsacSo1];
            let xucSac2 = state.datCuoc[xucsacSo2];
            let xucSac3 = state.datCuoc[xucsacSo3];
            let newMangXucSac = [xucSac1,xucSac2,xucSac3];
            let newDatcuoc=state.datCuoc.map((choose)=>{
                if(choose.tienCuoc!==0){
                   let newTienCuoc = newMangXucSac.reduce((total,item)=>{
                        if(choose.ma === item.ma){
                            return total + (choose.tienCuoc*2);
                        }
                        return total;
                    },0)
                    console.log(newTienCuoc);
                    return {...choose,tienCuoc:newTienCuoc}
                }
                return choose
            })
            return {...state,mangXucSac:newMangXucSac,datCuoc:newDatcuoc}
        case 'PLAY_AGAIN':
            return {...state,tienMat:500}
        default:return state;
    }
   
}

export default BauCuaReducer;