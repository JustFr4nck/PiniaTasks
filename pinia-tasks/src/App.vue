<script>
  import TaskDetail from './components/TaskDetail.vue';
  import TaskForm from './components/TaskForm.vue';
  import { useTaskStore } from './stores/TaskStore';
  import { ref } from 'vue';
  
  export default{
    components: {TaskDetail, TaskForm},
    setup () {
      const taskStore = useTaskStore();

      const filter = ref('all');

      return {taskStore, filter};
    }
  }

</script>

<template>
  <main>

    <header>
      <img src="./assets/pinia-seeklogo.svg" alt="pinia logo" >
      <h1>Pinia Tasks</h1>
    </header>

    <!-- newTask -->

    <div class="new-Task-Form">
      <TaskForm/>
    </div>

    <!--Filter-->

    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!--task list-->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetail :task = "task"/>
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Your have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetail :task = "task"/>
      </div>
    </div>

  </main>
</template>

