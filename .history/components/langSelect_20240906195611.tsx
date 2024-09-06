import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Languages } from 'lucide-react'
import { setUserLocale } from '@/services/locale';
import { Locale } from "@/i18n/config";



type Props = {
    defaultValue: string;
    items: Array<{ value: string; label: string }>;
    label: string;
  };

export default function LangSelect({defaultValue,
    items,
    label,}: Props) {
    
        function onChange(value: string) {
            const locale = value as Locale;
            startTransition(() => {
              setUserLocale(locale);
            });

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Languages className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
                {
                    
                }
              <DropdownMenuItem>FR</DropdownMenuItem>
              <DropdownMenuItem>EN</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    )
}
