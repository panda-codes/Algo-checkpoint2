let set1 = [1,3,7,9];

let set2 = [1,2,3,4,9];

let number = 0;

let sum = 0;

let result = [];

for (i=0;i<set2.length;i++) {
    function checker2() {
        number = set2[i];
        for (j=0;j<set1.length;j++){
            if (number===set1[j]) {
                break;
            } 
            else if(j === set1.length-1){
                sum+=number;
                result+=number;
                console.log(number)
            }
        }
            
    }
    checker2();
}

for (i=0;i<set1.length;i++) {
    function checker1() {
        number = set1[i];
        for (j=0;j<set2.length;j++){
            if (number===set2[j]) {
                break;
            } 
            else if(j === set2.length-1){
                sum+=number;
                result+=number;
                console.log(number)
            }
        }
            
    }
    checker1();
}

console.log(sum);


