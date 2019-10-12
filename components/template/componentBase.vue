<template>
    
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
    name:'',
    data: function(){
        return{
            test:''
        }
    },
        watch: {
            test: function (val, oldVal) {
                console.log('new: %s, old: %s', val, oldVal)
            },
        },
    computed: mapState({
        // count: state => state.count,
    }),
    methods:{
        
    },
    created(){
        
        
    }
}
</script>
<style>

</style>
