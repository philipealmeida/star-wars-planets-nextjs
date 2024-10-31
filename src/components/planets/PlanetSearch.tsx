import { ChangeEvent, useState, useEffect, useCallback } from 'react';
import styles from '@/styles/components/planets/PlanetSearch.module.css';

interface PlanetSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PlanetSearch({ value, onChange }: PlanetSearchProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  }, [onChange]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={localValue}
        onChange={handleChange}
        placeholder="Search planets..."
        className={styles.input}
      />
    </div>
  );
}