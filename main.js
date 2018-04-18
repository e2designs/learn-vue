Vue.component('message', {
    props: ['title', 'body'],
    data() {
        return {
            isVisible: true
        };
    },
    template: `
    <article class="message" v-show="isVisible">
            <div class="message-header"> 

                {{ title }}
            
                <button type="button" @click="hideModal">x</button>
            </div>
            <div class="message-body"> 

                {{ body }} 

        </div></article>
    `,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }

            
});

Vue.component('my-modal', {
    template: `
    <div class="modal">
        <div class="modal-background"></div>
        <div class='modal-content'>

        </div>
        <button class="modal-close"></button>
    </div>
    `
})

new Vue({
    el: '#root'
});
