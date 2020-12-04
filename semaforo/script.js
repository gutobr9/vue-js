Vue.component('semaforo', {
    template: `
        <div>
            <slot></slot>
        </div>
    `
})

let luz = {
    template: `
        <div class="luz"></div>
    `
}

let app = new Vue({
    el: '#app',
    data: {
        bindFechar: true,
        bindAtencao: false,
        bindAbrir: false,
    },
    methods: {
        abrir: function () {
            if (this.bindFechar) {
                this.bindAbrir = true;
                this.bindAtencao = false;
                this.bindFechar = false;
            }
        },
        fechar: function () {
            if(this.bindAbrir){
                this.bindAbrir = false;
                this.bindAtencao = true;
                var time = setInterval(() => {
                    this.bindAtencao = false;
                    this.bindFechar = true;
                    clearInterval(time);
                }, 2000);
            }
        },
    },
    components: {
        luz
    }
});