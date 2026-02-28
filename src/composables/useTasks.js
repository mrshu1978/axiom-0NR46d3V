import { reactive, ref } from 'vue';
import { useToast } from 'vue-toastification';

const tasks = reactive([]);
const deletedTask = ref(null);
let undoTimeoutId = null;

const toast = useToast();

function addTask(text) {
  const trimmedText = text.trim();
  if (!trimmedText) {
    toast.error('Il testo del task non può essere vuoto.');
    return false;
  }
  if (trimmedText.length > 500) {
    toast.error('Il testo del task non può superare 500 caratteri.');
    return false;
  }
  if (tasks.length >= 500) {
    toast.error('Limite di 500 task raggiunto. Elimina alcuni task per aggiungerne nuovi.');
    return false;
  }
  const newTask = {
    id: crypto.randomUUID(),
    text: trimmedText,
    completed: false,
    createdAt: Date.now()
  };
  tasks.push(newTask);
  toast.success('Task aggiunto con successo!');
  return true;
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    toast.info(`Task "${task.text}" ${task.completed ? 'completato' : 'riattivato'}.`);
  }
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    const [deleted] = tasks.splice(index, 1);
    deletedTask.value = deleted;
    
    if (undoTimeoutId) {
      clearTimeout(undoTimeoutId);
    }
    
    toast.info(`Task "${deleted.text}" eliminato.`, {
      timeout: false,
      closeButton: false,
      onClick: () => {
        if (deletedTask.value && tasks.length < 500) {
          tasks.splice(index, 0, deletedTask.value);
          deletedTask.value = null;
          toast.success('Task ripristinato!');
          if (undoTimeoutId) {
            clearTimeout(undoTimeoutId);
            undoTimeoutId = null;
          }
        } else {
          toast.error('Impossibile ripristinare il task.');
        }
      }
    });
    
    undoTimeoutId = setTimeout(() => {
      if (deletedTask.value) {
        deletedTask.value = null;
        toast.clear();
        toast.info('Il task eliminato non è più recuperabile.');
      }
    }, 5000);
  }
}

export function useTasks() {
  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask
  };
}