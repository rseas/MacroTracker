import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://bdvicoydeziorhdtdufq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkdmljb3lkZXppb3JoZHRkdWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNTg0MzksImV4cCI6MjAwNzYzNDQzOX0.u4CinBEyEwZ7BbPRnsrAFD2ms7BHsrJjbs0FwkhjEC8';
export const supabase = createClient(supabaseUrl, supabaseKey);
