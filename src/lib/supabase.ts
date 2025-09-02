import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          password: string
          name: string
          role: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          password: string
          name: string
          role?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          password?: string
          name?: string
          role?: string
          created_at?: string
        }
      }
      members_teams: {
        Row: {
          id: string
          name: string
          position: string
          image_url: string
          bio: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          position: string
          image_url: string
          bio: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          position?: string
          image_url?: string
          bio?: string
          created_at?: string
        }
      }
    }
  }
}