<template>
    <div class="inicio text-center  text-white m-5">
        <h1 class="inicio__2">{{titulo}}</h1>
        <h2 class="inicio__2">{{subTitulo}}</h2>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

    export default {
        name: 'Inicio',
        computed: {
        ...mapGetters(['titulo', 'subTitulo']),
    },
        
        
}
</script>

<style>
.inicio {
    padding-top: 100px;
    display: block;
    align-items: center;
}
.inicio__2 {
    padding: 10px;
    font-size: 100px;
}

</style>