import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-slate-900/10 border border-dashed border-slate-800/80 rounded-2xl">
        <div className="w-16 h-16 mb-4 text-indigo-400 bg-slate-900/40 rounded-full flex items-center justify-center shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-1.107-.893-2-2-2M9 15v-5.25a6 6 0 0 1 12 0v5.25m-18 0A2.25 2.25 0 0 0 5.25 18h13.5A2.25 2.25 0 0 0 21 15.75V12a3.75 3.75 0 0 0-3.75-3.75H3.75A3.75 3.75 0 0 0 0 12v3.75Z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-300 mb-1">Aucune tâche disponible</h3>
        <p className="text-sm text-slate-500 max-w-xs">Commencez par ajouter une tâche ci-dessus pour rester organisé.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 max-h-[420px] overflow-y-auto pr-1">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}
