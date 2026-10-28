"use client";
import { useState } from "react";
import { Dialog } from "radix-ui";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const links = [["About", "about"], ["Services", "services"], ["Work", "work"], ["Brands", "brands"], ["Creative Quiz", "quiz"], ["Skills", "skills"], ["Contact", "contact"]];
export function MobileNav() {
  const [open, setOpen] = useState(false);
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild><Button variant="bare" className="mobile-menu-trigger" aria-label="Open navigation"><Menu /></Button></Dialog.Trigger>
    <Dialog.Portal><Dialog.Overlay className="mobile-nav-overlay" /><Dialog.Content className="mobile-nav-panel">
      <Dialog.Title className="sr-only">Portfolio navigation</Dialog.Title>
      <Dialog.Description className="sr-only">Explore the portfolio sections.</Dialog.Description>
      <Dialog.Close asChild><Button variant="bare" className="mobile-menu-close" aria-label="Close navigation"><X /></Button></Dialog.Close>
      <nav aria-label="Mobile navigation">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    </Dialog.Content></Dialog.Portal>
  </Dialog.Root>;
}
