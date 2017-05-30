function spinalCase(str) {
    //replace all spaces and underscores with a dash
    str = str.replace(/ /g, '-');
    str = str.replace(/_/g, '-');
    //copy of the array split into chars
    const split = str.split('');
    //for each char of the arr
    let mapped = split.map((val, ind, arr) => {
        //lower case the fisrt char
        if(ind === 0 && val === val.toUpperCase()) {
             val = val.toLowerCase();
             return val;
        //else if char is uppercase and not a '-'
        } else if (val === val.toUpperCase() && val !== '-') {
            //if char is not preceded by a '-'
            if(arr[ind - 1] !== '-') {
                val = '-' + val.toLowerCase();
            //if preceded by a '-', just lower ase it
            } else {
                val = val.toLowerCase();
            }
              return val;
        //just return val if char is neither uppercase nor a dash
        } else return val;
    });
    const rejoined = mapped.join('');
    console.log(rejoined);
    return rejoined;
   
}

spinalCase("This Is Spinal_Tap");
// spinalCase('ThisIsSpinalTapThis Is Spinal Tap this is spinal tap');
