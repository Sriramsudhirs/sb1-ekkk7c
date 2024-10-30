"use client";

import { Button } from '@/components/ui/button';
import { useSession, signIn, signOut } from "next-auth/react";
import { Menu, X, Settings } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BackgroundBegone
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/tools" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Tools
              </Link>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              {session?.user?.role === 'ADMIN' && (
                <Link href="/admin" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Admin
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {session.user?.image && (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <span className="text-sm font-medium text-gray-700">
                    {session.user?.name}
                  </span>
                </div>
                {session.user?.role === 'ADMIN' && (
                  <Link href="/admin">
                    <Button variant="ghost" size="icon">
                      <Settings className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                <Button variant="outline" onClick={() => signOut()}>
                  Sign out
                </Button>
              </div>
            ) : (
              <Button onClick={() => signIn('google')}>
                Sign in with Google
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/tools" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Tools
              </Link>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              {session?.user?.role === 'ADMIN' && (
                <Link href="/admin" className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                  Admin
                </Link>
              )}
              {session ? (
                <div className="pt-4">
                  <div className="flex items-center gap-2 px-3 py-2">
                    {session.user?.image && (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    )}
                    <span className="text-sm font-medium text-gray-700">
                      {session.user?.name}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => signOut()}
                    className="w-full mt-2"
                  >
                    Sign out
                  </Button>
                </div>
              ) : (
                <Button 
                  onClick={() => signIn('google')}
                  className="w-full mt-2"
                >
                  Sign in with Google
                </Button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}