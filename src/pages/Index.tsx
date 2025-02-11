
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { useAuth } from '@/components/AuthProvider';

const Index = () => {
  const { user, userRole: authRole } = useAuth();
  const [userRole, setUserRole] = useState<'admin' | 'customer' | 'driver'>(authRole || 'customer');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  // Set initial role from auth when it's available
  useEffect(() => {
    if (authRole) {
      setUserRole(authRole);
    }
  }, [authRole]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar role={userRole} />
      <main className="flex-1 p-8 animate-fade">
        <div className="glass-panel rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-8">Transport Management System</h1>
          <p className="text-lg text-gray-600 mb-8">
            Selamat datang di sistem manajemen transportasi modern Anda
          </p>
          
          {/* Role Selector - Temporary untuk demo */}
          <div className="flex gap-4">
            <button
              onClick={() => setUserRole('admin')}
              className={`px-4 py-2 rounded-lg transition-all ${
                userRole === 'admin'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              Admin View
            </button>
            <button
              onClick={() => setUserRole('customer')}
              className={`px-4 py-2 rounded-lg transition-all ${
                userRole === 'customer'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              Customer View
            </button>
            <button
              onClick={() => setUserRole('driver')}
              className={`px-4 py-2 rounded-lg transition-all ${
                userRole === 'driver'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              Driver View
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
