// Hello

// const array=["dog","cat","cow","cat","dog","dog","cow"]

// output obj={"dog":2,"cat":1}



const Array= ["dog","cat","cow","cat","dog","dog","cow"]


function Count(Array){
    var variable1={};

    for(var i=0;i<Array.length;i++)
    {

        if(variable1.hasOwnProperty(Array[i]))
        {
          
            variable1[Array[i]]=variable1[Array[i]]+1     //for counting
        }

        else
        {
            variable1[Array[i]]=1
        }
    }

    return variable1
}

console.log(Count(Array));
