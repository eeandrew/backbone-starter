require.config({
    baseUrl: './',
    shim: {
        underscore: {
            exports: '_'
        },
    },
    paths: {
        jquery: './node_modules/jquery/dist/jquery.min',
        underscore: './node_modules/underscore/underscore-min',
        backbone: './node_modules/backbone/backbone-min'
    }
});

require(['app'],function(AppView){
    var appView = new AppView;
})