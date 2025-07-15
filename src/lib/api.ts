
export const API_URL = "http://localhost:8000"

export async function fetchTodos() {
  const res = await fetch(`${API_URL}/notes`);
  return res.json();
}

export async function addTodo(title: string, content: string, publish: boolean) {
  const res = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, publish }),
  });
  return res.json();
}


export async function deleteTodo(id: number) {
  await fetch(`${API_URL}/notes/${id}`, { method: "DELETE" });
}
