
<template>
  <template>
    <div class="card">
      <pv-toolbar>
        <template #start>
          <h2>Toolbar</h2>
          <pv-button label="New" icon="pi pi-plus" class="mr-2" />
          <i class="pi pi-bars p-toolbar-separator mr-2" />
        </template>

        <template #end>
          <pv-button icon="pi pi-search" class="mr-2" />
        </template>
      </pv-toolbar>
    </div>
  </template>
</template>

<script >
import { ref } from 'vue';

const items = ref([
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-times'
  },
  {
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
      window.location.href = 'https://vuejs.org/';
    }
  },
  {
    label: 'Upload',
    icon: 'pi pi-upload',
    command: () => {
      this.$router.push('fileupload');
    }
  }
])
export default {
  name: "header-content"
}
</script>

<style scoped>
pv-toolbar {
}
</style>