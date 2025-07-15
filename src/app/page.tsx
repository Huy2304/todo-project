"use client";

import { useEffect, useState } from "react";
import { fetchTodos, deleteTodo } from "@/lib/api";
import TodoForm from "@/component/TodoForm";
import TodoItem from "@/component/TodoItem";

type Todo = {
  id: number;
  title: string;
  content: string;
  publish: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function load() {
    const data = await fetchTodos();
    setTodos(data);
  }

  async function handleDelete(id: number) {
    await deleteTodo(id);
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📝 Quản lý To-do</h1>
      <TodoForm onAdd={load} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onDelete={handleDelete}
        />
      ))}
    </main>
  );
}
