Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

    data(){
        return {
            tasks: [
                {task: 'Go to church', complete: false},
                {task: 'Go to the Store', complete: false},
                {task: 'Cut up wood', complete: false},
                {task: 'Finish Storage', complete: false}

            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});
