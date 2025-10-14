-- ======================================
-- Victor MVP — Demo Seed Data v1
-- ======================================
-- Author: Joseph Thon + GPT-5
-- Date: 2025-10-13
-- Description: Inserts sample data for Victor MVP platform
-- ======================================

-- 1️⃣ Insert Roles
INSERT INTO victor_roles (name, description)
VALUES
  ('admin', 'System administrator with full access'),
  ('homeowner', 'Property owner managing renovation projects'),
  ('contractor', 'Professional managing project execution'),
  ('investor', 'User funding renovation projects'),
  ('tenant', 'Resident or renter linked to a property');

-- 2️⃣ Insert Users
INSERT INTO victor_users (id, email, full_name, role_id, created_at)
VALUES
  (gen_random_uuid(), 'admin@victor.io', 'Victor Admin', 1, '2025-10-13'),
  (gen_random_uuid(), 'ava.brooks@example.com', 'Ava Brooks', 2, '2025-10-13'),
  (gen_random_uuid(), 'elias.tran@example.com', 'Elias Tran', 3, '2025-10-13'),
  (gen_random_uuid(), 'monica.reyes@example.com', 'Monica Reyes', 4, '2025-10-13'),
  (gen_random_uuid(), 'derrick.cole@example.com', 'Derrick Cole', 5, '2025-10-13'),
  (gen_random_uuid(), 'jordan.kim@example.com', 'Jordan Kim', 2, '2025-10-13');

-- 3️⃣ Insert Properties
-- Linked to specific homeowners
INSERT INTO victor_properties (id, user_id, address, city, state, zip, property_type, created_at)
SELECT
  gen_random_uuid(), id, '124 Harbor View Dr', 'Charleston', 'SC', '29412', 'single-family', '2025-10-13'
FROM victor_users WHERE full_name = 'Ava Brooks'
UNION ALL
SELECT
  gen_random_uuid(), id, '78 Pinecrest Ave', 'Asheville', 'NC', '28801', 'duplex', '2025-10-13'
FROM victor_users WHERE full_name = 'Jordan Kim'
UNION ALL
SELECT
  gen_random_uuid(), id, '215 Oakridge Ln', 'Raleigh', 'NC', '27609', 'apartment', '2025-10-13'
FROM victor_users WHERE full_name = 'Derrick Cole';

-- 4️⃣ Insert Projects
INSERT INTO victor_projects (id, property_id, contractor_id, title, description, budget, status, start_date, end_date, created_at)
SELECT
  gen_random_uuid(), p.id, c.id, 'Kitchen Remodel', 'Full kitchen renovation with new cabinetry and flooring', 28500.00, 'active', '2025-09-15', '2025-11-01', '2025-10-13'
FROM victor_properties p, victor_users c
WHERE p.address = '124 Harbor View Dr' AND c.full_name = 'Elias Tran'
UNION ALL
SELECT
  gen_random_uuid(), p.id, c.id, 'Basement Conversion', 'Convert basement into office and guest suite', 19000.00, 'planning', '2025-10-01', NULL, '2025-10-13'
FROM victor_properties p, victor_users c
WHERE p.address = '78 Pinecrest Ave' AND c.full_name = 'Elias Tran'
UNION ALL
SELECT
  gen_random_uuid(), p.id, c.id, 'Roof Replacement', 'Replace aged roof shingles and reinforce attic insulation', 12500.00, 'completed', '2025-08-01', '2025-09-10', '2025-10-13'
FROM victor_properties p, victor_users c
WHERE p.address = '215 Oakridge Ln' AND c.full_name = 'Elias Tran';

-- 5️⃣ Insert Financials
INSERT INTO victor_financials (id, project_id, amount, type, description, created_at)
SELECT gen_random_uuid(), id, 12000.00, 'payment', 'Initial payment for kitchen remodel', '2025-10-13'
FROM victor_projects WHERE title = 'Kitchen Remodel'
UNION ALL
SELECT gen_random_uuid(), id, 4000.00, 'invoice', 'Material costs: cabinets and flooring', '2025-10-13'
FROM victor_projects WHERE title = 'Kitchen Remodel'
UNION ALL
SELECT gen_random_uuid(), id, 8500.00, 'payment', 'First milestone payment — framing and drywall', '2025-10-13'
FROM victor_projects WHERE title = 'Basement Conversion';

-- 6️⃣ Insert Markus AI Logs
INSERT INTO victor_ai_logs (id, user_id, message, response, context, created_at)
SELECT
  gen_random_uuid(), u.id,
  'Hey Markus, what’s my next scheduled project update?',
  'Your kitchen remodel progress meeting is set for October 15th at 2 PM.',
  '{"intent": "project_schedule", "confidence": 0.94}'::jsonb,
  '2025-10-13'
FROM victor_users u WHERE full_name = 'Ava Brooks'
UNION ALL
SELECT
  gen_random_uuid(), u.id,
  'Markus, summarize today’s expenses for me.',
  'Two new payments recorded totaling $16,000 across active projects.',
  '{"intent": "financial_summary", "confidence": 0.91}'::jsonb,
  '2025-10-13'
FROM victor_users u WHERE full_name = 'Victor Admin';
