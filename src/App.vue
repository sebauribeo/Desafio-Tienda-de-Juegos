<template>
  <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">32bits</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link p-3" to="/inicio">Inicio <span class="sr-only">(current)</span></router-link>
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
  </div>
</template>

<style>

</style>
