<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <span>Bienvenue sur sneaker</span>
  
</template>
<script>const axios = require('axios');
const fs = require('fs');

const fetchData = async (page) => {
    const url = `http://54.37.12.181:1337/api/sneakers?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=100`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error during the get request', error);
        return null;
    }
};

const totalPages = 500;
const allData = [];

const reapeatFetch = async () => {
    for (let page = 1; page <= totalPages; page++) {
        const data = await fetchData(page);
        if (data) {
            allData.push(data);
        }
    }

    const jsonData = JSON.stringify(allData, null, 2);
    fs.writeFileSync('all_data.json', jsonData);
    console.log('All data saved to all_data.json');
};

reapeatFetch();
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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
