
-- Drop unused todo_items table and its policies
DROP POLICY IF EXISTS "Anyone can view todos" ON public.todo_items;
DROP POLICY IF EXISTS "Anyone can create todos" ON public.todo_items;
DROP POLICY IF EXISTS "Anyone can update todos" ON public.todo_items;
DROP POLICY IF EXISTS "Anyone can delete todos" ON public.todo_items;
DROP TABLE IF EXISTS public.todo_items;

-- Drop unused resume_downloads table and its policies
DROP POLICY IF EXISTS "Anyone can track downloads" ON public.resume_downloads;
DROP POLICY IF EXISTS "Downloads are publicly readable for stats" ON public.resume_downloads;
DROP TABLE IF EXISTS public.resume_downloads;
