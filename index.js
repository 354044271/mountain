let app = new Vue({
    el: '#app',
    data(){
        return{
            ShowMessageInfo:'',
            MessageJsonData:{
                '嵩山_bgis':{
                    info:'嵩山'
                },
                '泰山_bgis':{
                    info:'泰山'
                },
                '衡山_bgis':{
                    info:'衡山'
                },
                '恒山_bgis':{
                    info:'恒山'
                },
            }
        }
    },
    created() {
        window.SwitchInfo = this.SwitchInfo
    },
    methods: {
        SwitchInfo(e){
            this.ShowMessageInfo = this.MessageJsonData[e].info
        }
    },
})
const slideOut = () =>{
    $('.MessageBox').animate({
        right: '0px'
    }, 500)
}
const slideIn = () =>{
    $('.MessageBox').animate({
        right: '-200px'
    }, 500)
}
function SwitchInfos(e){
    SwitchInfo(e)
}