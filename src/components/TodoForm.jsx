import { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-row gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ajouter une nouvelle tâche..."
        className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 shadow-inner"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span className="hidden sm:inline">Ajouter</span>
      </button>
    </form>
  );
}
