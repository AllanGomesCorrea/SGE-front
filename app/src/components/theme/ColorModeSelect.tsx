import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';

export default function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme();

  // Definindo o modo padrão como "light"
  React.useEffect(() => {
    if (!mode) {
      setMode('light');
    }
  }, [mode, setMode]);

  // Retorna null se você não quer mostrar o Select de forma alguma
  if (!mode) {
    return null;
  }

  // Se você realmente quer evitar que o Select seja renderizado
  return null;

  // Ou, se você quiser deixar o Select para uso futuro, mas não mostrar agora
  /*
  return (
    <Select
      value={mode}
      onChange={(event) =>
        setMode(event.target.value as 'system' | 'light' | 'dark')
      }
      SelectDisplayProps={{
        'data-screenshot': 'toggle-mode',
      }}
      {...props}
    >
      <MenuItem value="system">System</MenuItem>
      <MenuItem value="light">Light</MenuItem>
      <MenuItem value="dark">Dark</MenuItem>
    </Select>
  );
  */
}
