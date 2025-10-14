-- ======================================
-- Victor MVP — Supabase Database Schema v2
-- ======================================
-- Author: Joseph Thon + GPT-5
-- Date: 2025-10-13
-- Description: Core database tables for the Victor platform.
-- Defines relationships between users, roles, projects, properties,
-- financials, and Markus AI logs.
-- Compatible with Supabase (PostgreSQL 15+)
-- ======================================

-- USER ROLES
CREATE TABLE victor_roles (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL, -- e.g. homeowner, contractor, investor, tenant, admin
  description TEXT
);

-- USERS
CREATE TABLE victor_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role_id INT REFERENCES victor_roles(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- PROPERTIES
CREATE TABLE victor_properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES victor_users(id) ON DELETE CASCADE,
  address TEXT NOT NULL,
  city TEXT,
  state TEXT,
  zip TEXT,
  property_type TEXT, -- e.g. single-family, duplex, condo
  created_at TIMESTAMP DEFAULT NOW()
);

-- PROJECTS
CREATE TABLE victor_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES victor_properties(id) ON DELETE CASCADE,
  contractor_id UUID REFERENCES victor_users(id),
  title TEXT NOT NULL,
  description TEXT,
  budget NUMERIC(12,2),
  status TEXT DEFAULT 'planning', -- planning, active, completed
  start_date DATE,
  end_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- FINANCIALS
CREATE TABLE victor_financials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES victor_projects(id) ON DELETE CASCADE,
  amount NUMERIC(12,2) NOT NULL,
  type TEXT, -- payment, invoice, refund
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- MARKUS AI LOGS
CREATE TABLE victor_ai_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES victor_users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  response TEXT,
  context JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
