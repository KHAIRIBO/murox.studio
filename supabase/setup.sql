-- ============================================
-- murox.studio — Supabase Database Setup
-- Run this SQL in: Supabase Dashboard → SQL Editor
-- ============================================

-- 1. Create the project_requests table
create table if not exists project_requests (
  id            uuid        default gen_random_uuid() primary key,
  created_at    timestamptz default now() not null,
  first_name    text        not null,
  last_name     text        not null,
  how_know_us   text,
  project_types text[],
  budget        text,
  details       text,
  email         text,
  whatsapp      text,
  instagram     text,
  status        text        default 'new' check (status in ('new', 'contacted', 'in_progress', 'completed', 'rejected'))
);

-- 2. Disable RLS (admin page handles auth at app level)
alter table project_requests disable row level security;

-- 3. Optional: index on created_at for fast sorting
create index if not exists idx_project_requests_created_at
  on project_requests (created_at desc);
