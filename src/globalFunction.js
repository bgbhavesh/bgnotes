const stringTruncat =(str,size)=>{
    if(str.length>=size){
        return str.substring(0,size)+'...';
    }
    else return str;
}

export  {stringTruncat};