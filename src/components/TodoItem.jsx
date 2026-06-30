export default function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <div className={`flex items-center justify-between p-4 bg-slate-900/30 border border-slate-800/60 rounded-xl hover:border-slate-700/50 hover:bg-slate-900/50 transition-all duration-300 group ${todo.completed ? 'opacity-80' : ''}`}>
      <div className="flex items-center gap-3.5 flex-1 min-w-0">
        <button
          onClick={() => onToggleTodo(todo.id)}
          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-200 shrink-0 ${
            todo.completed
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 border-transparent shadow-md shadow-emerald-500/10'
              : 'border-slate-600 hover:border-indigo-500 bg-slate-950/40'
          }`}
        >
          {todo.completed && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-3.5 h-3.5 text-white">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>
        <span
          onClick={() => onToggleTodo(todo.id)}
          className={`text-base font-medium break-all select-none cursor-pointer transition-all duration-300 flex-1 ${
            todo.completed
              ? 'line-through text-slate-500'
              : 'text-slate-200'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="p-2 rounded-lg text-slate-500 hover:text-rose-500 hover:bg-rose-500/10 transition-all duration-200 shrink-0 cursor-pointer md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
        title="Supprimer la tâche"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  );
}
