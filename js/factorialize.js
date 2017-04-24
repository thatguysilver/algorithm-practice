function factorialize(num) {
  if (num !== 0){ 
    for (i=num; i > 1; i--) {
      num = num*(i-1);
    }
    return num;
    }else return 1;
} 

factorialize(5);

//Not the most elegant solution, but it'll do.
