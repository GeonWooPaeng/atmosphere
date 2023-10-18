/**
 * styled-components docs
 * https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
 *
 * folder-file structure
 * https://velog.io/@baby_dev/Next.js-13-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0-%EC%9D%B4%EC%81%9C-%EC%9E%A1%EA%B8%B0%EC%88%A0
 */

'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
