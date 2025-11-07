-- Create storage bucket for resume
INSERT INTO storage.buckets (id, name, public)
VALUES ('resumes', 'resumes', true);

-- Create RLS policies for resume bucket
CREATE POLICY "Resume is publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'resumes');

CREATE POLICY "Only authenticated users can upload resume"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'resumes' AND auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update resume"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'resumes' AND auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can delete resume"
ON storage.objects
FOR DELETE
USING (bucket_id = 'resumes' AND auth.role() = 'authenticated');

-- Create downloads tracking table
CREATE TABLE public.resume_downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  downloaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  visitor_id TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT
);

-- Enable RLS
ALTER TABLE public.resume_downloads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert download records
CREATE POLICY "Anyone can track downloads"
ON public.resume_downloads
FOR INSERT
WITH CHECK (true);

-- Only allow reading download stats (for admin purposes)
CREATE POLICY "Downloads are publicly readable for stats"
ON public.resume_downloads
FOR SELECT
USING (true);

-- Create index for faster queries
CREATE INDEX idx_resume_downloads_visitor_id ON public.resume_downloads(visitor_id);
CREATE INDEX idx_resume_downloads_downloaded_at ON public.resume_downloads(downloaded_at);