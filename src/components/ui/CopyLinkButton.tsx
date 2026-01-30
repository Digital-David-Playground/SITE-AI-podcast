'use client';

import { useState } from 'react';
import { Link as LinkIcon, Check } from 'lucide-react';
import { Button } from './Button';

interface CopyLinkButtonProps {
  url: string;
  label?: string;
  copiedLabel?: string;
}

export function CopyLinkButton({
  url,
  label = 'Copy Link',
  copiedLabel = 'Copied!',
}: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={handleCopy}>
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          {copiedLabel}
        </>
      ) : (
        <>
          <LinkIcon className="w-4 h-4 mr-2" />
          {label}
        </>
      )}
    </Button>
  );
}
