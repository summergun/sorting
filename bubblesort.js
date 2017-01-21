function bubbleSort(arr){

    var swap=true;
//var counter=arr.length;
if(arr.length===0){
    return [];
}
   while(swap){
       swap=false;
         for(var i=0;i<arr.length;i++){
             var current=arr[i];
             var next=arr[i+1];
             if(current>next){
                console.log(current,next);
                 var temp=arr[i];
                 arr[i]=next;
                 arr[i+1]=temp;
                 swap=true;
             }       
             
            
    }
    //counter--;

    }
    console.log (arr);
return arr;
  }


