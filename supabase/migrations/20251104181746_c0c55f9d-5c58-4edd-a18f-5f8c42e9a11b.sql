-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  achievements TEXT[] NOT NULL DEFAULT '{}',
  tags TEXT[] NOT NULL DEFAULT '{}',
  featured BOOLEAN NOT NULL DEFAULT false,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow public read access (portfolio is public)
CREATE POLICY "Projects are publicly readable"
ON public.projects
FOR SELECT
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Insert the projects data
INSERT INTO public.projects (title, description, achievements, tags, featured, order_index) VALUES
(
  'Tikkl - Merchant App',
  'Led the development of the merchant-side mobile application for the Tikkl platform, enabling businesses to manage transactions, view analytics, and handle customer interactions.',
  ARRAY[
    'Implemented real-time transaction monitoring',
    'Developed comprehensive analytics dashboard',
    'Built secure payment processing integration',
    'Achieved 99.9% uptime in production'
  ],
  ARRAY['React Native', 'TypeScript', 'Firebase', 'Payment APIs'],
  true,
  1
),
(
  'Tikkl - Customer Ordering App',
  'Designed and built the customer-facing mobile application that revolutionized the ordering experience for restaurant patrons.',
  ARRAY[
    'Created intuitive ordering interface',
    'Integrated QR code scanning for table ordering',
    'Implemented real-time order tracking',
    'Reduced order processing time by 40%'
  ],
  ARRAY['React Native', 'Redux', 'REST APIs', 'Push Notifications'],
  true,
  2
),
(
  'Tikkl - Admin Web Portal',
  'Architected and developed a comprehensive admin portal for system-wide management and monitoring.',
  ARRAY[
    'Built role-based access control system',
    'Developed advanced reporting tools',
    'Created merchant onboarding workflow',
    'Managed infrastructure for 50+ restaurants'
  ],
  ARRAY['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  true,
  3
),
(
  'IoT Room Monitoring System',
  'Developed an IoT-based system for real-time room environment monitoring using ESP32 microcontrollers.',
  ARRAY[
    'Implemented sensor integration for temperature and humidity',
    'Built cloud-based data visualization dashboard',
    'Created alerting system for threshold violations'
  ],
  ARRAY['ESP32', 'C++', 'MQTT', 'Firebase', 'React'],
  false,
  4
),
(
  'Smart Home Automation',
  'Created a comprehensive smart home system with voice control and automation capabilities.',
  ARRAY[
    'Integrated multiple IoT devices and sensors',
    'Implemented voice control using Google Assistant',
    'Built custom automation rules engine'
  ],
  ARRAY['Arduino', 'Raspberry Pi', 'Python', 'Node-RED'],
  false,
  5
);