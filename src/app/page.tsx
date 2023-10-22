'use client';

import { useRouter } from 'next/navigation';

export default function Splash() {
  const router = useRouter();

  router.push('/home');
}
