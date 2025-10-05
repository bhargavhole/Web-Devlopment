document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter the task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
   
            </span>

            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>

        </div>
        `;

        var current_task = document.querySelectorAll('.delete')
        // This for loop will only assign the onclick function to each button
        for(var i=0; i<current_task.length; i++){       
            current_task[i].onclick = function(){  
                this.parentNode.remove();
            }
        }

        var task_name = document.querySelectorAll('.task')
        for(var i=0; i<task_name.length; i++){
            task_name[i].onclick = function(){
                this.classList.toggle('completed');
            }

        }

        document.querySelector("#newtask input").value = "";
    }
}