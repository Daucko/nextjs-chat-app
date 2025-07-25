'use client';

import React from 'react';
import Link from 'next/link';
import { useNavigation } from '../../../../hooks/useNavigation';
import { Card } from '../../../ui/card';
import { UserButton } from '@clerk/nextjs';
import { Tooltip, TooltipContent, TooltipTrigger } from '../../../ui/tooltip';
import { Button } from '../../../ui/button';
import { useConversation } from '../../../../hooks/useConversation';
import { ThemeToggle } from '../../../ui/theme/theme-toggle';

const MobileNav = () => {
  const paths = useNavigation();

  const { isActive } = useConversation();

  if (isActive) return null;

  return (
    <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex lg:hidden items-center h-16 p-2">
      <nav className="w-full">
        <ul
          className="flex justify-evenly 
        items-center"
        >
          {paths.map((path, id) => {
            return (
              <li key={id} className="relative">
                <Link href={path.href}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        size="icon"
                        variant={path.active ? 'default' : 'outline'}
                      >
                        {path.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{path.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <UserButton />
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
