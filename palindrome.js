
let palindrome = (str) => {
    str = str.toLowerCase();
    let formattedstr = str.toLowerCase().split('').reverse().join('');
    if(str === formattedstr){
        console.log(str+' is a palindrome');
    }
    else {
        console.log(str+' is not a palindrome');
    }
}

palindrome('dede');
palindrome('madam');