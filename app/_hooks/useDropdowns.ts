import { useState } from 'react';

export const useDropdownToggle = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return { expandedId, toggleDropdown };
};

export const useIconToggle = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleIcon = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return { activeId, toggleIcon };
};
