-- ============================================
-- murox.studio — Supabase Database Setup (Secure RLS Edition)
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

-- 2. Enable Row Level Security (RLS) to secure the table
alter table project_requests enable row level security;

-- 3. Create RLS Policy to allow anyone (public client) to submit inquiries
drop policy if exists "Enable insert for everyone" on project_requests;
create policy "Enable insert for everyone" on project_requests
  for insert with check (true);

-- 4. Create secure wrapper functions (security definer) to query/update/delete.
-- These functions run with owner privileges (bypassing RLS) but require a secret passcode.

create or replace function get_project_requests(passcode text)
returns setof project_requests
language plpgsql
security definer
as $$
begin
  if passcode != '6cc4aca9df_db_bypass_secure_token' then
    raise exception 'Unauthorized';
  end if;
  return query select * from project_requests order by created_at desc;
end;
$$;

create or replace function update_project_request_status(passcode text, req_id uuid, new_status text)
returns void
language plpgsql
security definer
as $$
begin
  if passcode != '6cc4aca9df_db_bypass_secure_token' then
    raise exception 'Unauthorized';
  end if;
  update project_requests set status = new_status where id = req_id;
end;
$$;

create or replace function delete_project_request(passcode text, req_id uuid)
returns void
language plpgsql
security definer
as $$
begin
  if passcode != '6cc4aca9df_db_bypass_secure_token' then
    raise exception 'Unauthorized';
  end if;
  delete from project_requests where id = req_id;
end;
$$;

-- 5. Create index for fast sorting
create index if not exists idx_project_requests_created_at
  on project_requests (created_at desc);
