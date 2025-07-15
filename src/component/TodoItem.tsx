type Props = {
  id: number;
  title: string;
  content: string;
  publish: boolean;
  onDelete: (id: number) => void;
};

export default function TodoItem({ id, title, content, onDelete }: Props) {
  return (
    <div className="p-4 border rounded shadow mb-2 flex justify-between items-center">
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-gray-500">{content}</p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:underline"
      >
        Xoá
      </button>
    </div>
  );
}
