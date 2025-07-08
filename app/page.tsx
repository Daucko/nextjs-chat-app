'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
  const [a, setA] = useState(false);

  // return <Button variant={'destructive'}>Hello World!</Button>;
  return <Button>Click here!</Button>;
}
