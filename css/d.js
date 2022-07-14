function fibonacciGenerator(n){

    var fiboArray=[0,1];
      var j=1;
      for(var i=0;i<=n;i++){
        j=j+i;
        fiboArray.push[j];
      }
      return fiboArray;
    }
    ray= fibonacciGenerator(10);
    console.log(ray);