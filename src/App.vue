<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/Register" class="nav-link">Registro</RouterLink>
        <RouterLink to="/student" class="nav-link">Alumnos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
}


.wrapper {
  width: 100%;
  height: 100%;
}

nav {
  width: 110%; 
  background-color: #333;
  margin-top: 1.5rem;
  text-align: center;
}

nav a {
  color: #fff;
  display: inline-block;
  padding: 0 5rem;
  margin-right: 1rem;
  margin-left: 10%;
  transition: color 0.3s ease;
}

nav a.router-link-exact-active {
  background-color: #666;
}

nav a:hover {
  color: #ffcc00;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
