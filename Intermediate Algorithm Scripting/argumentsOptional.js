<script>
function addTogether(a, b) {
    if(arguments.length === 2) {
        return a + b
    }; 
    return function(n) {return a + n};
}

// var sumTwoAnd = addTogether(2);
// console.log(sumTwoAnd(3));
console.log(2, 3);
</script>