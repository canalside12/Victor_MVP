// Victor MVP — Shared Data Models
// Used across frontend and backend for type safety and consistency

// 🧑 User
export interface User {
  id: string
  email: string
  full_name: string
  role: 'homeowner' | 'contractor' | 'investor' | 'property_manager' | 'tenant'
  created_at?: string
}

// 🏠 Property
export interface Property {
  id: string
  owner_id: string
  address: string
  status: 'active' | 'under_renovation' | 'inactive'
  valuation: number
  metadata?: Record<string, any>
  created_at?: string
}

// 🏗️ Project
export interface Project {
  id: string
  property_id: string
  contractor_id: string
  title: string
  description?: string
  budget_total: number
  progress: number
  start_date?: string
  end_date?: string
  created_at?: string
}

// 💵 Transaction
export interface Transaction {
  id: string
  project_id: string
  payer_id: string
  payee_id: string
  amount: number
  type: 'payment' | 'refund' | 'deposit'
  description?: string
  created_at?: string
}

// 🧾 Account
export interface Account {
  id: string
  user_id: string
  account_name: string
  account_type: 'checking' | 'savings' | 'business'
  balance: number
  currency: string
  created_at?: string
}

// 📋 Task
export interface Task {
  id: string
  project_id: string
  title: string
  status: 'todo' | 'in_progress' | 'done'
  due_date?: string
  assigned_to?: string
  created_at?: string
}

// 🤖 Markus Log
export interface MarkusLog {
  id: string
  user_id: string
  role: string
  query: string
  response: string
  action?: Record<string, any>
  created_at?: string
}
