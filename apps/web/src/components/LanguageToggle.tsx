import React from "react";
import { useRouter } from "next/router";
import { Check, ChevronsUpDown } from "lucide-react";

import {
  Button,
  cn,
  Command,
  CommandGroup,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@acme/ui";

const getLang = (locale: string) => (locale === "bn" ? "বাংলা" : "English");

export function LanguageToggle() {
  const { locale, locales, push, pathname } = useRouter();
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex w-[110px] justify-between"
        >
          {locale ? getLang(locale) : "Select Language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandGroup>
            {locales?.map((l) => (
              <CommandItem
                key={l}
                onSelect={() => {
                  void push(pathname, undefined, { locale: l });
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    locale === l ? "opacity-100" : "opacity-0",
                  )}
                />
                {getLang(l)}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
