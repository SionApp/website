// Issue #72: apuntaba a un proyecto Supabase viejo/pausado (Sistem Admin,
// bhtrlwkmcchobwpjkait) hardcodeado acá, sin tabla `events` — ahora lee del
// .env, igual que el resto del proyecto, para poder apuntar al proyecto
// SionERP real (rpacdeyavjodixeymzpb en producción).
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});