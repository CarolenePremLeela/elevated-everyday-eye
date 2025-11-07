import { supabase } from "@/integrations/supabase/client";

// Generate or retrieve a unique visitor ID
const getVisitorId = (): string => {
  let visitorId = localStorage.getItem('visitor_id');
  
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('visitor_id', visitorId);
  }
  
  return visitorId;
};

// Track resume download
export const trackResumeDownload = async () => {
  try {
    const visitorId = getVisitorId();
    const userAgent = navigator.userAgent;
    
    const { error } = await supabase
      .from('resume_downloads')
      .insert({
        visitor_id: visitorId,
        user_agent: userAgent,
      });
    
    if (error) {
      console.error('Error tracking download:', error);
    }
  } catch (error) {
    console.error('Error tracking download:', error);
  }
};

// Download resume and track it
export const downloadResume = async () => {
  try {
    // Track the download
    await trackResumeDownload();
    
    // Get the resume file from storage
    const { data, error } = await supabase
      .storage
      .from('resumes')
      .download('resume.pdf');
    
    if (error) {
      console.error('Error downloading resume:', error);
      throw error;
    }
    
    // Create a download link
    const url = window.URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Carolene_Prem_Leela_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading resume:', error);
    throw error;
  }
};

// Get total download count
export const getDownloadCount = async (): Promise<number> => {
  try {
    const { count, error } = await supabase
      .from('resume_downloads')
      .select('*', { count: 'exact', head: true });
    
    if (error) {
      console.error('Error getting download count:', error);
      return 0;
    }
    
    return count || 0;
  } catch (error) {
    console.error('Error getting download count:', error);
    return 0;
  }
};
