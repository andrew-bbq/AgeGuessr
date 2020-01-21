// using vue since that makes this stuff easy
var vm = new Vue({
    el: '#container',
    data: {
        // variables go in here like this
        example: 0,
    },
    methods: {
        //example method
        exampleFunction: function (exampleArg) {
            this.example += exampleArg;
        },
    },
});
