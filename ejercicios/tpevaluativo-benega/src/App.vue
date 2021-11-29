<template>

    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vue-tpf</a>
        <router-link to="/">Home</router-link> |
        <router-link to="/catalogo">Carga de producto</router-link>|
        <router-link class="nav-link" to="/catalogoPublic">Catalogo</router-link>|
        
        
        </div>
    </nav>

  <div class="container mt-3">
       <router-view />
  </div>
   


 
</template>

