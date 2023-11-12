const { createClient } = require("@supabase/supabase-js");

const supabase = createClient('https://defuptopxkbwhlouqewj.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlZnVwdG9weGtid2hsb3VxZXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MTgyNjUsImV4cCI6MTk5OTM5NDI2NX0.zbK_jYOD9o66Ko9W6DrBT_aY2-wiTrZ_OGZT5nUtQRE');

module.exports = supabase;