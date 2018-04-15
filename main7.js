Vue.component('task', {
    template: '<li><slot></slot></li>'
});

Vue.component('column', {
    template: '<li><slot>{{ message }}</slot></li>',

    data(){
        return {
            message: 'foobar'
        };
    }
});

new Vue({
    el: '#root'
});
