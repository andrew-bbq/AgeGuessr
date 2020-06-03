// using vue since that makes this stuff easy
var vm = new Vue({
    el: '#container',
    data: {
        image_base_url: "faces/face_age/",
        map: [],
    },
    mounted: function() {
        this.onCreate();
    },
    methods: {
        onCreate: function() {
            // get json, save to global variable
            $.getJSON("map.json").then((data) => {
                this.map = data;
            });
        },
    },
});
