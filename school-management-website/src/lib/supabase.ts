import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Event {
  id: string;
  name: string;
  date: string;
  description?: string;
  category?: string;
  status: 'confirmed' | 'tentative' | 'cancelled';
  created_at: string;
}

export interface ParentReview {
  id: string;
  parent_name: string;
  child_name: string;
  review_text: string;
  video_url?: string;
  video_thumbnail?: string;
  approved: boolean;
  created_at: string;
}

export interface PublicHoliday {
  id: string;
  name: string;
  date: string;
  type: 'national' | 'state' | 'religious' | 'academic';
  description?: string;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  published_at: string;
  featured_image?: string;
}