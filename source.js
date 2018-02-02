(function() {

    function makefunctions() {
        let values = ['a', 'b', 'c'];
        let final = [0, 1, 2].map(key => makefunction(values[key]));
        console.log('made functions');
        return final;
    }

    function makefunction(value) {
        return () => console.log(value);
    }

    makefunctions().map(func => func());

})();
