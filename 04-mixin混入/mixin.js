export const mixin = {
    methods: {
        showMsg() {
            console.log(this);
            alert(this.msg);
        },
    },
};