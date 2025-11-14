import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
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

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("todo_items")
        .select("*")
        .order("id", { ascending: true });
      
      if (error) throw error;
      return data as TodoItem[];
    },
  });

  const addTodoMutation = useMutation({
    mutationFn: async (title: string) => {
      const { error } = await supabase
        .from("todo_items")
        .insert({ title, is_complete: false });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setNewTodo("");
      toast({ title: "Todo added successfully" });
    },
    onError: () => {
      toast({ title: "Failed to add todo", variant: "destructive" });
    },
  });

  const toggleTodoMutation = useMutation({
    mutationFn: async ({ id, is_complete }: { id: number; is_complete: boolean }) => {
      const { error } = await supabase
        .from("todo_items")
        .update({ is_complete: !is_complete })
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase
        .from("todo_items")
        .delete()
        .eq("id", id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast({ title: "Todo deleted successfully" });
    },
  });

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodoMutation.mutate(newTodo);
    }
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
              <Button type="submit" disabled={addTodoMutation.isPending}>
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </form>

            {isLoading ? (
              <p className="text-center text-muted-foreground py-8">Loading todos...</p>
            ) : todos && todos.length > 0 ? (
              <div className="space-y-2">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                  >
                    <Checkbox
                      checked={todo.is_complete}
                      onCheckedChange={() =>
                        toggleTodoMutation.mutate({
                          id: todo.id,
                          is_complete: todo.is_complete,
                        })
                      }
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
                      onClick={() => deleteTodoMutation.mutate(todo.id)}
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
