-- Create todo_items table
CREATE TABLE public.todo_items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  is_complete BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.todo_items ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (anyone can manage todos)
CREATE POLICY "Anyone can view todos" 
ON public.todo_items 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create todos" 
ON public.todo_items 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update todos" 
ON public.todo_items 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete todos" 
ON public.todo_items 
FOR DELETE 
USING (true);