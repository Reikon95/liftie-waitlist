-- Run this in the Supabase SQL Editor to create the waitlist table.
-- Dashboard: https://app.supabase.com → your project → SQL Editor

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  created_at timestamptz not null default now()
);

-- Allow anonymous inserts (e.g. from the landing page) using the anon key.
-- Restrict reads to authenticated users or use RLS as needed.
alter table public.waitlist enable row level security;

create policy "Allow anonymous insert"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Optional: only allow your backend or authenticated roles to read
create policy "Allow read for service role"
  on public.waitlist
  for select
  to service_role
  using (true);
