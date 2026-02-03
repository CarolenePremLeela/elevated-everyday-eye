import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface TodoItem {
  id: number;
  title: string;
  is_complete: boolean;
}

const initialTodos: TodoItem[] = [
  { id: 1, title: "Learn React", is_complete: true },
  { id: 2, title: "Build a portfolio", is_complete: false },
  { id: 3, title: "Deploy to production", is_complete: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const [newTodo, setNewTodo] = useState("");
  const { toast } = useToast();

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const newItem: TodoItem = {
        id: Date.now(),
        title: newTodo,
        is_complete: false,
      };
      setTodos([...todos, newItem]);
      setNewTodo("");
      toast({ title: "Todo added successfully" });
    }
  };

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, is_complete: !todo.is_complete } : todo
    ));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast({ title: "Todo deleted successfully" });
  };

  return (
    <section id="todos" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo List</h2>
          <p className="text-muted-foreground">Manage your tasks efficiently</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>My Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleAddTodo} className="flex gap-2">
              <Input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1"
              />
              <Button type="submit">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </form>

            {todos.length > 0 ? (
              <div className="space-y-2">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <Checkbox
                      checked={todo.is_complete}
                      onCheckedChange={() => handleToggle(todo.id)}
                    />
                    <span
                      className={`flex-1 ${
                        todo.is_complete
                          ? "line-through text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {todo.title}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(todo.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                No todos yet. Add one to get started!
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TodoList;
