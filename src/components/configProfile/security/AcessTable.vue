<script setup>
const AuthTable = [
  {
    ip: '191.52.55.186',
    country: 'Brasil',
    lastLogin: "Há 3 semanas",
    status: ''
  },
  {
    ip: '191.52.55.186',
    country: 'Brasil',
    lastLogin: "Há 3 semanas",
    status: ''
  },
  {
    ip: '191.52.55.186',
    country: 'Brasil',
    lastLogin: "Há 3 semanas",
    status: ''
  }
]

</script>

<template>
  <div class="table-container">

    <div class="border-table">
      <table>
        <thead>
          <tr>
            <th>IP</th>
            <th>País</th>
            <th>Ultimo login</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in AuthTable" :key="index">
            <td>
              {{ item.ip }}
            </td>
            <td><div class="teste"><img src="../../../assets/images/configProfile/Brazilian-circle-flag.png" alt=""> {{ item.country }}</div></td>
            <td>{{ item.lastLogin }}</td>
            <td>{{ item.status }}</td>
            <td class="tdTrash" > <div class="tete">
                <img src="../../../assets/images/configProfile/trash-icon.png" alt="">
            </div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
@import '../../../assets/Sass/configProfile/_acessTable.scss';
</style>
