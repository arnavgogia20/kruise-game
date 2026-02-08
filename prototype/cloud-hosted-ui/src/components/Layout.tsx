import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 min-h-screen bg-slate-800 border-r border-slate-700 p-4">
          <div className="mb-8">
            <h1 className="text-lg font-semibold text-white">KruiseGame</h1>
            <span className="text-xs text-slate-400">Cloud-Hosted</span>
          </div>
          
          <nav className="space-y-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded text-sm ${isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50'}`
              }
            >
              Overview
            </NavLink>
            <NavLink 
              to="/deploy" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded text-sm ${isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50'}`
              }
            >
              Deploy
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded text-sm ${isActive ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-700/50'}`
              }
            >
              Services
            </NavLink>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
