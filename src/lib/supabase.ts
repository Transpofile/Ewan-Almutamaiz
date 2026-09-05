/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://drzewhffgmoxzurwciwq.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyemV3aGZmZ21veHp1cndjaXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2MTEwNzgsImV4cCI6MjEwNDE4NzA3OH0.riSxCCsEJ85ibFAEYl2dVi3CXxxStVo34lVzybg-FaE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
