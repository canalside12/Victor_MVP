import { createClient } from "@supabase/supabase-js";

// Use environment variables from Vercel (these must be set in your project settings)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create and export a single Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
