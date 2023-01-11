let nmr = [-2,-1,0,1,2,3];
let pst = [];

function editLet (arg){
    for (i = 0; i < arg.length;i++) {
        if(arg[i] > 0 ){
            pst.push(arg[i]);
        }

    }

    return pst;
}

console.log(editLet(nmr));