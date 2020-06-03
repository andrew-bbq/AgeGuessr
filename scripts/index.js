// using vue since that makes this stuff easy
var vm = new Vue({
    el: '#container',
    data: {
        // variables go in here like this
        example: 0,
        image_base_url = "faces/face_age/",
    },
    methods: {
        //example method
        exampleFunction: function (exampleArg) {
            this.example += exampleArg;
        },
    },
});
