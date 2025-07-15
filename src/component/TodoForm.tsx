"use client";
import { useState } from "react";
import { addTodo } from "@/lib/api";

type Props = {
  onAdd: () => void;
};

export default function TodoForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [publish, setPublish] = useState(true);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !content) return;
    await addTodo(title, content, publish);
    setTitle("");
    setContent("");
    onAdd();
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="border px-2 py-1 mr-2"
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border px-2 py-1 mr-2"
        placeholder="Nội dung"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <label className="inline-flex items-center space-x-2 mr-4">
        <input
            type="checkbox"
            checked={publish}
            onChange={(e) => setPublish(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-500"
        />
        <span>Public</span>
        </label>
      <button className="bg-blue-500 text-white px-4 py-1 rounded">
        Thêm
      </button>
    </form>
  );
}
