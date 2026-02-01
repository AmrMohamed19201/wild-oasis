import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hxfcgkrpdkujskwykgdi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4ZmNna3JwZGt1anNrd3lrZ2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk5NDYxODEsImV4cCI6MjA4NTUyMjE4MX0.pvcCFe4BfpcFx69zi1F-jAVG43z4OvDk7e9OqHbz4sY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
