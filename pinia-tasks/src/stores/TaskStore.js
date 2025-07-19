import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {

    state: () => ({

        tasks: [
            {id: 1, title: "Study Vue", isFav: true},
            {id: 2, title: "Go out with Emma", isFav: true},
            {id: 3, title: "Do homework", isFav: false}
        ]
    }),
    getters: {
        favs(){

            return this.tasks.filter(t => t.isFav)
        },
        favCount(){
            return this.tasks.reduce((p, c) => {

                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount() {

            return this.tasks.length;
        }
    },
    actions: {

        addTask(task){

            this.tasks.push(task)

        },
        deleteTask(id){

            this.tasks = this.tasks.filter(t => {
                return t.id !== id;
            })
        },
        toggleFav(id){

            const task = this.tasks.find(t => t.id === id);
            task.isFav = !task.isFav;
        }
    }

})