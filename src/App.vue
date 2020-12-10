<template>
  <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand pl-5" href="#">32bits</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link p-3" to="/">Inicio</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link p-3" to="/busqueda">Búsquedas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link p-3" to="/ventas">Ventas</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link p-3" to="/total">Total</router-link>
                </li>
            </ul>
        </div>
        </nav>
        <router-view></router-view>
  </div>
</template>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
body {
    margin: 0;
    padding: 0;
    height: 140vh;
    font-family: monospace;
    background-image: linear-gradient(36deg, #ffffff, #ff7d04, #008600, #b40000 , #a0a000,  #4d4dff, #9802c5, #ffffff);
    background-size: 400%;
    animation: bg 15s infinite;
}

@keyframes bg {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
} 
</style>
