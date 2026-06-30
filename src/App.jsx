import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function App() {
  // Load initial state from LocalStorage
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading tasks from LocalStorage', e);
      return [];
    }
  });

  // Save to LocalStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Stats calculation
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const remainingCount = totalCount - completedCount;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col gap-6 relative overflow-hidden">
        {/* Decorative background glow effects inside the card */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col gap-2 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-xl shadow-md text-white shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-1.107-.893-2-2-2M9 15v-5.25a6 6 0 0 1 12 0v5.25m-18 0A2.25 2.25 0 0 0 5.25 18h13.5A2.25 2.25 0 0 0 21 15.75V12a3.75 3.75 0 0 0-3.75-3.75H3.75A3.75 3.75 0 0 0 0 12v3.75Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">Interactive To-Do List</h1>
              <p className="text-xs text-slate-400">Gérez vos tâches au quotidien avec style</p>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 relative z-10 bg-slate-950/30 border border-slate-800/40 p-4 rounded-xl">
          <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 bg-slate-900/40 rounded-lg">
            <span className="text-lg sm:text-xl font-extrabold text-indigo-400">{totalCount}</span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Total</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 bg-slate-900/40 rounded-lg">
            <span className="text-lg sm:text-xl font-extrabold text-emerald-400">{completedCount}</span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Terminées</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 bg-slate-900/40 rounded-lg">
            <span className="text-lg sm:text-xl font-extrabold text-amber-400">{remainingCount}</span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Restantes</span>
          </div>
        </div>

        {/* Task Form */}
        <div className="relative z-10">
          <TodoForm onAddTodo={handleAddTodo} />
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800/60 w-full relative z-10" />

        {/* Task List */}
        <div className="relative z-10 flex-1">
          <TodoList
            todos={todos}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
      </div>
    </div>
  );
}
